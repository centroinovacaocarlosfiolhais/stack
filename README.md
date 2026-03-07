# STACK! — CICF AI Challenge

> **Constrói um jogo com IA em menos de 2 horas.**  
> Um desafio de vibe coding para jovens dos 12 aos 15 anos, desenvolvido para o [Centro de Inovação Carlos Fiolhais](https://cicf.pt).

---

## O Desafio

Os participantes usam o **Claude.ai** como co-programador para construir, do zero, um jogo de torre a funcionar no browser — sem instalar nada, sem saber programar.

O jogo é o **STACK!**: blocos que entram alternadamente da esquerda e da direita, uma régua de pontuação na base, e uma torre que vai crescendo a cada TAP. O segredo não é o código — é saber comunicar com a IA. Escrever bons prompts, testar o resultado, encontrar bugs e iterar.

O desafio estrutura-se em torno da **Framework STEP do CICF** — um ciclo de aprendizagem ativa com 5 momentos sequenciais que vai do Setup à Retrospetiva, passando por Identificar, Desafiar e Validar.

---

## Ficheiros

| Ficheiro | Descrição |
|---|---|
| `index.html` | Jogo de referência completo — PWA instalável, funciona offline |
| `desafio.html` | Ficha de atividade para os participantes — guia de prompting, QA, carreiras, deploy |
| `README.md` | Este ficheiro |

Para jogar o jogo de referência ou ler a ficha, basta abrir o ficheiro `.html` diretamente no browser — não é necessário instalar nada.

---

## O Jogo — STACK!

O **STACK!** é um jogo de empilhamento de blocos inspirado no clássico Tower Bloxx:

- Um retângulo colorido entra pelo lado esquerdo ou direito do ecrã, deslizando horizontalmente
- O jogador carrega **ESPAÇO** ou faz **TAP** para parar o bloco
- Nasce um novo bloco do lado oposto, ligeiramente mais pequeno, posicionado um bloco acima
- Uma **régua de pontuação** na base dá até 50 pontos por alinhamento centrado
- Se o novo bloco não sobrepuser o anterior — **game over**, a torre colapsa
- A velocidade aumenta a cada nível
- Registo de recorde via `localStorage`
- Manifesto PWA embutido — pode ser instalado no telemóvel como app nativa

---

## A Framework STEP

Esta atividade segue a **Framework STEP** — metodologia de aprendizagem experiencial do CICF:

```
STEP 0 · SETUP         10 min   Objeto inesperado → tensão cognitiva
STEP 1 · IDENTIFICAR   20 min   Brief Canvas → definir antes de resolver
STEP 2 · DESAFIAR      50 min   Fazer, falhar, iterar (fases A → B → C)
STEP 3 · VALIDAR       20 min   Galeria de projetos + feedback entre pares
STEP 4 · RETROSPETIVA  15 min   "Aprendi que… Surpreendi-me quando… Quero…"
────────────────────────────────
Total                 ~2 horas
```

**Princípio central:** o participante aprende fazendo, falhando, iterando e refletindo. O dinamizador nunca dá respostas — faz perguntas.

---

## Vibe Coding — Anatomia de um Prompt

A ficha de atividade inclui um guia de **vibe coding** adaptado para jovens, com os 5 ingredientes de um bom prompt:

1. **Contexto** — onde estamos, qual é o projeto
2. **Papel da IA** — quem ela é neste momento
3. **Pedido claro** — o comportamento e o visual com detalhe
4. **Formato do output** — como queres receber o resultado
5. **Restrições** — o que não pode acontecer

E as 4 superpotências necessárias para vibe coding — nenhuma delas é "saber programar":  
**Observar · Descrever · Testar · Iterar**

---

## Colocar Online (PWA)

Para instalar como app nativa no telemóvel, o jogo precisa de ser servido via HTTPS.  
Dois caminhos gratuitos:

**Netlify Drop** (2 minutos, sem conta):
1. Vai a [netlify.com/drop](https://netlify.com/drop)
2. Renomeia `cicf-stack-game.html` → `index.html`
3. Cria uma pasta e arrasta para a zona a tracejado
4. URL gerado automaticamente com HTTPS

**GitHub Pages** (este repositório):
1. Fork ou clone este repositório
2. Vai a **Settings → Pages → Deploy from branch → main / root**
3. O jogo fica em `https://[username].github.io/[repo-name]`

---

## Tecnologia

Construído intencionalmente com a stack mais simples possível:

- **HTML5 Canvas API** — rendering do jogo
- **JavaScript vanilla** — sem frameworks, sem dependências
- **PWA Manifest** embutido via `Blob URL` — instalável sem servidor dedicado
- **Zero build step** — abre no browser, funciona

Esta escolha é pedagógica: permite que os participantes peçam à IA um único bloco de código que funciona imediatamente, sem setup.

---

## Avaliação do Desafio

| Critério | Peso |
|---|---|
| Jogo funcional no browser | 40% |
| Qualidade e evolução dos prompts | 25% |
| QA — bug reports preenchidos | 20% |
| Criatividade e polish visual | 15% |

**Entrega mínima:** ficheiro `jogo.html` jogável + 3 prompts usados + 2 bug reports + 1 reflexão oral.

---

## Créditos

**Challenge design e desenvolvimento:** [David Marques](https://github.com/davidmarques)  
**Método:** Framework STEP — [Centro de Inovação Carlos Fiolhais](https://cicf.pt)  
**Desenvolvido via vibe coding** com [Claude.ai](https://claude.ai) (Anthropic)  
**Ano:** 2026

---

## Licença

Este projeto é publicado sob licença **CC BY-SA 4.0** — podes usar, adaptar e redistribuir livremente, desde que atribuas a autoria e mantenhas a mesma licença.

[![CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0/)

---

*CICF × Claude.ai × Março 2026*
