---
title: "Guess The Color "
summary: "Minigame to guess the color (RGB) made entirely with HTML, CSS, and Javascript"
date: "Mar 18 2022"
draft: false
tags:
- HTML
- CSS
- Javascript
repoUrl: https://github.com/Ryrden/Guess-the-Color
demoUrl: https://rgbguesscolor.netlify.app/
lang: "en"
---


![Cover](https://i.imgur.com/JMN1P9B.gif)

## 🎮 About the project

I built this because I'd just finished a JavaScript course and needed something to actually make, not another static page or Todo app. I found a similar RGB color game online, thought I could rebuild it over a weekend, and it took three. Each evening I'd reload the browser and feel more capable than the day before.

This was **my first project with HTML, CSS, and Javascript**, created with the goal of:

- Practicing everything I had just learned in programming
- Challenging myself to build something interactive and functional
- Training **responsiveness, DOM manipulation, and basic game logic**

It was a simple guessing game based on RGB colors, but for me, it represented **a giant step towards autonomy as a developer**. Each line of code was written manually, without frameworks, just based on pure HTML, CSS, and JS.

---

## 🛠️ How it was developed

The stack was lean and ideal for the moment:

- **HTML5** for the page structure
- **CSS3** for style and responsiveness
- **Pure Javascript** for game logic and user interactions

I implemented **dark mode**, **visual effects with `box-shadow` and `hover`**, and a structure adaptable to mobile devices with `media queries`.

---

## 🎯 About the game

The idea was simple: display a partially hidden RGB color and challenge the user to guess which value (R, G, or B) was missing. If the player was wrong, the hint would change. If correct, a simple animation showed the victory and a new round could begin.

With this, I practiced:

- **Events with `addEventListener`**
- **DOM manipulation with `querySelector` and `getElementById`**
- **Use of asynchronous functions and promises**
- **Interactive styling with pure JS**

---

## 📱 Responsiveness and Style

I made sure the game worked well on both desktop and mobile. I used **CSS Grid**, effects with `transition` and `transform`, as well as a clear and intuitive interface for anyone to test.

I also implemented **a system of collapses with animations**, creating an interactive section of help and explanations about the game, something that required attention to UX details and usability.

---

## 💡 Learnings

This project taught me more than just syntax:

- How to **think about game logic** and interactivity
- How to make a website **visually pleasing and functional**
- The importance of **dark mode/accessibility**
- And mainly, how gratifying it is to see something of your own **actually working** in the browser

Looking at this code today, I can see every bad practice I've learned to avoid since, event listeners in the wrong scope, no separation of concerns, CSS held together by coincidence. But I can also see the commit where the dark mode toggle finally worked and I reloaded the page ten times to watch it switch. That feeling is exactly why I'm still doing this.