---
title: "[working title — decide no fim]"
summary: ""
date: "Sep 01 2026"
draft: true
tags:
- Career
- Engineering Culture
- Software Engineering
- Growth
lang: "en"
---

![Cover](https://i.imgur.com/oCZcIby.webp)

- [Introduction](#introduction)
- [Starting point](#starting-point)
- [Intern](#intern)
- [Junior](#junior)
- [Mid Level](#mid-level)

## Introduction

This week I got the news that I got promoted to mid level software engineer. Considering that I have been working with software engineering since the middle of 2022, I felt like I was at the wrong level, if I only considered the years of experience (YoE), but, suddenly, after I felt that, I reflected on the real experience I've ever acquired during those last 4 YoE.

Then, I decided to write this article to share my experience from Intern to Mid Level inside a big company like Nubank. So, what exactly changes from one level to another? Is it the capacity of writing excellent code? Is it the capacity to orchestrate AI Agents currently? Let's talk about it.

## Starting point

To get it started, I haven't joined Nubank as a blank page, I had worked at three places before: a company where I’ve built chatbots on a low-code platform; a startup where other interns and I built an internal system from scratch by following [Software Development Life Cycle (SDLC)](https://www.geeksforgeeks.org/software-engineering/software-development-life-cycle-sdlc/), which we actually rolled it out to the stakeholders; and also at a big company called BTG Pactual where I deployed and shipped Go code to production almost every day for a few months.

Then, I had already written a code that real people used. That I'm sure of.

I also knew what my weak spot was. At some point I realized communication was going to hold me back, so I did something about it and taught HTML, CSS and JavaScript classes to freshers at university. With the purpose of forcing myself to explain things out loud.

Maybe you're asking why I didn't just apply for a junior role instead of joining Nubank as an intern after bringing all that experience to the table. Well, I did it. My CV got rejected everywhere else, because [ATS filters](https://www.geeksforgeeks.org/hr/applicant-tracking-system-ats-meaning-working-and-users/) was getting popular and my CV only had internships on it. So, beyond applying for junior roles, I aimed for the best internships I could find.

Then, I got the offer as a Software Engineer Intern from Nubank, and almost all the technical experience I brought did not seem to help. Golang; Java; Python. Everything I had ever written was imperative and object oriented and Nubank runs on [Clojure](https://clojure.org/).

That worried me!

## Intern

"Back to square one."

That was my first thought reading the internal docs and trying to learn Clojure, it had parentheses almost everywhere and was a painstaking process to code review the team pull requests.

Actually, I betted all I will learn Clojure only by doing the work, I thought that because after my first 1:1's with team, I was told that try to learn Clojure outside Nubank it will be ineffective due to Nubank has its own way to use the language. One thing that helped, fortunately, was that I had the opportunity to learn [functional programming at university](https://uspdigital.usp.br/jupiterweb/obterDisciplina?sgldis=SSC0960&codcur=55051&codhab=4) by using Haskell and that helped a lot to ramp up. Afterwards, I also wrote a [blog post about functional thinking](https://ryan.dev.br/en/blog/functional-thinking).

The real challenge came when I got my first real task, and it looked easy: take a unique identifier from the database and render it on the screen.

Simple, right?

The identifier lived in the backend. The screen lived in the frontend. Between them there was a BFF. Three repositories, two languages I had just learned, and a designer I had to talk to before touching anything, because someone had to decide where that information would appear and whether we were even allowed to change that screen.

Before Nubank, the most complex thing i had built was a backend talking to a frontend. No layer in between. This wasn't passing an ID along three times. Each layer needed its own structure to carry it: a GraphQL schema in the BFF, its own types on each side of it. I had to decide what that shape looked like, what to name it, what to expose and what to keep inside, three times over. And the domain core wasn't allowed to know anything about the layers around it, because the codebase followed [hexagonal archictecture](https://www.geeksforgeeks.org/system-design/hexagonal-architecture-system-design/), which I had read about and never actually worked in. Those are modeling decisions, it wasn't just a matter of writing code.

I shipped it. It took much longer than it should have.

After that task I got the feedback that I should have raised my hand earlier. The thing is, I was asking, but not in a way that helped. Every time I was getting stuck I was spending hours trying to solve it alone first, and only then send a DM to one person, in private. After a 1:1 and talking about my last deliver, I realized that several steps I could have used a simplier approach.

So, I decided to research about that, "When to raise my hand as software engineer" and came across with somes articles and videos about the right way to ask. One of them, by Lucas Faria, was a game changer for me: [How to make questions that speed up your career](https://newsletter.nagringa.dev/p/como-fazer-perguntas).

After those learning, I started to ask my questions in public channels, instead of sending private messages. This not only helped me get faster responses but also allowed others to benefit from the answers.

Months went by and another tasks came, I picked them up and finished them well now asking good questions when needed. The business unit got restructured and I changed teams. And then, I realized that all my knowledge about the codebase got lost and the hard part of working was to get close to the team. After a few weeks, the team got restructured again and I got moved to another team cause no purely execution tasks were being available for my development there.

That point, after my second team change, I scheduled many 1:1 meetings with senior engineers and managers, also, with the engineering director to really understand the business and the product.

At the 1:1 with the Engineering Director I asked what really matters to become a great Software Engineer and I was told something that I will never forget:

> The greatest software engineer is the one which is very close to the product and really knows it. Coding is the easy part, anyone can do it, but deeply understand the bussiness and the product is the hard part, you must become the go-to person for the product manager and the designer, when that happens, you will be recognized as a great software engineer.

After those 1:1, I scheduled weekly 1:1 with the product manager and I was taking more impactfull tasks after that, I was now able to have strong opinions at the product sessions and my code review became very strong! That point the scenario was:

- I already understand Clojure and Nubank Archictecture
- I have some knowledge about Nubank tools used for API Requests, monitoring, etc.
- I was able to get tasks and deliver it under supervision
- I, also, have exceeded their expectations with my adaptability given the many team changes, I was able to deliver tasks without much code review with a few weeks of ramp up.

That was when the promotion to Junior Software Engineer came, ten months after I joined.

## Junior
 
 
## Mid Level
