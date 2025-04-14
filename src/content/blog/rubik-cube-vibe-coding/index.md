---
title: "Como criei um Cubo mágico 3D usando Vibe Coding"
summary: "Um relato completo de como construí um cubo mágico 3D com Three.js e inteligência artificial, usando apenas prompts e muita curiosidade."
date: "Apr 10 2025"
draft: false
tags:
  - Vibe coding
  - Typescript
  - Desenvolvimento
  - Criatividade
  - Engenharia de Prompt
  - Programação
---

![Capa](https://i.imgur.com/9IhIYcx.png)

- [Introdução](#introdução)
- [Prompts Iniciais](#prompts-iniciais)
- [Passo 1 - Setup do projeto](#passo-1---setup-do-projeto)
- [Passo 2 - Criar um cubo simples com todas as faces coloridas](#passo-2---criar-um-cubo-simples-com-todas-as-faces-coloridas)
- [Passo 3 - Construir um Cubo Rubik 3x3x3](#passo-3---construir-um-cubo-rubik-3x3x3)
- [Passo 4 - Adicionar Controles de orbita e controle manual na rotação do cubo](#passo-4---adicionar-controles-de-orbita-e-controle-manual-na-rotação-do-cubo)
- [Passo 5 - Rotacionando as faces do cubo](#passo-5---rotacionando-as-faces-do-cubo)
  - [Passo 5.1 - Arrumando um pequeno warning](#passo-51---arrumando-um-pequeno-warning)
  - [Passo 5.2 - Rotacionando todas as faces](#passo-52---rotacionando-todas-as-faces)
  - [Passo 5.3 - Debugando com a IA](#passo-53---debugando-com-a-ia)
  - [Passo 5.4 - A Solução](#passo-54---a-solução)
- [Passo 6 - Adicionar Adesivos com cores reais](#passo-6---adicionar-adesivos-com-cores-reais)
- [Passo 7 - Representação lógica e inicio do Solver](#passo-7---representação-lógica-e-inicio-do-solver)
- [Passo 7.1 - Descorrompendo o cubo mágico](#passo-71---descorrompendo-o-cubo-mágico)
- [Fim e próximos passos](#fim-e-próximos-passos)
- [Conclusão](#conclusão)

## Introdução

Recentemente, em uma conversa no trabalho, fui surpreendido por uma feature simples numa loja virtual que vendia um produto físico. O que me chamou atenção foi que dava pra ver o produto em 3D — isso mesmo, eu podia girar o item e ver todos os ângulos antes de decidir comprar. Achei aquilo muito legal.

Na minha experiência como desenvolvedor (que ainda não é tão longa), sempre estive acostumado a codar sites com HTML, CSS e Javascript puro. Nunca tinha pensado em fazer algo 3D. Claro, nos últimos anos alguns portfólios chamaram atenção, como o do <a href="https://bruno-simon.com/" target="_blank">Bruno Simon</a>, mas nunca me comparei, porque sempre achei que esse tipo de coisa envolvia modelagem e habilidades de design — áreas que eu não domino.

Mas aí, conversando com meu colega, conheci o framework <a href="https://threejs.org/" target="_blank">Three.js</a>, que basicamente é o que permite criar esse tipo de coisa em 3D direto no navegador. Fiquei bem curioso e com vontade de aprender. Afinal, é Javascript, não deve ser tão difícil assim, né?

Como todo bom dev sabe, a melhor forma de aprender é fazendo. Então resolvi procurar um projeto simples pra começar. Fui correndo no YouTube ver se achava algum vídeo aleatório de alguém construindo algo com Three.js — geralmente um indiano (quem nunca?). E de fato, achei: um <a href="https://www.youtube.com/watch?v=UF4r9HVPGjc&ab_channel=Rishabh" target="_blank">vídeo</a> que mostra um site resolvendo um cubo mágico 3D, passo a passo. Fiquei muito animado! Fui procurar o código na descrição… mas nada, o autor não tinha deixado.

Foi aí que pensei: “Se tem vídeo mostrando, então dá pra fazer” (mesmo sabendo que às vezes não é tão simples assim kkk). E foi assim que decidi juntar o assunto do momento — o tal do Vibe Coding — com a minha vontade de codar um Cubo Mágico 3D usando Three.js.

## Prompts Iniciais

Após definir que ia usar essa tal Vibe coding, admito que não botei muita fé mas lá fui eu entrar no GPT 4o e escrevi meu primeiro prompt, fiz favor de fazer tudo em inglês, porque já percebi que ele costuma funcionar melhor assim:

> Let's assume I don't know anything about Three.JS but I want to build a Rubik cube solver.
> To make this simple, I want to build a functional Rubik’s Cube first using Three.js.
> Could you help me on this journey with a step-by-step?

Para minha surpresa, ele respondeu com um roteiro super organizado, com todos os passos que eu precisava seguir:

```markdown
# 🧭 Step-by-Step Roadmap

## Step 1: Set Up Your Project

Install the tools (Node.js, a basic HTML/JS project structure, and Three.js).

Set up a basic scene: camera, renderer, and lighting.

## Step 2: Create a Single Cubelet

Learn how to build a single colored cube (the building block of the Rubik’s Cube).

Use BoxGeometry and MeshBasicMaterial with colors.

## Step 3: Build the 3x3x3 Rubik’s Cube

Arrange 27 cubelets in a 3D grid.

Group cubelets for ease of manipulation.

## Step 4: Add Camera Controls

Use OrbitControls so you can view the cube from all angles.

## Step 5: Implement Face Rotation

Detect and rotate individual cube faces (groups of cubelets).

Add basic UI or keyboard/mouse input to trigger rotations.

## Step 6: Add Shuffle & Reset

Randomly shuffle the cube.

Create a reset button to return to the solved state.

## Step 7: Build the Solver (Advanced)

Represent the cube's state in code.

Implement or adapt a solving algorithm (like Kociemba’s algorithm).
```

Na hora que li isso, fiquei animado. O plano estava ali, todo mastigado. Era só seguir passo a passo — e foi exatamente o que eu fiz.

## Passo 1 - Setup do projeto

> A partir daqui, para não poluir o artigo com várias linhas de código, vou apenas mostrar o resultado e deixar um link para o 🔗 Ver commit correspondente a cada etapa.

Inicialmente uma estrutura básica: um index.html apontando para um script chamado main.js.

Logo em seguida, pedi educadamente pro GPT usar TypeScript daqui pra frente — e ele atendeu.

Com tudo configurado, o resultado inicial foi este aqui:

![step-01](https://i.imgur.com/GvsGqM3.png)

Sim, um cubo vazio com as arestas vermelhas. Pode parecer pouco, mas já é um começo. Não vou explicar o código dessa parte aqui — isso fica pra outro artigo. Até porque não seria _Vibe Coding_ se eu parasse para tentar entender o código, né?

<a href="https://github.com/Ryrden/rubik-cube-three-js/blob/6e8e2ea52de016f79a5ac4276e891aa55171ce36/src/main.ts" target="_blank">🔗 Ver commit</a>

## Passo 2 - Criar um cubo simples com todas as faces coloridas

Nesse passo, o GPT fez uma alteração simples mas importante: em vez de deixar só a “casca” do cubo, ele passou a pintar cada face com uma cor diferente usando valores hexadecimais.

O resultado ficou assim:

![step-02](https://i.imgur.com/9FyJyFO.png)

Assim que vi o resultado comecei a pensar que eu de fato iria chegar em algum lugar com apenas prompts mas mantive a calma até o próximo passo.

<a href="https://github.com/Ryrden/rubik-cube-three-js/blob/6df6a8bb630f14ba0d7a36ad0cb1b57fd0583825/src/main.ts" target="_blank">🔗 Ver commit</a>

## Passo 3 - Construir um Cubo Rubik 3x3x3

Aqui as coisas começaram a parecer mágicas.

Assim que o GPT gerou o código, a primeira coisa que pensei foi:

> “Impossível, isso com certeza tem bug.”

Mas seguindo o espírito da Vibe, copiei e colei tudo na minha IDE sem nem revisar. Rodei o projeto… e pra minha surpresa: lá estava ele. Um cubo 3x3x3, com todas as divisões certinhas, bonitinho na tela.

![step-03](https://i.imgur.com/tJhw92k.png)

Aqui não pude me segurar, fiquei animado demais, comecei a mandar mensagens pra amigos devs falando o que estava por vir e depois de surtar um pouco, respirei fundo e pensei: “Calma lá, Ryan. É só um cubo com divisões. Ele nem gira ainda.” E voltei pro foco.

<a href="https://github.com/Ryrden/rubik-cube-three-js/blob/d9f3383d4f5945be99632cc3e572c48ef3cf844a/src/main.ts" target="_blank">🔗 Ver commit</a>

## Passo 4 - Adicionar Controles de orbita e controle manual na rotação do cubo

Até aqui, o cubo ficava girando sozinho, infinitamente. Não dava pra interagir com ele — só assistir.

Esse passo foi apenas para permitir que eu como usuário pudesse rotacionar este cubo em todos os ângulos.

Então ele gerou o código e eu o aceitei copiando e colando na minha IDE e o resultado não foi diferente, eu podia girar o cubo, dar zoom e movimentar a minha tela me afastando do cubo ou não.

<a href="https://github.com/Ryrden/rubik-cube-three-js/blob/b49fd666d2e7830322a4bfda18150e905124a080/src/main.ts" target="_blank">🔗 Ver commit</a>

## Passo 5 - Rotacionando as faces do cubo

Aqui eu achei interessante a maneira que o GPT estava abordando o problema, ele podia claramente permitir a rotação de todas as faces do cubo ao mesmo tempo, mas ele preferiu validar a ideia em uma face primeiro, no caso, a escolhida foi a face superior, o Topo do cubo.

e lá foi ele executar isso, me gerou o código, eu copiei, colei e rodei o projeto. E então:

![step-05](https://i.imgur.com/xfyxogN.png)

A face de cima girava com animação, mantendo as cores certas e — o mais surpreendente — sem nenhum bug aparente. Fiquei empolgado demais! Era surreal pensar que só com alguns prompts bem escritos eu já estava vendo isso acontecer.

<a href="https://github.com/Ryrden/rubik-cube-three-js/blob/8e633936a42f4b8ad4f7429a7d12568ce2f26ef1/src/main.ts" target="_blank">🔗 Ver commit</a>

### Passo 5.1 - Arrumando um pequeno warning

Nesse ponto, decidi interromper um pouco o fluxo de prompts pra relatar um warning de tipagem do TypeScript. Pedi ajuda ao GPT, mas a solução que ele sugeriu... não funcionou.

A sorte é que meu Copilot estava esperto e sugeriu usar esse tipo de casting:

```typescript
const mesh = ...<instância>... as unkown as tipoDesejado
```

Dei uma pesquisada rápida e vi que essa prática é até comum em TypeScript quando você tem certeza da tipagem esperada. Como no meu caso eu não tinha certeza de nada, deixei um comentário avisando que essa linha podia esconder um bug. Mas segui em frente com fé.

### Passo 5.2 - Rotacionando todas as faces

Esse foi o momento em que o projeto começou a ficar sério.

O GPT decidiu “generalizar” a função que rotacionava o topo, adaptando o código pra permitir a rotação de qualquer face. Achei a ideia legal, copiei, colei e... nada funcionou.

Nem a face de cima, que antes girava direitinho, se mexia mais.

Foi aí que bateu o instinto de programador: “Ryan, você vai ter que parar com essa vibe e começar a debugar.” Mas antes de abandonar o Vibe Coding, tive um pensamento: _por que não pedir pro próprio GPT fazer o debug? Afinal, ele mesmo escreveu tudo._

### Passo 5.3 - Debugando com a IA

Pedi para o GPT adicionar alguns console.debug estratégicos pra entender onde estava a falha.

Executei o projeto com os logs, e logo apareceu esse alerta no console (sim, o próprio GPT escreveu a mensagem):

> ⚠️ Expected 9 cubelets but found 0. Check layer selection logic.
> rotateFace @ main.ts:87

Apontei o erro de volta pro GPT, e então algo curioso aconteceu...

### Passo 5.4 - A Solução

O GPT fica em estado de "Thinking" por pelo menos 10 segundos até que ele surge com a seguinte mensagem:

```markdown
# 🚨 Problem Root Cause

Math.abs(c.userData.initialPosition[axis] - value) < 0.01

This line checks if the cubelet is exactly on the layer like y = 1, but due
to floating-point imprecision when using .applyMatrix4(...), the initialPosition
might slightly drift from 1.00 to something like 0.999999.

## ✅ Robust Fix: Round Logical Positions Before Filtering

We’ll round the positions to the nearest integer (since cubelets are at -1, 0, or 1),
so we always get perfect matching.

### 🧠 Replace this line:

const match = Math.abs(pos[axis] - value) < 0.01;

### ✅ With this:

const rounded = Math.round(pos[axis]);
const match = rounded === value;

## ✅ Why This Works

- Rounding keeps your logical layer detection accurate (-1, 0, 1).
- This makes the cube reliable even after many rotations where tiny
  floating-point errors accumulate.
```

Aqui eu apenas comecei a rir de nervoso, um conjunto de emoções surgiram sobre mim que eu apenas parei de digitar por uns 3 minutos e refleti tudo que estava acontecendo, eu simplesmente deleguei do começo ao fim uma ideia que tinha, não me coloquei em nenhum momento como força pensadora de fato na ideia que tinha e apenas criei prompts que orientavam um possível caminho solução.

Bom, ao final de tudo isso, o resultado foi esse aqui:

![step-05](https://i.imgur.com/7stAskG.png)

> Obs: um pouco antes disso tudo, traduzi os comandos para teclas mais familiares (WASD), porque eu realmente acreditei que teria que por a mão na massa.

<a href="https://github.com/Ryrden/rubik-cube-three-js/blob/ec843b3efc0705f5aeb819a12d4f4a40e1b9c9be/src/main.ts" target="_blank">🔗 Ver commit</a>

## Passo 6 - Adicionar Adesivos com cores reais

Depois do caos e glória do passo anterior, confesso que não dei muita atenção ao que vinha a seguir. Só pensei: _"Se chegou até aqui, vai continuar funcionando de algum jeito."_

Daqui pra frente, deu para perceber que ele tinha saido do roteiro do primeiro prompt mas tudo bem, agora, a proposta do GPT dessa vez era deixar o cubo mais realista, adicionando os famosos “adesivos” coloridos — como num cubo mágico de verdade. Então ele gerou o código, eu copiei, colei e pronto.

O resultado foi esse:

![step-06](https://i.imgur.com/Uqqiamr.png)

Novamente, de se impressionar né? Ficou bem bonito e sofisticado, bora pra próxima etapa q ta chegando no final

<a href="https://github.com/Ryrden/rubik-cube-three-js/blob/9b92e73b4d145f7e40e301c415af96a9b29cb5d3/src/main.ts" target="_blank">🔗 Ver commit</a>

## Passo 7 - Representação lógica e inicio do Solver

Aqui o GPT decidiu dar um salto mais técnico.

A ideia era criar uma estrutura de dados que representasse a posição e o estado de cada face do cubo. Isso seria o primeiro passo pra começar a desenvolver o **solver** de fato.

Porém apesar de muito desafiador essa parte e animador também, eu não dei continuidade na mesma porque eu encontrei um bug no cubo: quando um movimento de rotação de face ocorre ao mesmo tempo que outra face esta rotacionando e elas se cruzam, o cubo se corrompe, tornando a imagem uma coisa horrorosa.

## Passo 7.1 - Descorrompendo o cubo mágico

Expliquei pro GPT o que estava acontecendo e aqui fiz favor de me colocar em um papel atual de pensador, ao invés de apenas falar o que aconteceu e esperar sua milagrosa resposta, sugeri que houvesse uma Fila para executar os movimentos e que houvesse um sistema de locking na função de rotação do cubo para evitar sobreposição, deste modo, nenhuma rotação de face poderia acontecer sem que a anterior tivesse sido executada

Dito e feito, ele gerou um código maravilhoso, não exatamente como eu esperava porque o Javascript não tem a estrutura de dados Fila implementada nativamente, tendo que usar de apoio o comando `.shift()` que é bem lento na verdade, mas pro problema em questão não me importei (entrada pequena)

Adicionei o código no projeto, que já estava batendo suas 200 linhas, e finalmente: o cubo parou de se corromper 🎉

<a href="https://github.com/Ryrden/rubik-cube-three-js/blob/7ca596169221ed0632baec5ca299df40f2181e24/src/main.ts" target="_blank">🔗 Ver commit</a>

## Fim e próximos passos

Depois da última etapa, usei o restante do chat para modularizar o código e montar um README bonitinho, explicando como tudo funciona. Aliás, usei meu template padrão que aplico em quase todos os projetos — se quiser usar também, ele está disponível <a href="https://github.com/Ryrden/readme-template" target="_blank">aqui</a>.

E enfim… cheguei ao fim dessa aventura. Pode parecer mentira, mas tudo que você leu até o **Passo 7** aconteceu em **apenas uma hora**. Isso mesmo: em só **1 hora** escrevendo prompts, copiando e colando código, eu tinha um cubo mágico 3D funcional na tela.

E sabe o que é mais legal? Mesmo se eu decidir continuar esse projeto sem o Vibe Coding, dá pra ver que ele está em um ótimo estado. O código gerado pelo GPT, depois de modularizado, ficou limpo, organizado e legível. É totalmente possível continuar construindo um solver em cima disso.

Claro que, em algum momento, vou querer entender tudo a fundo. E é por isso que **vou escrever outro artigo explicando o funcionamento interno do código** — linha por linha, pra valer. Afinal, por mais legal que seja delegar tarefas para a IA, como dev eu não aceito abrir mão totalmente do entendimento daquilo que estou construindo.

Se você está lendo esse artigo agora e ainda não viu o destrinchando o código, pode me cobrar.

## Conclusão

A grande lição que tiro dessa experiência é simples:

> **A IA não vai substituir bons programadores** — mas pode sim substituir quem está no projeto só pra fazer o básico.

Coisas como montar um CRUD ou seguir instruções técnicas repetitivas? A IA resolve fácil. Mas traduzir regras de negócio, entender problemas reais e propor soluções? Isso ainda exige pensamento humano — e vai continuar exigindo por um bom tempo.

Sobre o Vibe Coding, eu não vejo isso como uma “nova área” na programação. Mas vejo, sim, como uma **habilidade poderosa** que vai se tornar cada vez mais valorizada.

No meu caso, tive uma ideia e, com prompts bem escritos e direcionamento, cheguei exatamente onde queria — rápido e com qualidade. Mas só consegui porque já tenho experiência e conseguir guiar a IA com clareza.

---

Espero que tenha gostado do artigo e que ele tenha feito você refletir ao menos um pouquinho. Se tiver alguma dúvida ou sugestão, deixe um comentário abaixo ou entre em contato comigo pelo [LinkedIn](https://www.linkedin.com/in/ryan25/).
