---
title: "Formula 1"
summary: "Complete system with queries and manipulation of real Formula 1 data, including races, drivers, teams, and statistics."
date: "Jun 14 2023"
draft: false
tags:
- Python
- Flask 
- PostgreSQL
- Docker
- HTML
- CSS
- Javascript
repoUrl: https://github.com/Ryrden/SCC0541-Formula1
lang: "en"
---


![Cover](https://i.imgur.com/aA9UWdE.png)

## 🏁 About the project

**Formula 1** is a web system developed as part of the **SCC0541 - Database Laboratory** course, aiming to facilitate the **visualization and manipulation of real Formula 1 data**. Given the large volume of information about races, drivers, and teams, we created an accessible, dynamic, and interactive solution for analyzing this data.

---

## 🔧 How it was developed

The project was completed in about **a week and a half**, with a primary focus on the backend and relational modeling. We used:

- **Python with Flask** for the backend
- **PostgreSQL** as the database
- **Docker** to simulate and isolate the environment
- **HTML5 + CSS3** with Jinja2 templates for the frontend

The frontend was intentionally simple, without modern frameworks, as the focus of the course was on mastering the database.

---

## ⚙️ Technologies and decisions

The technological choices were made based on **practicality and academic focus**:

- **Flask + Python**: lightweight and agile for prototyping and database integration
- **PostgreSQL**: robust database, widely used in academic and corporate environments
- **Docker**: agility to simulate the environment without complications
- **Jinja2**: simple integration with Flask for dynamic page rendering

We chose **not to use modern frontend frameworks** like React or Vue, to maintain total focus on logic and SQL queries.

---

## 📚 Learnings

This project allowed me to apply and consolidate various advanced database concepts:

- Efficient relational modeling
- Window Functions and complex SQL queries
- Views, Triggers, Functions, and Stored Procedures
- Optimization with indices
- Backend integration with a real database via Flask

It was a practical and straightforward exercise, focused on the robustness and power of relational databases.

---

## 🧠 Development experience

Without a doubt, **it was the most intense project of my undergraduate studies**. We had only one week to deliver everything, and fortunately, I was alongside people I trust a lot for coding. From day one, we were already hands-on with the code.

Based on the course requirements, we identified two pillars:

- **Database**: the center of everything
- **Interface**: could be via terminal, but we opted for a complete website with **SSR using Flask and Jinja2**

The choice of Flask came from my personal experience trying to create a website from scratch in pure HTML/CSS (I talked more about this in the [Old Website](/projects/old-website) project). The accumulated knowledge was essential for us to deliver something functional quickly.

Of course, under pressure, some practices were set aside. For example, we used **static classes** without instantiation to streamline the logic (example [here](https://github.com/Ryrden/SCC0541-Formula1/blob/10868f7c8e76177398fc6c78c4c7d9474ce1550c/proj_labbd/interactor/racing_team.py#L5-L29)) and we didn't implement automated tests. But the focus was singular: **make it work**, and we did.

In the end, we delivered a complete, functional system that represented a lot to me in terms of technical learning and teamwork. If we had more time and technical maturity at the time, I'm sure we could have applied good practices without losing productivity.

---

## 🔮 Next steps

With more time and refactoring, the system can evolve significantly. Some improvement ideas include:

- Backend modularization with good patterns like MVC or another applicable one
- Creation of a modern and interactive frontend focused on UX
- Implementation of automated tests
- Enhancement of the data navigation and visualization experience

---

This project demonstrated in practice how **a good database, combined with a simple and effective interface, can deliver a lot of value**. It was one of the most memorable experiences of my development training.