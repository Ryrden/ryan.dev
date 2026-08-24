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
- [Point of start](#point-of-start)
- [Intern](#intern)
- [Junior](#junior)
- [Mid Level](#mid-level)

## Introduction

That week I received the notice that I got promoted to mid level software engineer, considering that i work with software engineering since the middle beginning of 2022, I felt kinda like I'm at the wrong level, if I only consider the years of experience (YoE), but, suddenly after I feel that, I reflected about the >> real << experience I've ever adquired during those last 4 YoE.

Then, I decided to write that article to share my experience from Intern to Mid Level inside a big company like Nubank, so, what's exactly changes between a level to another? it's the capacity of writing excelent code? the capacity of orchestrate AI Agents currently? let's talk about it.

## Point of start

<!-- Before I join Nubank I had the pleasure to work with other great companies which taught me a lot, thinking in an abstract way, they taught me, at least, taught me that my code can really solve a real problem.

My first job actually was at 2022 as Chatbot Developer when I get the opportunity to create BOTs via a low-code platform where I literrally was joining big blocks of action with others and using a old javascript inside them (when I mean old, was old knowing that I was not able to use methods like `map` and `filter`), I knew great people there, taught me a lot, I learn things like the [Levesthein distance algorithm](https://en.wikipedia.org/wiki/Levenshtein_distance) used to measure the distance from what the user had typed from the expected command, pretty awesome thing I learned since I was at the second year of the university learning data structures and algorithms and, afterwards I got one of my best [open source contribuitions](https://github.com/levxyca/diciotech/pull/319) at `diciotech`. I worked only 4 months there cause another amazing unexpected opportunity came!

Then I got a job at startup called: Opus Software, as Software Engineer Intern, I was crazy because when I got inside the university I was pretty anxious to got a job as "Software Engineer", then I got it! There I had the amazing experience from my internships so far cause I developed from scratch with my internship coworkers an internal system that will help the human resourcers (HR) department to solve a issue related refund management that was manually done by a excel plainsheet.

Honestly, today I look to that problem and see that was not really a problem but they found that as a good way to taught the interns software engineering principles, and was what happened! I applied [engineering interview](https://en.wikipedia.org/wiki/Requirements_engineering) by leading interview meeting with the stakeholders, which was the HR workers, they explained to us what they did manually and then we translated all this to requirements to start our development, we adopted SCRUM and followed rituals like dailies and retros.

I worked in that so far for about 8/9 months of development switching between backend and frontend with the other interns, the stack was Java with Spring Boot at the backend and ReactJs at the frontend, the rollout of the feature was succesfully done and the HR team started to adopt the new platform after a proper training, that was very awesome, see something i build really working at production, even if the HR department was few peoples! That job unfortunately ended because the startup was not able anymore to keep many employees after a breach of contract from a big partner and, in the next year, I got layoffed with many other employees.

After that, I challenged myself to improve my communication skills cause I realized that will become a big gap in my career in future, so, I started to teach classes of HTML, CSS and Javascript for freshers at computer science in the same year, that was very good! I really improved a lot!

After the end of the classes, I joined at BTG Pactual for a short job, I worked mainly with golang and, really, i worked a lot! and deployed almost everyday since the day i joined there, that was insane and after the ending of the short job i decided to take a time for me and focus in others field areas.

8 months later, after try some challenged internship i got a offer to start at Nubank! Maybe you're probably asking right now: "Why you don't tried a Junior role direcly?" and my answer is: I really tried, my CV was refused in all jobs cause the ATS system (that was starting to get very used at the time), since I only had internship experiences, no company wanted me! then I aim to get a great software engineer internship, and then i got it, and I'll tell more about right now! -->

To get start it, i didn't joined Nubank as a blank page, i had worked at three places before: a company where i built chatbots on a low-code platform, a startup where I and other interns built a internal system from scratch by following [software development principles](https://www.geeksforgeeks.org/software-engineering/scrum-software-development/) by book and actually we rolled it out to the stakeholders, and also at a big company called BTG Pactual where I deployed and shipped Go code to production almost every day for a few months.

So, I already had written code that real people used. That I'm sure about.

I also knew what my weak spot was. At some point I realized communication was going to hold me back, so I did something about it and taught HTML, CSS and JavaScript classes to freshers at university. On purpose, to force myself to explain things out loud.

Maybe you're asking why I didn't just apply for a junior role after bring all that experience to the table. Well, I did it. My CV got rejected eveywhere, because ATS filters were getting popular and my cv only had internships on it. So, beyond applying junior roles, I aimed for the best internships I could find.

Then, i got the Nubank offer as Software Engineer Intern, and almost nothing I brought seemed to help. Go; Java; Python. Everything I had ever written was imperative and object oriented and Nubank runs on [Clojure](https://clojure.org/).

That worried me!

## Intern

<!-- "Back to square one", I thought when I was reading the internal documentation about Clojure and the Nubank architecture. I was a bit frustrated, but I knew that was the right thing to do. I had to learn the language and the architecture before I could start contributing in a meaningful way.

My first challenging task was to get a unique identifier from database (Db) and render it on the frontend, looks simple? right? Yes, it was if I didn't needed to implement this across 3 different repositories (backend, bff and frontend) in two languages which I was not ready used to use: [Clojure](https://clojure.org/) and [ClojureScript](https://clojurescript.org/), not only that but I also need to talk with the Designer to let me know if I got the approve of modification and a design where I should display the info.

Hugeee! that moment i reliazed how complex could be a real microservice archictecture.

I followed developing features and later I also wrote a [article about functional thinking](https://ryan.dev.br/en/blog/functional-thinking), that keep the pace for almost 4 months when I received the news that Nubank was [REESTRUTURANDO] the Bussiness Unit (B.U.), then i moved to another team which the expectation was to me code more since is the expected for my aimed leveling () -->

"Back to square one."

That was my first thought reading the internal docs. Clojure everywhere. Parentheses everywhere. Nothing I had spent the last years getting good at seemed to apply, That was my main thoughts.

Actually, it was not that bad. Fortunately, I had the opportunity to learn functional programming at university by using Haskell and that helped a lot to ramp up. Afterwards, I also wrote a [blog post](https://ryan.dev.br/en/blog/functional-thinking) about functional thinking, which helped me to solidify my knowledge and also to share with others.

The real challenge came when I got my first real task, and it looked easy: take a unique identifier from the database and render it on the screen.

Simple, right?

The identifier lived in the backend. The screen lived in the frontend. Between them there was a BFF. Three repositories, two languages I had just learned, and a designer I had to talk to before touching anything, because someone had to decide where that information would appear and whether we were even allowed to change that screen.

> NOTE: I made this without AI, just to clarify

Before Nubank my past experiences was only with monolithic architecture or with a few microservices, 100% backend based, and I had never worked with a BFF before. I had to learn what it was, how it worked, and how to wire it up to the backend and frontend.

I shipped it. It took much longer than it should have.

After that task I got the feedback that should have raised my hand as soon as possible. That moment I kinda disagree but by talking with coworkers I discovered that many steps of my code could be simplier and the process could be easier thougt. I going to research about that, "When to raise my hand as software engineer" and came across with that amazing article from Lucas Faria: ["How to make questions that speed up your career"](https://newsletter.nagringa.dev/p/como-fazer-perguntas) (That article is Brazillian portuguese), changed my mind and I strong recommend the reading.

Months went by and another tasks came, I picked them up and finished them well now asking good questions when needed. The business unit got restructured and I changed teams. And then, I realized that all my knowledge about the codebase got lost, I had to learn the new codebase and talk with the new team, so was when I flipped a switch, the hard part of working was to get close to the team, after many 1:1 meetings and my first tasks actually came in the team got restructured again and I got moved to another team cause the seniority of the current team was too high for me and no purely execution tasks were being available in mid-term.

That point, after my second team change, I scheduled many 1:1 meetings with senior engineers and managers, also, with the engineering director to really understand the business and the product, cause at that point I've already noticed I was working in some kinda of uncertain product, at the 1:1 beyond ask the product I also asked what really matters to become a great Software Engineer, the engineering director told me something that I will never forget:

> The greatest software engineer is the one which is very close to the product and really knows it. Coding is the easy part, anyone can do it, but deeply understand the bussiness and the product is the hard part, you must become the go-to person for the product manager and the designer, when that happens, you will be a great software engineer.

After those 1:1, I know what I need to do, scheduled weekly 1:1 with the product manager and hey, I was taking more impactfull tasks after that, I was now able to have strong opinions at the system design sessions and my code review became very strong! That point the scenario was:

- I already understand Clojure and Nubank Archictecture
- I have some knowledge about Nubank tools used for API Requests, monitoring, etc.
- I was able to get tasks and deliver it under supervision
- I, also, have exceeded their expectations with my adaptability given the many team changes, I was able to deliver tasks without much code review with a few weeks of ramp up.

That was when the promotion to Junior Software Engineer came.

## Junior

## Mid Level