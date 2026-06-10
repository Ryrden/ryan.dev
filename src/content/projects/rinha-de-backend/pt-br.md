---
title: "Rinha de Backend 2024/01 - Concorrência com Operações Financeiras"
summary: "Desenvolvimento de uma API performática com foco em concorrência, limitação de recursos e testes de carga. Um estudo prático sobre arquitetura, otimização e sistemas de alta performance."
date: "Feb 11 2024"
draft: false
tags:
- Golang
- Fiber
- PostgreSQL
- Docker
- Gatling
- Nginx
repoUrl: https://github.com/Ryrden/rinha-de-backend-go
lang: "pt-br"
---


![Capa](https://i.imgur.com/NkUgA5g.jpeg)

## 🥊 Sobre o desafio

A **Rinha de Backend** é uma competição organizada por [@zanfranceschi](https://github.com/zanfranceschi) que desafia desenvolvedores a criar APIs robustas e performáticas sob **restrições severas de recursos**.

Na edição **2024/01**, o objetivo era construir uma API para simular operações financeiras concorrentes, com o sistema todo limitado a **1.5 vCPU e 550MB de RAM**, incluindo banco de dados, proxy reverso, aplicação e ferramentas de teste. Uma proposta simples, mas com execução desafiadora.

---

## ⚙️ Como o projeto foi desenvolvido

Minha solução foi construída com foco em **desempenho extremo, controle de concorrência e simplicidade arquitetural**:

- **Linguagem**: Go (Golang)
- **Framework**: Fiber (baseado no `fasthttp`)
- **Banco de dados**: PostgreSQL
- **Proxy reverso**: Nginx
- **Testes de carga**: Gatling
- **Ambiente**: Docker

Implementei **lock pessimista** no PostgreSQL para garantir integridade em cenários de concorrência intensa, além de configurar **connection pooling** para otimizar o uso do banco. A arquitetura foi desenhada **sem o uso de cache**, respeitando os critérios da competição, mantendo ainda assim uma performance consistente sob carga.

---

## 🚀 Por que esse stack?

A escolha das tecnologias foi pensada para extrair o máximo de performance com o mínimo de recursos:

- **Go**: leve, rápido e altamente eficiente em tarefas concorrentes
- **Fiber**: um dos frameworks web mais performáticos do ecossistema Go
- **PostgreSQL**: confiável e com recursos robustos para controle transacional
- **Docker**: facilita o isolamento do ambiente para testes e entrega
- **Nginx + Gatling**: ferramentas padrão da competição para simulação de carga

Essa combinação provou ser eficiente mesmo diante de limitações extremas.

---

## 📚 Principais aprendizados

Este projeto foi um verdadeiro **intensivão técnico**. Aprendi muito mais do que imaginava:

- Identificar e resolver **gargalos de performance**
- Trabalhar com **concorrência real e controle transacional**
- Estratégias de **locking pessimista x otimista**
- Gerenciar **pool de conexões**
- Diferenças entre **escalonamento horizontal e vertical**
- Impacto real do sistema operacional na performance

Consegui entregar uma solução que atingiu **nota máxima no Gatling**, sem nenhuma penalidade, **61.503 requisições processadas, zero falhas**. p99 de 6ms em todas as requisições; o endpoint de validação de saldo (o mais complexo) atingiu 54ms de p99 em suas 123 execuções. Tudo concorrente: 19.860 créditos, 39.660 débitos, 1.860 leituras de extrato. Por si só, uma grande conquista.

---

## 🧠 Experiência de desenvolvimento

Foi o projeto mais desafiador e empolgante que já fiz como dev backend.

Passei quase **um mês inteiro codando diariamente**, buscando milimetricamente otimizar cada parte da aplicação. Algumas decisões vieram da inspiração em projetos de edições anteriores, especialmente de um dos finalistas em Go, com quem conversei e que gentilmente autorizou o uso da estrutura de pastas e arquitetura como base.

Na reta final, atingi o limite máximo de otimização possível localmente, mas não conseguia alcançar 100% no Gatling. Após muito investigar, percebi que o problema era o sistema operacional: minha API rodava no **Windows**, que impactava a performance de forma significativa. Ao testar em ambiente Linux, alcancei a **nota máxima**. Missão cumprida!

---

## 🔮 Próximos passos

Ainda há muito espaço para evolução:

- Adicionar **testes automatizados** para garantir estabilidade em mudanças futuras
- Reimplementar a rinha com **outras stacks** (ex: Rust, Elixir, Node.js) como desafio pessoal
- Explorar **uso estratégico de cache e filas**, agora fora das restrições da competição

---

Participar da **Rinha de Backend** foi uma das experiências mais intensas e enriquecedoras da minha jornada como dev. Se você curte backend de verdade, otimização e arquiteturas eficientes, **essa competição é pra você.**
