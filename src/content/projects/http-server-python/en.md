---
title: "HTTP Server built in Python"
summary: "HTTP Server built from scratch with pure Python, handling TCP connections, HTTP headers, and concurrency with threads."
date: "Jul 25 2024"
draft: false
tags:
- Python
- Network
- HTTP
- Build Your Own
repoUrl: https://github.com/Ryrden/http-server-python
lang: "en"
---


## 🌐 About the project

This was a really cool project where I built an **HTTP server from scratch** as part of the [CodeCrafters](https://app.codecrafters.io/courses/http-server/overview) challenge.

The goal was to create a server capable of:

- Handling **GET** and **POST** requests
- Serving files directly from the file system
- Managing multiple simultaneous connections via `threading`
- Implementing content compression with **gzip**
- Maintaining persistent connections between client and server

All of this using only **pure Python**, without frameworks or external libraries, which forced a deep understanding of the HTTP protocol and network operation.

---

## 🛠️ How it was developed

The stack was minimalist and learning-focused:

- **Python 3** as the main language
- **TCP Sockets** for low-level communication
- **Threading** to handle multiple clients in parallel
- Manual manipulation of the HTTP protocol (headers, message body)

Each stage of the project required mastery of fundamental concepts, from parsing requests to generating responses byte by byte.

---

## 💡 Main learnings

Throughout the development, I deepened my knowledge in several important areas:

- **Incremental data reception with `recv()`**, understanding that the network can deliver incomplete packets
- **Gzip and content compression**, responding correctly according to the `Accept-Encoding` header
- **HTTP/1.1 connection persistence**, keeping the socket open for multiple requests
- **Organization of a multithreaded server** with care to avoid conflicts or performance losses

Additionally, each new feature was guided by CodeCrafters' own automated tests.

---

## 🧱 Challenges overcome

- Ensuring that **HTTP headers were parsed correctly**, even with variations in fields and formats
- Managing **synchronization between simultaneous requests**, using threads without locking up the server
- Implementing **appropriate responses with status codes**, respecting the correct semantics of each verb
- Managing **file writing and reading** with security and proper path validation

Each of these points required testing and quite a bit of trial and error.

---

## 🔁 Next steps

With the foundation ready, I have plans to expand this server:

- Add support for **HTTPS** with TLS/SSL certificates
- Create **accessible and well-structured logs** for each request
- Add support for **dynamic routes and middlewares**
- Explore the use of **WebSockets** for real-time communication