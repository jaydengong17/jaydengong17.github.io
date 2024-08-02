---
layout: post
title: "Intuition: Polynomial Division"
date: "2024-01-19"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
---

{%include latex.html%}

In this class (well, technically last class),
we learned to do polynomial division.
Polynomial division is when you divide
one polynomial by another.
An example of polynomial division would be:
$$\frac{x^2+2x+1}{x+1}$$.

Here's a one-line strategy to solve the problem:
Pretend those are two numbers in base x,
and then divide regularly.

<!--excerpt-->

<span style="size:30pt; background-color:yellow;">
WARNING:
THIS IS A DIFFICULT POST. IF YOU DON'T UNDERSTAND IT,
I RECOMMEND WATCHING JAMES TANTON'S EXPLODING DOTS VIDEOS.
</span>


This is a really interesting subject.
I first learned it from MiTM (Math in the Mountains) camp,
from [James Tanton](https://www.youtube.com/@JamesTantonMath),
who does a lot of videos and articles on fun math.

I'll split this post up into many parts.
Depending on how much you know,
you can skip around and find the best level for you.

### List of Contents
 - Other Bases
 - Fractional Bases (exciting!!!)
 - Operations in Other Bases
 - Polynomial Division
 - Synthetic Division
 - Summary

### Other Bases

Have you ever heard that computers use binary?
Or maybe you found somebody saying, "hexadecimal"
when they were picking a color?
Those are all different bases. Binary is base $$2$$,
and hexadecimal is base $$16$$.

To understand how other bases work,
let's look at how the number system we use
(base $$10$$) works.

First, let's see how we count.
We start with $$0$$, and then add $$1$$ every time:
$$0, 1, 2, 3, 4, 5, 6, 7, 8, 9$$.

Now what do we do? We ran out of digits!

You already know what happens: We go to $$10$$.
After we count to $$19$$, it happens again.
It seems like every time this happens,
we change the tens digit and reset the ones digit.

Eventually, we'll get to $$99$$.
First, we change the ones and tens digits,
but this time, we get a problem:
we'll get $$10$$ in the tens digit,
but $$10$$ isn't an allowed digit.
Because of this, we move the $$10$$ to the hundreds place
and reset the tens digit. Then, we get $$100$$.

Now, we see a pattern. Every time we run out of digits,
we reset that digit and add one to the next place value.

But who says we have to only have $$10$$ digits?
(yes, $$0$$ to $$9$$ is $$10$$ digits, not $$9$$.)
This is what different bases is all about.
If somebody says base $$2$$,
that means that there are $$2$$ digits ($$0$$ and $$1$$.)

Let's try to count in base $$2$$.

First, we start with $$0$$.

Then, we keep incrementing by $$1$$,
but after we increment it once (to $$1$$),
we already have a problem.
$$2$$ isn't a defined digit!
We can still use the pattern we discovered
when we counted in base 10, though.
We reset the units digit and increment
the next place value.

Then, we get $$10_2$$
(the sub-2 means that this is in base 2.)
Watch out, as this isn't the same as $$10$$!

Then, it becomes $$11_2$$,
and at then next increment,
we have to carry it over $$2$$ times to $$100_2$$.

Here's a longer list of numbers:

|Base $$2$$ number|Base $$10$$ equivalent|
|-|-|
|$$0_2$$|$$0$$|
|$$1_2$$|$$1$$|
|$$10_2$$|$$2$$|
|$$11_2$$|$$3$$|
|$$100_2$$|$$4$$|
|$$101_2$$|$$5$$|
|$$110_2$$|$$6$$|
|$$111_2$$|$$7$$|
|$$1000_2$$|$$8$$|
|$$1001_2$$|$$9$$|
|$$1010_2$$|$$10$$|
|$$1011_2$$|$$11$$|
|$$1100_2$$|$$12$$|
|$$1101_2$$|$$13$$|
|$$1110_2$$|$$14$$|
|$$1111_2$$|$$15$$|

This doesn't only apply to base $$2$$.
If you have base $$n$$, in general,
you will have $$n$$ digits before you have to carry over.
If you have $$n > 10$$, you can use the alphabet as digits.

But say you want some way to convert bases
quickly into other bases.

First, notice that the digit to the immediate left
of the decimal is always the ones digit.

Next, notice that when we carry to the next place value,
we have already incremented
the last place value by $$n$$ times.
For example, when we get to $$10_2$$,
we have incremented the ones digit $$2$$ times.

This means that the place value
to the left of the ones digit
is $$n$$ times the number that's actually
in that place value,
because to increment that place value,
we need to increment the last place value $$n$$ times.

This means that if the number is
$${a_ba_{b-1}a_{b-2}\dots a_2a_1a_0}_n$$,
the number's actual value is:
$$a_b \cdot n^b + a_{b-1}\cdot n^{b-1} + \dots +
a_1 \dots n + a_0 \dots n$$.

For example, $$21_3 = 2 * 3 + 1 = 7_{10}$$.

Finally, we can convert this number
from base 10 to the target base.

### Fractional Bases

This is an exciting concept.

Basically, everything we learned still applies,
except for maybe counting.

If you have a fractional base, you still need to make sure
that the next place value has $$n \cdot$$
the previous place value's value.

For example, in base $$\frac{3}{2}$$,
you go (pretend that they all have sub-$$\frac{3}{2}$$ on them):
$$0, 1, 2,$$ and then $$20$$.

In base $$\frac{4}{3}$$,
you go: $$0, 1, 2, 3,$$ and then $$30$$.

It seems like whenever you have the digit in the numerator
of the base, you carry that to the next digit,
but instead of adding $$1$$ to the next place value,
you add the denominator of the base.

I'll leave it to the viewer
to figure out why this method of carrying over
satisfies the requirements.

<details>
<summary style="font-size:15pt; background-color:yellow;"> Solution </summary>
Say you have base \(\frac{m}{n}\).
When you carry, you take away \(m\)
from the place value,
and add \(n\) to the next place value.
This means that
\(m \cdot\) this place value's value
\(= n \cdot\) next place value's value.

When you divide by \(n\) on both sides,
you get what we wanted.
</details>

This even works for non-fractional bases.
Just pretend that the denominator is $$1$$.

In that way, we know how to do (almost)
every base value greater than 1.

If your base is $$1$$, everything breaks.

If your base is less than one but
greater than negative one,
I think you <b>might</b> get the p-adic numbers.

If your base is negative one,
everything breaks (again).

If your base is less than negative one,
you get a way to represent negative numbers
without using a negative sign in front.

If you're still confused,
I recommend watching James Tanton's
exploding dots videos.

### Operations in Other Bases

I started writing explanations
for each operation.
Then, I realized:
they're all basically the same.
You just have to make sure
that you're carrying and borrowing right.

The really important operation here is division.
Make sure you understand how to do it.

### Polynomial Division

Now, the sentence I said at the start
should make sense.

First, we treat the polynomial as a base $$x$$ number.
For example, $$x^3 + 2x^2 - 3x + 12$$ would be 
$${1\hspace{0.2 cm} 2\hspace{0.2 cm} -3\hspace{0.2 cm} C}_x$$.
Then, we can divide.

There is one big difference, though.

If you try to divide $$\frac{169}{17}$$
with long division,
you will notice that you can't divide $$16$$ by $$17$$
in the first step.
Because of this, you just leave it there.

When you do polynomial division, though,
you can't just leave the $$x^2 + 6x$$ there
because you can't combine it with the next step.
Because of this, you subtract it anyway
and get $$-1$$ after.

In general, you have to completely cancel out
the highest-degree term no matter what.

Let's walk through an example.

$$
\frac{1\hspace{0.2 cm} 6\hspace{0.2 cm} 9_x}
{1\hspace{0.2 cm} 7_x}
$$

First, we have $$x^2 + 6x$$.
$$x + 7$$ goes into that $$x$$ times,
if we want to cancel out that first term.

We get $$-x$$ after we subtract it.

After, we bring down the $$9$$.
$$x + 7$$ goes into that $$-1$$ times.
Then, we have a remainder of $$16$$,
so our answer is $$x + 1 + \frac{16}{x+7}$$.

### Synthetic Division

This is basically just long division,
but in condensed form.

We only learned how to do it
if we were dividing by $$x + n$$.

I don't know how to describe this well with words,
so you should probably look up an image
or a video to learn this instead.

First, you just take the first coefficient
and move it to the answers.
You can do this because you need to perfectly
fit that term, which you can do by multiplying
it by the coefficient.

Then, you take the answer and multiply it by $$-n$$
before adding it to the next coefficient.
This works because when you do that first part,
you multiply the whole thing by $$n$$.
Then, when you subtract it, the first
part cancels out,
but the second part is just subtracted.
That's just the same as adding the negative,
so it works.

Next, you can take that sum.
To perfectly match it,
you just multiply it by that sum.
Then, the logic is still the same.

Finally, you can repeat until you're done.

### Summary

Polynomial division is a really interesting subject
in terms of intuition.
It leads to interesting stuff like different bases
and fractional bases,
which still aren't completely understood.

One still unsolved problem is
when you carry to the next digit
if you're counting in fractional bases.

For example, in base $$\frac{3}{2}$$,
counting goes (pretend there's a sub-$$\frac{3}{2}$$):
$$
0,
1,
2,
20,
21,
22,
210,
211,
212,
2000,
2001,
2002,
2020,
2021,
2022,
2210,
2211,
2212,
21100,\dots
$$