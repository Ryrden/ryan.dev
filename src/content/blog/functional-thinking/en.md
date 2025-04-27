---
title: "Functional Thinking in practice"
summary: "Immutability, Pure Functions, Side Effects, High Order Functions and everything you need to understand what it really means to think in a functional way"
date: "Apr 16 2025"
draft: false
tags:
  - Functional Programming
  - Programming Paradigm
  - Programming
lang: "en"
---

![Cover](https://i.imgur.com/pWBu0iB.png)

- [Introduction](#introduction)
- [After all, What is Functional Thinking?](#after-all-what-is-functional-thinking)
- [Immutability](#immutability)
  - [So how do we increment a variable?](#so-how-do-we-increment-a-variable)
  - [Why does immutability matter?](#why-does-immutability-matter)
- [Pure Functions](#pure-functions)
  - [What are Side Effects?](#what-are-side-effects)
    - [Common side effects](#common-side-effects)
  - [Why do pure functions matter?](#why-do-pure-functions-matter)
- [First-Class Functions (High Order Functions)](#first-class-functions-high-order-functions)
  - [Closure](#closure)
  - [Currying](#currying)
  - [Bonus: Lambdas](#bonus-lambdas)
  - [Why do First-Class Functions matter?](#why-do-first-class-functions-matter)
- [Transforming data](#transforming-data)
- [Declarative style](#declarative-style)
  - [Mixing ideas x Clarity](#mixing-ideas-x-clarity)
  - [Why does Declarative style matter?](#why-does-declarative-style-matter)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction

Since I started working at `Nubank`, I've noticed that my way of thinking about programming has changed in some way. In fact, everything I've learned so far in programming through university and other work experiences has always been the traditional way, that is, I was always taught to have an `imperative thinking` which is basically the thinking where you describe detailed steps to solve your problem.

Of course, I had the pleasure and opportunity to take the `Functional Programming` course at the University where I learned several principles of the functional paradigm, and well, that's what I want to bring to discuss here today.

## After all, What is Functional Thinking?

Functional thinking, in a few words, is when we start to think about creating `functions`, `transforming data`, and focusing more on answering `what` rather than `how` when solving our problems using programming.

Actually, this thinking is quite familiar to you but maybe you don't know it. Remember functions in mathematics? Like `f(x) = y`? And <a href="https://www.todamateria.com.br/funcao-bijetora/" target="_blank">`bijective functions`</a>, where for each unique `x` there exists a unique corresponding `y`? Well, this reasoning is the basis of `pure functions` in functional programming.

Of course, I don't want to transform this text into a math class, but it's good to know that much of the elegance of the functional paradigm comes exactly from this logical root. So now that you've already understood the essence, let's go straight to the main pillars that support this form of programming.

**⚠️ Warning:** In this article, I'll be using **Python** to give code examples as it's a more accessible language for beginners

## Immutability

> Data is not modified after its creation.

**Immutability**, as the name itself indicates, is the principle that something **cannot be modified** after being created. If you learned to program in imperative languages, you must have gotten used to operations like this:

```python
x = x + 1
```

This code seems harmless, but under a functional (or even mathematical) perspective, it raises a curious question:

1. If `x = x + 1`, then... what is `x`? **A:** `x` is `x + 1`
2. We go deeper because there are still unknowns (variables)
3. We have `x + 1`, but what is `x`? **A:** And then we return to step 1.

Do you see where this is going? An infinite loop, and this reveals a fact: **there is no mutable assignment in pure mathematics**. In functional languages, the same principle applies. That's why **we don't use loops with variables that change state**, because the **state doesn't change**.

### So how do we increment a variable?

Simple: **creating a new value** instead of altering the previous one.

Consider the following code:

```python
x = 1

def increment_one(x):
  return x + 1

y = increment_one(x)
```

In this example, `x` still equals `1`. What changed was that we created a new variable `y`, which represents the value of `x + 1`. **There was no mutation**, **there was transformation**.

This is the heart of immutability: **instead of changing things, you create new versions of them**.

### Why does immutability matter?

Because **immutability reduces bugs** caused by unpredictable states, facilitates **parallelism**, and makes your code much more **reliable and testable**.

## Pure Functions

> A function that, given the same input, always returns the same output and causes no side effects.

This one you got spoiled at the beginning of the reading but it's that simple: if you can predict the result just by looking at the function parameters, it is **pure**.

But... what about the second part of the definition?

### What are Side Effects?

A **side effect** happens when the function **does something beyond just returning a value**, it does something that affects (or depends on) the external world.

Let's assume the following code:

```python
def validate_cpf(cpf):
  valid_cpf = consult_external_api(cpf)
  return valid_cpf
```

At first glance, it seems normal. But you agree that the line `consult_external_api(cpf)` accesses an external system, right? And what if the API is down? Or if it returns an unexpected error?

This external instability means that **the same input can produce different results**. This breaks predictability. That is: **this is not a pure function**.

#### Common side effects

Let me give you more examples, `Side effects` also appear when we:

- 📤 Write to the screen (`print`)
- 📥 Read user inputs
- 📁 Read or write files
- 🌐 Query APIs or databases
- 🧠 Modify states (variables, objects, etc.)
- ⚠️ Throw or handle exceptions

But here you might think: _"But wow, then I can't do anything with functional programming, everything is a side effect"_, wrong! the idea of functional programming **is not to eliminate side effects**, but to **isolate them**.

You write most of your system with **pure, small, and testable functions**, and **centralize side effects at well-defined points**, usually in an external layer of the application, such as the controller or the edge of the system.

### Why do pure functions matter?

Besides the [benefits of immutability](#immutability), pure functions make the code **predictable** and **easy to understand and compose**

## First-Class Functions (High Order Functions)

> A function can be assigned to a variable, passed as an argument, or returned from another function.

This concept is present in many languages, and if you've already used functions like `map`, `filter`, or `reduce`, you've already used first-class functions in practice. I can talk about these functions at another time, but today I want to introduce you to two powerful techniques that make these functions possible: **Closure** and **Currying**.

### Closure

> A function that "remembers" the scope in which it was created, even after that scope has already been executed.

```python
def greeting(name):
    message = f"Hello, {name}!"

    def display():
        print(message)

    return display

good_afternoon = greeting("Ryan")
good_afternoon()  # Hello, Ryan!
```

Notice: the `display()` function remembers the `message` variable, even after the `greeting()` function has already been executed. This happens because `message` was "closed over" within the internal scope of `display()`.

This is closure. And with this, we can **create configurable functions, encapsulate logic**, and even simulate private scopes.

### Currying

> Currying is the act of transforming a function that takes multiple arguments into a chain of calls that takes one argument at a time.

Now that we understand what **closure** is, `currying` makes total sense.

Look at this example in Python:

```python
def multiply(a):
    def apply(b):
        return a * b
    return apply

double = multiply(2)
print(double(5))  # 10
print(double(7))  # 14
```

Here, `multiply(2)` returns a new function that "remembers" `a = 2` and expects the next argument. This is very useful when you want to **reuse pre-configured behaviors** or compose fluently.

**💡 Observation:** In functional languages like **Clojure**, **Haskell**, or **Elm**, support for currying is practically ready.

For example, in Clojure we have the `partial` function, which does exactly this in an elegant way:

```clojure
(def multiply
  (fn [a b] (* a b)))

(def double
  (partial multiply 2))

(double 5) ;; 10
```

That is, functional languages **embrace** this pattern because it promotes reuse and composition.

### Bonus: Lambdas

Lambdas are functions that can be called and defined without necessarily having a name. In practice, the examples above could and would be written like this:

```python
def multiply(a):
    return lambda b: a * b
```

I want to pass very quickly on this topic because it's just a syntax variation of languages, and each one does it differently. If you've already used `javascript`, you should be very familiar with this:

```javascript
const multiply = (a, b) => a * b
const double = (b) => multiply(2, b)
const triple = (b) => multiply(3, b)
//etc...
```

In Python, which is the language I chose for the examples in this article, we do it in the way we saw above.

### Why do First-Class Functions matter?

You might be wondering now:

> So first-class functions are just applying currying and closure?

Not exactly. **Currying** and **closure** are techniques that only work because functions are treated as values, and that's what the concept of **first-class functions** represents.

---

In languages that adopt this model, functions:

- Can be **assigned to variables**

- Can be **passed as arguments**

- Can be **returned from other functions**

This behavior opens space for more reusable structures, such as `map`, `filter`, `reduce`, composed functions, and other useful abstractions we've seen so far.

---

**What does this change in practice?**

First-class functions make the code:

- More modular: because functions can be combined and reused

- More declarative: because we can express **what we want to do**, instead of how to do it

- Easier to test: since we pass logic as values, without depending on external context

These characteristics contribute to the clarity and organization of the code, especially when we work with transformed data.

## Transforming data

As you may have already noticed by now, working in a functional way involves:

1. Not changing the state
2. Not causing side effects
3. Composing functions

And this leads us to a central idea:

> Everything in functional programming revolves around transforming data

This idea materializes when we use functions like `map`, `filter`, and `reduce`.

Imagine you have a list of names and want to make them all uppercase. Instead of thinking about how to do this with a loop, just declare what you want:

```python
names = ["Ana", "Bruno", "Carla"]
uppercase_names = list(map(str.upper, names)) # ['ANA', 'BRUNO', 'CARLA']
```

This is elegant and direct, and best of all, without altering the original state or writing loops.

This composition of small and reusable functions is the heart of functional transformation.

> **Note:** For the more experienced Python folks out there, the use of `map` and `filter` is not as common and is often replaced by `list comprehensions`, but the concept of data transformation still applies. The important thing here is to understand the idea of **composition** and **transformation**.

## Declarative style

This is the part where I talked about focusing more on `what` than `how` in functional programming. It's very common in non-functional languages to end up thinking more about "how to traverse a list" or "how to sort an array". In the functional paradigm, the idea is to describe the **intention**, not the steps.

Let's see this in a practical example:

```python
# Imperative
even_doubles = []
for n in range(10):
    if n % 2 == 0:
        even_doubles.append(n * 2)

# Functional / declarative
evens = filter(lambda x: x % 2 == 0, range(10))
even_doubles = list(map(lambda x: x * 2, evens)) # [0, 4, 8, 12, 16]
```

The imperative version describes **how** to do each step. The functional one, what you want: "I want the even numbers doubled."

### Mixing ideas x Clarity

Perhaps you've noticed that the iterative version ends up mixing ideas, and in a way, imperative thinking encourages this for efficiency: you filter, transform, and accumulate all in the same loop.

But in functional, this doesn't happen. Each operation is **isolated** and **clear**. This helps to read, test, and maintain the code.

### Why does Declarative style matter?

Declarative style matters because at the end of the day, we are **writing code that will be read and maintained by other engineers** (or by ourselves in the future).

Declarative style is important because in a way, it **encourages us to think in abstractions** and how we can **express what we want**. In other words, we start thinking in blocks that fit together, one function _transforms something_, another _filters_, another _reduces_, and you compose as if they were LEGO blocks.

Declaring your code makes it **readable**, **testable**, and **reusable**, and mainly: **closer to your original intention.**

## Conclusion

Well, that was a summary of what I understand by **functional thinking** and how it can be applied in practice.

I believe that thinking functionally is more than knowing `map` or `reduce`, **it's changing the way you model problems**.

## References

- [Functional Thinking - Ada beat](https://adabeat.com/fp/functional-thinking/)
- [Functional Paradigm Vs OO: Does it really require a drastic change in thinking?](https://www.youtube.com/watch?v=pz5DROXzBlQ&t=1049s&ab_channel=DevEficiente)

---

I hope you enjoyed the article and that it made you reflect at least a little bit. If you have any questions or suggestions, leave a comment below or contact me through [LinkedIn](https://www.linkedin.com/in/ryan25/).