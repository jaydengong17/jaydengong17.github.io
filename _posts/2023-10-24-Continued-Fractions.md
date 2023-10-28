---
layout: post
title: "Continued Fraction Calculator"
date: "2023-10-24"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
---

{% include latex.html%}

This is my continued fraction calculator.

{% include continued_fraction.html %}

Try:

$$π$$:

```3,7,15,1,292,1,1,1,2,1,3,1,14,2,1,1,2,2,2,2,1,84,2,1
,1,15,3,13,1,4,2,6,6,99,1,2,2,6,3,5,1,1,6,8,1,7,1,2,3
,7,1,2,1,1,1,2,1,1,1,3,1,1,8,1,1,2,1,6,1,1,5,2,2,3,1,
2,4,4,16,1,161,45,1,22,1,2,2,1,4,1,2,24,1,2,1,3,1,2,1```

$$e$$ (yes, there is a pattern):

```2,1,2,1,1,4,1,1,6,1,1,8,1,1,10,...```

$$\sqrt{2}$$:

```1,2,2,2,2,2,2,2,...```

$$\phi$$ (golden ratio):

```1,1,1,1,1,1,1,1,1,1,...```

Read on for a more detailed explanation of continued fractions.

<!--excerpt-->

This is how continued fractions work.

Usually, people write them as

$$x_1;x_2,x_3,x_4,\ldots$$

But what does this list of numbers even turn into?

The way that you turn this into a number is that you keep taking the reciprocal
of the previous numbers snd then add the next number. It's kind of hard to
explain in words, so I'll show it like this:

$$x_1 + \frac{1}{x_2 + \frac{1}{x_3 + \frac{1}{\ddots}}}$$

This may seem kind of weird: Why do you even want to do it this way? This system has many big
advantages, though. For example, it is very good at creating fraction approximations for
irrational numbers. You could probably use it to find the fraction that a really
long decimal number, too!

But then, how do you calculate these continued fractions?

Let's look at an example.

Find 1.3 in continued fraction form.

First, we know that the first number is 1, because a fraction of the form $$\frac{1}{n}$$
such that n is not 0 and n is positive will never be bigger than 1.

Then, we basically need to find a number such that $$\frac{1}{n}$$ is slightly smaller than $$0.3$$.
Why slightly smaller? Well, the number n is actually a little bigger, since we are going to add
another fraction of the form $$\frac{1}{m}$$ to the n part. How do we find $$n$$?
We just take the reciprocal of $$0.3$$. $$n$$ will be the floor of the reciprocal.

Calculating this, we find that $$n=3$$. Well, what's the next number, then?

We can just repeat this same process!

This time, instead of $$0.3$$ as the thing that we need to approximate with a fraction,
we need to approximate $$0.333333...$$, which is quite easy: It's just $$3$$.

So the continued fraction of $$1.3$$ is $$1;3,3$$. (try it!)