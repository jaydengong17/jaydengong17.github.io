---
layout: post
title: "Intuition: Multiplying Polynomials"
date: "2024-01-12"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
---

{%include latex.html%}

Today, we learned about multiplying polynomials together with each other.
What we learned looks like:

$$(a_1x+a_0)(b_1x+b_0)$$,

$$(a_2x^2+a_1x+a_0)(b_1x+b_0)$$,

or sometimes, $$(a_1x+a_0y)(b_1x+b_0y)$$,

but really, this can apply to any degree of polynomial,
with as many polynomials multiplied together as you want,
with as many variables as you want in each polynomial.

There isn't much intuition for expanding stuff,
even though it's kind of hard sometimes,
so I'll try to add exercises to test
your intuition.

<!--excerpt-->

### General Method for Expanding

The only thing you really need to use is the distributive property.

If you're unclear on on what I mean, here's an example.
If you have something like this:

$$(a_1x+a_0)(b_1x+b_0)$$,

you can distribute the first into the second, giving:

$$b_1x(a_1x+a_0)+b_0(a_1x+a_0)$$.

Then, you can distribute even further:

$$a_1b_1x^2+a_0b_1x+a_1b_0x+a_0b_0$$,

and finally, when like terms are combined:

$$a_1b_1x^2+(a_0b_1+a_1b_0)x+a_0b_0$$.

Having more terms or variables doesn't affect this method.
If you have more polynomials, though,
you will have to expand one set of polynomials first.
Then, you can make another set of polynomials and expand that.
Eventually, everything will be expanded.

For example, say you want to expand

$$(a_1x+a_0)(b_1x+b_0)(c_1x+c_0)$$.

In this example, I'll highlight the differences in <b style="color:red;">red</b>
because most of the formula doesn't change much.

The first step would be to expand
$$(a_1x+a_0)$$ and $$(b_1x+b_0)$$.
We have already found the solution to that, so
we can just substitute that in.
After this step, the result is:

$$\color{red}(a_1b_1x^2+(a_0b_1+a_1b_0)x+a_0b_0)\color{black}(c_1x+c_0)$$.

Then, we distribute that into $$(c_1x+c_0)$$.
The result is:

$$
\color{red}c_1x\color{black}
(a_1b_1x^2+(a_0b_1+a_1b_0)x+a_0b_0)
\color{red}+c_0\color{black}
(a_1b_1x^2+(a_0b_1+a_1b_0)x+a_0b_0)$$.

After we expand some more, we get:

$$
a_1b_1
\color{red}c_1x^3\color{black}
+
\color{red}c_1\color{black}
(a_0b_1+a_1b_0)
\color{red}x^2\color{black}
+a_0b_0
\color{red}c_1x\color{black}
+a_1b_1
\color{red}c_0\color{black}
x^2+
\color{red}c_0\color{black}
(a_0b_1+a_1b_0)x+a_0b_0
\color{red}c_0
$$.

Some places need to be distributed again:

$$
a_1b_1c_1x^3+(a_0b_1
\color{red}c_1\color{black}
+a_1b_0
\color{red}c_1\color{black}
)x^2+a_0b_0c_1x+a_1b_1c_0x^2+(a_0b_1
\color{red}c_0\color{black}
+a_1b_0
\color{red}c_0\color{black}
)x+a_0b_0c_0
$$.

Finally, like terms are combined:

$$
a_1b_1c_1x^3+(a_0b_1c_1+a_1b_0c_1+
\color{red}a_1b_1c_0\color{black}
)x^2+(
\color{red}a_0b_0c_1\color{black}
+a_0b_1c_0+a_1b_0c_0)x+a_0b_0c_0
$$.

Reminder: This is just an example
as to how to do these types of problems.
The real message here is that
all of these problems are solvable
by just distributing.

This formula may seem like a gigantic mess,
but there are some consistencies.
For example, in the coefficient,
the number of $$something_1$$'s determines
the power of the $$x$$ attached to it.

I'll leave it as an exercise to the viewer
to see why this works.
<details>
<summary style="font-size:15pt; background-color:yellow;"> Hint #1 </summary>
Notice how all the coefficients with a sub-one
have an x with it, at the start.
</details>
<details>
<summary style="font-size:15pt; background-color:yellow;"> Hint #2 </summary>
Does the x attached to the coefficients
with a sub-one ever leave the coefficient?
</details>

### Interesting Expansions

Let's look at the expansion of $$(a_1x+a_0)(b_1x+b_0)$$ again.

$$a_1b_1x^2+(a_0b_1+a_1b_0)x+a_0b_0$$

Looking at it, you could notice that the term
with degree 1 could be 0,
without any of the coefficients being 0.

This thought leads to an interesting formula:
$$(ax+b)(ax-b)=(ax)^2-b^2$$.
This is called "difference of squares".

This difference formula doesn't only apply to squares!

There are many other differences of ...s,
in fact, there is one for every power of $$x$$!

For example, $$x^3$$ is:
$$(ax)^3-b^3=(ax-b)((ax)^2+axb+b^2)$$

I'll also leave why this happens to the viewer to figure it out.

<details>
<summary style="font-size:15pt; background-color:yellow;"> Hint </summary>
Does anything seem to cancel out, like the difference of squares?
</details>


<details>
<summary style="font-size:15pt; background-color:yellow;">Solution </summary>
This is for intuition,
so this is not rigorous.

First, distribute \((ax-b)\) into \(((ax)^2+axb+b^2)\).
The rightmost term will be \((ax-b)(b^2)\).
When we distribute this, it will become \(ab^2x - b^3\).
The \(b^3\) part will stay until the end.
The next term we distribute will have \(ax-b\) multiplied by \(abx\).
when we expand this, the \(-b\) will become \(-ab^2x\),
which cancels out the \(ab^2x\) text from before.

Every time (except for the first expansion,
which creates the \(-b^3\) term)
we expand another term,
we cancel one of the residual parts
of the last term we expanded
and create another residual part.

At the last expansion,
the residual part is
\(ax \cdot (ax)^2\),
which becomes the first part, \((ax)^3\).
The final expansion is then \((ax)^3 - b^3\),
which is what we wanted to prove.

This solution works for other difference of ...s, too.
</details>

All odd powers also have "sum of ...s".

For example, this is the sum of cubes:

$$(ax)^3 + b^3 = (ax+b)((ax)^2-abx+b^2)$$.

This is actually just a special case of difference of cubes,
where b is negative.

Although this is already very interesting,
there are still a lot more interesting topics
related to expanding binomials and quadratics.
Make sure to look for the next post!
(The next post might take some time to get out -
there's a quiz next class)
