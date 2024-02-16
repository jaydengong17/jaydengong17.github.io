---
layout: post
title: "Intuition - Exponential Interest"
date: "2023-12-12"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
redirect_from:
  - /2023/12/12/Intuition-Exp-Interest.html
---

{% include latex.html %}

Today, we learned about exponential interest.
The formulas are:

$$f(t)=a(1+r)^t$$,

and $$g(t)=a(1-r)^t$$.

We'll also go into finding $$e$$.

<!--excerpt-->

(I'll explain the variables later.)

Both of these formulas are pretty much the same.

In both formulas, $$a$$ is the starting amount and $$t$$ is the time in years.
In the first formula, $$r$$ is the percent that it grows each year.
In the second formula, $$r$$ is the percent that it decreases by each year.

Warning: I'm about to use $$r$$ and $$r\%$$ interchangeably.
When I say $$r\%$$, I really mean $$100r\%$$ (for example, $$0.5=r$$ and $$50 = r\%$$,
but when I say $$r\%$$, I really mean $$100r\% = 50\%$$, not $$0.5\%$$).

The second formula is basically the first, but with the rate negative, which makes sense.
If you want it to grow, you have to add $$r\%$$,
but if you want it to decrease, you will have to subtract $$r\%$$.

Maybe how the formulas work is kind of confusing.

If you start with a, you have $$a$$ before the first year ends.
In one year, if you increase by $$r\%$$, you will have to add $$r \cdot a$$ to that.
Then, you will have $$a+r \cdot a$$, or $$a(1+r)$$.

Every year, we treat the new principle ($$a$$) amount as the result from the previous year.
Therefore, if we are in the second year of getting interest, we will get
$$(a(1+r))(1+r)$$.
If this keeps going, we will multiply by $$(1+r)$$ for each year we gain interest, which
is $$(1+r)^t$$. All simplified, that is $$a(1+r)^t$$.

It is the same if it decreases by $$r\%$$ every year. This time, instead of doing $$a+a\cdot r$$,
we will have $$a - a\cdot r$$. This simplifies to $$a \cdot (1-r)$$.
Using the same logic, we can deduce that in $$t$$ years, we will have $$a(1-r)^t$$.

Now, there is also compound interest. This is basically the same as the interest above,
but with each year split up into sections. Just as an example, let's look at what would happen
if we got interest monthly, at the rate of $$12\%$$ annually (so $$1\%$$ monthly).

The formula is still almost the same. This time, we get $$1\%$$
(because $$12\%$$ split into 12 parts is $$1\%$$) of interest every month.
We are also now getting interest 12 times every year, so we must multiply the exponent by $$12$$.
So the final compound interest formula for 12 paydays per year is $$a(1+\frac{r}{12})^{12t})$$.
We can generalize this to $$a(1+\frac{r}{n})^{nt})$$, if $$n$$ is the number of paydays per year.

If you get all of the interest once per year, you would have
1.12 times the principle at the end of the year.
With this new monthly compound interest, you would have
approximately $$1.01^{12}=1.126825$$ the amount of principle at the end of one year.
Now you see something interesting: if you add more paydays, although the annual interest rate
is the same, you will have more money at the end of the year.

Now, a natural question to ask is what happens as $$n$$ goes to infinity.
Would this grant infinite money?
This question is actually touching on calculus, with limits.
You might expect this to either explode up to infinity
(you are raising it to a really high power)
or to start to converge to 0 after $$n$$ becomes bigger
(because $$r/n$$ becomes really small).

Looking at our formula, we see that there are a lot of other variables,
specifically, $$a$$, $$r$$, and $$t$$.
It makes sense for $$t$$ to be one year, as we can always scale the exponent later.
It makes sense for $$a$$ to be 1, also because this just scales the output.
If $$t$$ and $$a$$ are 1, why not make $$r$$ 1 too?

Now, here's a table for what happens when you plug in $$n$$ for various values:

|$$n$$|formula|output|
|-|-|-|
|1|$$(1 + \frac{1}{1})^{1}$$|2|
|4 (quarterly)|$$(1 + \frac{1}{4})^{4}$$|2.44140625|
|10|$$(1 + \frac{1}{10})^{10}$$|2.5937424601|
|12 (monthly)|$$(1 + \frac{1}{12})^{12}$$|2.61303529022|
|100|$$(1 + \frac{1}{100})^{100}$$|2.70481382942|
|1000|$$(1 + \frac{1}{1000})^{1000}$$|2.71692393224|
|10000|$$(1 + \frac{1}{10000})^{10000}$$|2.71814592682|

It seems like this is converging. Even when we change $$n$$ by a lot,
the output barely changes. This does, in fact, converge!
Not only does this converge, it converges to a very special number: $$e$$,
which is arguably more important than $$π$$.
$$e$$ is approximately $$2.718281828459045$$.

$$e$$ has many special properties: like the function $$e^{tx}$$'s derivative
is $$t \cdot e^{tx}$$. This leads to a lot more things, like a way to express
any number in the complex plane. It also has a really cool continued fraction,
which you can see at my continued fraction calculator post.
A lot of the properties of $$e$$ are too complex to go into here.

I'm honestly really glad that we did this topic, mostly because now, I can
show a way to find $$e$$.