---
title: "Guess The Color "
summary: "Minigame para adivinhar a cor (RGB) feito inteiramente com HTML, CSS e Javascript"
date: "Mar 18 2022"
draft: false
tags:
- HTML
- CSS
- Javascript
repoUrl: https://github.com/Ryrden/Guess-the-Color
demoUrl: https://rgbguesscolor.netlify.app/
lang: "pt-br"
---


![Capa](https://i.imgur.com/JMN1P9B.gif)

## 🎮 Sobre o projeto

Construí esse jogo porque acabei de terminar um curso de JavaScript e precisava fazer algo de verdade, não mais uma página estática ou outro Todo app. Encontrei um jogo de adivinhação de cores RGB online, achei que conseguiria replicar em um final de semana, e levou três. A cada tarde eu recarregava o navegador e me sentia mais capaz do que no dia anterior.

Este foi **meu primeiro projeto com HTML, CSS e Javascript**, criado com o objetivo de:

- Praticar tudo que eu havia acabado de aprender na programação  
- Me desafiar a construir algo interativo e funcional  
- Treinar **responsividade, manipulação do DOM e lógica básica de jogo**

Era um jogo simples de adivinhação baseado em cores RGB, mas, para mim, representou **um passo gigante rumo à autonomia como dev**. Cada linha de código foi escrita manualmente, sem frameworks, só na base do HTML, CSS e JS puro.

---

## 🛠️ Como foi desenvolvido

A stack foi enxuta e ideal para o momento:

- **HTML5** para a estrutura da página  
- **CSS3** para o estilo e responsividade  
- **Javascript puro** para a lógica do jogo e interações com o usuário  

Implementei **modo escuro**, **efeitos visuais com `box-shadow` e `hover`**, e uma estrutura adaptável a dispositivos móveis com `media queries`.

---

## 🎯 Sobre o jogo

A ideia era simples: exibir uma cor RGB parcialmente oculta e desafiar o usuário a adivinhar qual valor (R, G ou B) estava faltando. Se o jogador errasse, a dica mudava. Se acertasse, uma animação simples mostrava a vitória e uma nova rodada podia começar.

Com isso, pratiquei:

- **Eventos com `addEventListener`**
- **Manipulação do DOM com `querySelector` e `getElementById`**
- **Uso de funções assíncronas e promessas**
- **Estilização interativa com JS puro**

---

## 📱 Responsividade e Estilo

Fiz questão de que o jogo funcionasse bem tanto no desktop quanto no mobile. Usei **CSS Grid**, efeitos com `transition` e `transform`, além de uma interface clara e intuitiva para qualquer pessoa testar.

Também implementei **um sistema de collapses com animações**, criando uma seção interativa de ajuda e explicações sobre o jogo, algo que exigiu atenção aos detalhes de UX e usabilidade.

---

## 💡 Aprendizados

Esse projeto me ensinou mais do que só sintaxe:

- Como **pensar em lógica de jogo** e interatividade  
- Como tornar um site **agradável e funcional visualmente**  
- A importância de **modo escuro/acessibilidade**  
- E principalmente, como é gratificante ver algo seu **funcionando de verdade** no navegador

Olhando esse código hoje, consigo ver cada má prática que aprendi a evitar desde então, event listeners no escopo errado, sem separação de responsabilidades, CSS que só funciona porque nada quebra. Mas também consigo ver o commit em que o toggle de modo escuro finalmente funcionou e recarreguei a página dez vezes só pra ver mudar. Essa sensação é exatamente por que ainda estou fazendo isso.
