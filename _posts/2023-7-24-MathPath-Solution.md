---
layout: post
title: "MathPath Problem Solution"
date: "2023-07-24"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
---

<head>
  {% include latex.html %}
</head>

Recently, my dad told me a problem from the MathPath qualifying quiz.
I decided to write this on my blog to practice my teaching and writing skills. The problem goes: (summary)

6. Let $$f(n)$$ be a function that takes positive integers as inputs and also gives positive integers as outputs.
We are interested in constructing a function with the following property: $$f(f(n)) = n + 5$$ for every positive integer n.
Is it possible for this function to exist? Prove that $$f(x)$$ doesn't exist or find a way to generate such a function.

<!--excerpt-->

Solution:

Let $$f(0) = y$$. 

Since $$f(f(0)) = 5$$, we know that $$f(y) = 5$. Also, $$f(f(y)) = y+5$$, so f(5) = y+5. 

We can keep going this way, and we'll find that this defines $$f(x)$$ for $$x = 0, y, 5, y+5, 10, y+10, 15, y+15, ...$$.
This means that we have defined two sequences, one which contains all of the integers that are 0 + a multiple of 5 (x ≅ 0 mod 5)
and the other that contains all of the integers that are y + a multiple of 5 (x ≅ y mod 5)

Notice that every time we try to define a value of $$f(x)$$, we either define 0 values mod 5 (if $$f(x)$$ is already defined),
2 values (if $$f(x)$$ is not defined yet), or 1 value (if $$x ≅ f(x)$$ (mod 5)). 

Now, notice that we have to have the third case at least once,
because the other cases only increase the total number of already defined mod 5 sequences by an even number,
and we need an odd number.

For the third case to be true, we need to define, with one function, 1 value mod 5, which means that if we define $$f(x) = y$$,
then $$y ≅ x$$ (mod 5). That means that $$y + 5n = f(y)$$.
We know that $$f(y) = x + 5$$ (since $$f(f(x)) = x + 5$$),
and $$f(y)$$ also gets called when $$x + 5n = y$$, which is guarunteed.. When this happens,
$$f(y) = f(x + 5n) = f(f(y + 5(n-1) )) = y + 5n$$$, so $$y + 5n = x + 5$$.

Now we have 2 equations: $$y + 5n = x + 5$$ (Equation 1), and $$x + 5n = y$$ (Equation 2)

From Equation 1:

$$y - x = 5(n-1)$$

Substitute in Equation 2:

$$x + 5n - x = 5(n-1)$$

Xs cancel:

$$5n = 5(n-1)$$

Divide by 5:

$$n = n-1$$

This is imposible.

Therefore, it is not possible to find a function $$f(x)$$ that takes integer inputs and outputs integers such that $$f(f(x)) = x+5$$.