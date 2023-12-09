---
layout: post
title: "Intuition - Exponent Rules"
date: "2023-12-8"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
---

{% include latex.html %}

I made this to help people gain intuition for some math.
Specifically, I noticed that the way that my school math class taught math was the formulas way,
where we just memorize a lot of formulas without actually knowing how they work.
Because of that, I decided to do this to explain the reasoning behind
all of the formulas. This series will go along with what is taught in class right now.

Formulas we memorized this class:

$$x^{-a} = \frac{1}{x^a}$$,

$$x^a \cdot x^b = x^{a+b}$$,

$$\frac{x^a}{x^b} = x^{a-b}$$,

and $$(x^a)^b = x^{a \cdot b}$$.

<!--excerpt-->

Notice: This is not a rigorous way to prove that these formulas work.
This is just to get some geometric intuition for these formulas.

Let's start with the first one: $$x^{-a} = \frac{1}{x^a}$$

We can think of it like this:

$$x^3 = x \cdot x \cdot x$$

$$x^2 = x \cdot x$$

$$x^1 = x$$

<p style="text-align: center;">Between each of these,
you divide by x on the left side if you decrease the exponent by one. <br>
Then it makes sense that, if the pattern continues, </p>

$$x^0 = 1$$

$$x^{-1} = \frac{1}{x}$$

$$x^{-2} = \frac{1}{x \cdot x} = \frac{1}{x^2}$$

<p style="text-align: center;">and so on.</p>

Next formula: $$x^a \cdot x^b = x^{a+b}$$

This can be visualized easily if we just expand it:

$$x^a \cdot x^b =
\underbrace{x \cdot x \cdot x \cdot
_{\dots}
\cdot x \cdot x}_
{a \hspace{0.12cm} times}
\cdot
\underbrace{x \cdot x \cdot x \cdot
_{\dots}
\cdot x \cdot x}_
{b \hspace{0.12cm} times}$$

Now, we can clearly see that there will be $$a+b$$ $$x$$'s.

When put back in exponent form, it will be $$x^{a+b}$$.

Using this same example, we can also gain intuition for $$\frac{x^a}{x^b} = x^{a-b}$$.

When we expand it this time, some of the $$x$$'s will now become $$\frac{1}{x}$$'s instead.

$$x^a \cdot x^b =
\underbrace{x \cdot x \cdot x \cdot
_{\dots}
\cdot x \cdot x}_
{a \hspace{0.12cm} times}
\cdot
\underbrace{\frac{1}{x} \cdot \frac{1}{x} \cdot \frac{1}{x} \cdot
_{\dots}
\cdot \frac{1}{x} \cdot \frac{1}{x}}_
{b \hspace{0.12cm} times}$$

Now, some of the $$x$$'s and $$\frac{1}{x}$$'s will cancel.

There are two cases now: there are less $$\frac{1}{x}$$'s than $$x$$'s or the opposite
(well, not exactly, but you know what I mean).

Case 1: There are less $$\frac{1}{x}$$'s than $$x$$'s.

In this case, all of the $$\frac{1}{x}$$'s disappear completely. The amount of remaining
$$x$$'s is simply the amount of $$x$$'s minus the amount of $$\frac{1}{x}$$'s. This is basically
$$x^{a-b}$$.

Case 2: There are more or equal amounts of $$\frac{1}{x}$$'s than $$x$$'s.

In this case, there will be some $$\frac{1}{x}$$'s left over. The amount of $$\frac{1}{x}$$'s
is the amount of $$\frac{1}{x}$$'s minus the amount of $$x$$'s. Since $$\frac{1}{x^a} = x^{-a}$$,
the expression is also $$x^{-c} = x^{-(b-a)} = x^{a-b}$$ if $$c$$ is the amount
of $$\frac{1}{x}$$'s left.

As you can see, this all simplifies down to $$x^{a-b}$$.

Another way to see this is by manipulating it algebraically.

We can start with $$\frac{x^a}{x^b}$$.

This can also be written as $$x^a \cdot \frac{1}{x^b}$$.

Because $$x^{-n} = \frac{1}{x^n}$$, it can be simplified to $$x^a \cdot x^{-b}$$.

Now, we can just use the multiplication rule to simplify further:
$$x^a \cdot x^{-b} = x^{a+(-b)} = x^{a-b}$$.

Final formula: $$(x^a)^b = x^{a \cdot b}$$

This formula can be visualized with area.

First, let's expand the first layer:

$$(x^a)^b =
\underbrace{x^a \cdot x^a \cdot
_{\dots}
\cdot x^a \cdot x^a}_
{b \hspace{0.12cm} times}$$

I'm going to turn this vertically (you're  going to have to imagine the multiplication
signs because they look awful when put in the equation).

$$(x^a)^b =
\left .
\begin{array}{}
x^a\\
x^a\\
x^a\\
\vdots\\
x^a\\
x^a
\end{array}
\right \}
b \hspace{0.12cm} times
$$

Then, when we expand the second layer while it's still vertical, we get:

$$(x^a)^b =
\overbrace{
\left .
\begin{array}{}
x \cdot x \cdot x \cdot _{\dots} \cdot x \cdot x\\
x \cdot x \cdot x \cdot _{\dots} \cdot x \cdot x\\
x \cdot x \cdot x \cdot _{\dots} \cdot x \cdot x\\
\vdots \hspace{0.5cm} \vdots \hspace{0.5cm} \vdots
\hspace{0.1cm} \ddots \hspace{0.1cm}
\vdots \hspace{0.5cm} \vdots \\
x \cdot x \cdot x \cdot _{\dots} \cdot x \cdot x\\
x \cdot x \cdot x \cdot _{\dots} \cdot x \cdot x
\end{array}
\right \}
}^{a \hspace{0.12cm} times}
b \hspace{0.12cm} times
$$

As you can see in the formula (Yes, formula. It's all in LaTeX, which did take a lot of time...)
above, all of the $$x$$'s are making a rectangle that has side lengths of $$a$$ by $$b$$.
The number of $$x$$'s is basically the area of the rectangle, or $$a \cdot b$$.
Therefore, this all works out to be $$x^{a*b}$$.

That's all the intuition and geometric explanations (if not rigorous) for these formulas!

<p style = "color: #ddd;">(sigh this took sooooooooooo long, especially the gigantic rectangle of x's)</p>