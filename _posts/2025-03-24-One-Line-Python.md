---
layout: post
title: "One Line Python Expressions"
date: "2025-03-24"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
---

I was curious about one-line python expressions,
so I tried to explore it a little bit.

{%include latex.html%}

<!--excerpt-->

### Origins

At school, I had a CS assignment
to use list comprehension to make a list
of the first 100 prime numbers.
The assignment told us that it should be one line,
and it could use built-in Python functions.
It turns out that there was a mistake,
as checking if a number is prime in Python isn't a built-in function.
The teacher corrected it so that you could write a helper function
and use that in the one line list comprehension,
but I decided to try to satisfy the initial conditions instead.

After experimenting with triple nested list comprehensions,
lambda functions, and other stuff, I came up with this:

    print([i for i in range(2, 101) if (sum([i % n == 0 for n in range(2, int(i ** 1/2) + 1)]) == 0)])

Explanation:
This algorithm is based on the mod prime checker.
The base mod part is

    i % n == 0

which returns True (or 1) if divisible and False (or 0) if not.
we check for every n in the range from $$2$$ to $$\lceil\sqrt{i}\rceil$$,
which are all of the numbers we need to check for divisibility by.
This, in the code, looks like:

    range(2, int(i ** 1/2) + 1)

Storing them in a list using list comprehension,
we then sum up all of the results,
and the sum will be $$0$$ if i isn't divisible by anything,
in other words, if i is prime.

This whole part looks like this:

    sum([i % n == 0 for n in range(2, int(i ** 1/2) + 1)])

If the sum is 0, then we store i in the outer-most list comprehension,
which is from 2 to 100. This outer-most list comprehension
is the final list.

### Next Steps

This got me interested in how much you could do with only
one-line expressions.

If you didn't know already, you can use semicolons in Python
to stack different lines together, such as:

    print("hi"); print("hi again")

This is equivalent to

    print("hi")
    print("hi again")

I think this works for the most part,
but you have to nest if statements like

    output1 if condition1 else (output2 if condition2 else(...))

and you can't have semicolons inside the output bits (I think).
This is fixable with exec statements, though,
although I'm not sure if that's the best idea.

Another possible direction is to try to create a bunch of logic gates,
so that you can simulate a computer. I think this is definitely possible,
as you could just create a giant line of code that looks like:

    not ((a and b) or ((c and a) or ((a and b) or not (c and not b))) or a) and (b)

(I don't think this does anything)

This should work, but isn't turing-complete yet,
as it doesn't have memory.
I think one possible horrible solution to not having memory
is just to recompute everything everytime you want to access something in memory.

For example, if you wanted to do

    c = a + b
    d = c + b
    e = c + d

where a and b are given,
you could just do

    e = (a + b) + ((a + b) + b)

This is disguisting because,
while addition doesn't take much time,
there may be other operations that take a lot of time to do.
If you need to redo this operation over and over
instead of just storing it in memory, the whole program
will take way longer than it needs to.

A less disguising solution is turning back to semicolons,
not as the main method to make everything one line,
but just to add memory. This works like so:

    list = []; big_boolean_expression

If we define a list, and then use the condition stuffs,
we can access memory from the list later with

    list[your_index]

To assign things to the list, we can use

    ((True or list.insert(your_index_here, your_value_here)) or list.pop(your_index_here + 1))

This completes the memory part of your boolean logic,
so it might be turing-complete now.

### Conclusion

I still want to explore this topic more,
but wanted to get this out as soon as possible.
Hopefully, I will find a better way to make these one-line expressions
and more rigorously show that whatever method ends up
being the finished product is turing-complete.