---
layout: post
title: "Intuition - Radicals Chapter"
date: "2024-04-30"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
---

{% include latex.html%}

This chapter was about radicals.
I decided to do one intuition post for the whole chapter.
I will first show how to find radicals,
introduce some vocab,
and then show how to do problems with radicals.

<!--excerpt-->

### How to find them

You may remember these exponent equations from
[Intuition - Exponent Rules](https://jaydengong.com/intuition/2023-12-08-Intuition-Exp-Rules.html):

$$x^{-a} = \frac{1}{x^a}$$,
$$x^a \cdot x^b = x^{a+b}$$, and
$$(x^a)^b = x^{a \cdot b}$$.

This is all we need to discover radicals
(actually, only the last one is needed).

Once you discover exponents,
a natural question is what you can plug into the various numbers.
Plugging in values for $$x$$ is pretty intuitive,
including negatives and fractions.
Plugging in values for $$a$$ can be more interesting, though.

Something you might try first is negative numbers.
What do they result in?

We can use the second equation to find out:
$$x^a \cdot x^b = x^{a+b}$$.

We want to find the result of a negative exponent,
so we plug in $$b = -a$$, hoping that this will cancel out or
at least do something with the regular $$a$$.

Indeed, after we try, we get something interesting.
The equation simplifies to:

$$x^a * x^{-a} = x^{a - a}$$, which becomes

$$x^a * x^{-a} = x^0$$.

$$x^0 = 1$$, so we can divide by $$x^a$$ on both sides to get
$$x^{-a} = \frac{1}{x^a}$$.

A natural next is trying fractions.
It makes sense to try what we did to the negative exponents,
just using the last equation instead of the second.

Again, if we want to find an identity with $$\frac{1}{something}$$ as an exponent,
we should try to include $$something$$ in the exponent too,
to try to cancel something.
This creates the equation,
$$(x^a)^{\frac{1}{a}} = x^{a * 1/a}$$, or
$$(x^a)^{\frac{1}{a}} = x$$.

With $$a = 2$$, this should remind you of something.
Taking the $$1/2$$ power of $$x^2$$ means that
$$1/2$$ power undoes $$x^2$$.
This is the square root.

What happens when you plug in different fractions?

For example, if you plug in $$a = 3$$,
you get the cube root,
because you're undoing the action of cubing something.

Then, you could also try plugging in fractions
with the numerators not 1.
This would lead to:

$$x^{\frac{b}{a}}$$

$$= (x^b)^{1/a}$$

And that is the a-th root of x^b.

### Vocab

This is how you're supposed to write a-th roots:
$$\sqrt[a]{x}$$

The radical is the $$\sqrt[]{\hspace{0.1cm}}$$ part.

The index is the tiny number in the gap of the radical sign.
In this case, it would be $$a$$.
If the index is 2, it is sometimes left out.

The radicand is the number inside the radical.
In this case, it would be $$x$$.

### Solving problems

There are two main types of problems that we did.

#### Simplifying the Radicals

These types of problems look like:

Simplify.
$$\sqrt[3]{375n^5m^7}$$

Remember that we can write $$\sqrt[a]{x^b}$$ as $$(x^b)^{1/a}$$.
This can also become $$x^{b/a}$$.

If $$b>a$$, it can also become $$x^{c + d/a}$$, where $$c*a+d=b$$.
We may also write it as $$x^c \cdot \sqrt[a]{x^d}$$.

This means that if we factor
the radicand and a factor has exponents
that are greater than or equal to the index,
we can take such factors out of the radical.

Here, we treat variables as factors of the radicand.

#### Solving Equations with Radicals

These equations look like:

$$\sqrt{x+4} = \sqrt{x^2 + 4x + 4} + 4$$
(I have no idea if that problem simplifies nicely.)

The key idea here is that $$\sqrt{x}^2 = x$$.

That means that if we can cancel out some radicals by squaring both sides.

If we square both sides enough,
we'll eventually get to the point
where there aren't any more radicals,
where you can factor and solve.

One problem here is that we might have extraneous solutions.

This sometimes happens when we square both sides of an equation.

For example, we might have the inequality $$-4 \neq 4$$.
This is obviously false,
but if we square both sides, we get
$$16 = 16$$, which is true.
This is a problem,
so you have to check each solution you get.

### Conclusion

Radicals are intuitive creatures.
If you keep in mind how we got to radicals,
you will realize that radicals just undo exponents,
and exponents also just undo radicals.
This allows you to solve many problems.