---
title: "Backend Battle 2024/01 - Concurrency with Financial Operations"
summary: "Development of a high-performance API focused on concurrency, resource constraints, and load testing. A practical study on architecture, optimization, and high-performance systems."
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
lang: "en"
---


![Cover](https://i.imgur.com/NkUgA5g.jpeg)

## 🥊 About the challenge

**Backend Battle** (Rinha de Backend) is a competition organized by [@zanfranceschi](https://github.com/zanfranceschi) that challenges developers to create robust and high-performance APIs under **severe resource constraints**.

In the **2024/01** edition, the goal was to build an API to simulate concurrent financial operations, with the entire system limited to **1.5 vCPU and 550MB of RAM**, including database, reverse proxy, application, and testing tools. A simple proposal, but with challenging execution.

---

## ⚙️ How the project was developed

My solution was built with a focus on **extreme performance, concurrency control, and architectural simplicity**:

- **Language**: Go (Golang)
- **Framework**: Fiber (based on `fasthttp`)
- **Database**: PostgreSQL
- **Reverse proxy**: Nginx
- **Load testing**: Gatling
- **Environment**: Docker

I implemented **pessimistic locking** in PostgreSQL to ensure integrity in intense concurrency scenarios, as well as configuring **connection pooling** to optimize database usage. The architecture was designed **without using cache**, respecting the competition criteria, while still maintaining consistent performance under load.

---

## 🚀 Why this stack?

The choice of technologies was designed to extract maximum performance with minimum resources:

- **Go**: lightweight, fast, and highly efficient for concurrent tasks
- **Fiber**: one of the most performant web frameworks in the Go ecosystem
- **PostgreSQL**: reliable and with robust features for transactional control
- **Docker**: facilitates environment isolation for testing and delivery
- **Nginx + Gatling**: standard competition tools for load simulation

This combination proved to be efficient even under extreme limitations.

---

## 📚 Main learnings

This project was a true **technical intensive**. I learned much more than I imagined:

- Identifying and solving **performance bottlenecks**
- Working with **real concurrency and transactional control**
- **Pessimistic vs. optimistic locking** strategies
- Managing **connection pools**
- Differences between **horizontal and vertical scaling**
- Real impact of the operating system on performance

I managed to deliver a solution that achieved **maximum score in Gatling**, with no penalties, and that, in itself, was a great achievement.

---

## 🧠 Development experience

It was the most challenging and exciting project I've ever done as a backend developer.

I spent almost **an entire month coding daily**, meticulously optimizing each part of the application. Some decisions came from inspiration in projects from previous editions, especially from one of the Go finalists, with whom I spoke and who kindly authorized the use of the folder structure and architecture as a base.

In the final stretch, I reached the maximum possible optimization locally, but I couldn't reach 100% in Gatling. After much investigation, I realized the problem was the operating system: my API was running on **Windows**, which significantly impacted performance. When testing in a Linux environment, I achieved the **maximum score**. Mission accomplished!

---

## 🔮 Next steps

There's still plenty of room for evolution:

- Add **automated tests** to ensure stability in future changes
- Reimplement the challenge with **other stacks** (e.g., Rust, Elixir, Node.js) as a personal challenge
- Explore **strategic use of cache and queues**, now outside the competition restrictions

---

Participating in the **Backend Battle** was one of the most intense and enriching experiences of my journey as a developer. If you really like backend, optimization, and efficient architectures, **this competition is for you.**