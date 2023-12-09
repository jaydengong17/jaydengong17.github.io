---
layout: post
title: "Solar System and Three Body System Simulations"
date: "2023-10-07"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
---

{% include latex.html %}

I wrote a gravity simulation.

Here is a video that I made on simulating the solar system.

{% include youtube.html id='3WpyJ4-Tn2M' %}

<br />
Here is a video that I made on the three body problem.

{% include youtube.html id='y9Wxy0Udne4' %}

<br />
This is a brief overview of the code that I wrote:

<!--excerpt-->

First, I made a way to create planets. I stored a few things about them:

their x and y positions

their velocity, in x and y components

their size, as in mass

if you want them to be stationary

Then, I defined an update function where I loop over every planet, 
then find the force pulling it to the other planet with this formula:

$$F = G\frac{m_1 m_2}{d^2}$$

where

$$F$$ is the force of gravity

$$G$$ is the gravitational constant

$$m_1$$ and $$m_2$$ are the masses of each object

$$d$$ is the distance from both masses

But there's a problem! This gives us the force of gravity, not the
acceleration on our object. Luckily, another one of Newton's formulas saves us here:

$$F=ma$$

where

F is the force

m is the mass

a is the acceleration

After solving for the acceleration, notice that one of the m's cancel out with the gravity formula.
Then, I solve for the accelerations for both the x and y axes using similar triangles.
I add the acceleration to the velocity, but before adding velocity to the position,
I compute the new velocity for each planet. This is to make sure that the distance between
each planet is still the same. If this didn't happen, the calculated distance between each planet would not
be the same, and even though this might not have much effect in one timestep,
it could snowball over time.

You can find the code in my other [repository](https://github.com/jaydengong17/gravity_simulator).