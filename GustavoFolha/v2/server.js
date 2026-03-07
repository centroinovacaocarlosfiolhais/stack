const http = require('http');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');

const PORT = process.env.PORT || 3000;

// ─── HTTP server (serve index.html) ───────────────────────
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

// ─── WebSocket server ─────────────────────────────────────
const wss = new WebSocket.Server({ server });

// Rooms: map of roomId -> [ws1, ws2]
const waiting = []; // players waiting for a match
let roomCounter = 0;

function send(ws, obj) {
  if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(obj));
}

wss.on('connection', (ws) => {
  ws.isAlive = true;
  ws.on('pong', () => { ws.isAlive = true; });

  // Try to match with a waiting player
  if (waiting.length > 0) {
    const opponent = waiting.shift();
    const roomId = ++roomCounter;

    ws.roomId = roomId;
    ws.playerIdx = 1;
    ws.opponent = opponent;

    opponent.roomId = roomId;
    opponent.playerIdx = 0;
    opponent.opponent = ws;

    // Tell both players the game can start
    send(opponent, { type: 'matched', playerIdx: 0, roomId });
    send(ws,       { type: 'matched', playerIdx: 1, roomId });
  } else {
    // Wait for an opponent
    waiting.push(ws);
    send(ws, { type: 'waiting' });
  }

  ws.on('message', (raw) => {
    let msg;
    try { msg = JSON.parse(raw); } catch(e) { return; }

    // Relay game state to opponent
    if (ws.opponent && ws.opponent.readyState === WebSocket.OPEN) {
      send(ws.opponent, { type: 'opponent_state', data: msg });
    }
  });

  ws.on('close', () => {
    // Remove from waiting list if still there
    const idx = waiting.indexOf(ws);
    if (idx !== -1) waiting.splice(idx, 1);

    // Notify opponent
    if (ws.opponent) {
      send(ws.opponent, { type: 'opponent_left' });
      ws.opponent.opponent = null;
    }
  });
});

// Heartbeat to detect dead connections
setInterval(() => {
  wss.clients.forEach((ws) => {
    if (!ws.isAlive) { ws.terminate(); return; }
    ws.isAlive = false;
    ws.ping();
  });
}, 30000);

server.listen(PORT, () => {
  console.log(`Pixel Tower server running on port ${PORT}`);
});
