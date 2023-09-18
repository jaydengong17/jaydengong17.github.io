---
layout: post
title: "Binary Counting: on a Piano"
date: "2023-08-01"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
---

I was at Nueva Summer camp this week.

I had a class about fractals in that camp,
and one thing the teacher showed was a puzzle video of him playing the piano.
We were supposed to figure out what he was playing,
and I got the answer pretty quick: he was counting in binary.

Example:
<iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/03i7rMulyGo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
</iframe>

You probably have at least one of these questions right now:

Why is counting in binary related to fractals?

and

How do you count in binary on a piano?

<!--excerpt-->

1st question's answer: Apparently, there is some self-similarity in that the 1s digit repeats,
0,1,0,1,0,1,0,1, the 2s digit repeats, 0,0,1,1,0,0,1,1, and so on. I don't get it completely, either.

2nd question's answer: Basically, you assign different keys to different digits.
For example pretend you want to play the number, 102. This, converted to binary, is:

0001100110 (extra zeroes to make it perfectly 10 digits, which is the maximum amount of keys you can press).

Then, say the first digit is assigned to the key, C.
The next digit would then be assigned to the key, D, and so on.

Well then, how do you generate these binary numbers quickly, based off of a random number?

The hard way: Implement a very complicated math thing that requires a bunch of if statements and mod 2s.

The easy way: Divide by two, record the remainder, and repeat until the quotient is 0. But how does this work?

Let's look at an example.

Convert 53 to binary.

53/2 = 26 remainder 1.

Basically, what this step is saying is, "I'm going to see if 53 is divisible by 2".
If it isn't, then there has to be a 1 in the binary representation
(because everything else is a multiple of 2).
Because we know now that there is a one in there, we can discard that remainder.

26/2 = 13 remainder 0.

This step is doing something like what the step above was doing.
It's saying, "I'm going to see if 26 is divisible by 2".
If it is, then there is not a multiple of 2. How do we know this?
Well, if there isn't a remainder, then the original number minus what we already know is there is divisible by 4.
If there  was a multiple of 2, then it would be 2x + 4y, where x and y aren't multiples of 2.
Then, we could factor this into 2(x+2y), which would contradict it, because 2(x + 2y) is not a multiple of 4.

13/2 = 6 remainder 1

This step does basically the same thing as above, but it is now asking if the 4s digit is a one or zero.

6/2 = 3 remainder 0

3/2 = 1 remainder 1

1/2 = 0 remainder 1


Our whole remainder string now looks like this:

101011

Except the 1s digit is at the front and the 32s digit is at the end, so we need to reverse it into:

110101, which is 53 in binary.


Now with this binary generating algorithm and this way to convert it into sheet music,
you can hear what counting in binary sounds like.

This is the project that implements this in scratch: https://scratch.mit.edu/projects/878330493/
