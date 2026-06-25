---
layout: post
title: "Traffic Light Things"
date: "2026-06-20"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
---

{%include latex.html%}

Part of my commute to school is walking.
However, I also want to get there quicker,
while not spending too much energy.
I soon realized that knowing when to run or walk was important,
and so my friends (who also walk)
and I started observing things about the traffic lights.
This post talks about these things we have noticed.

<!--excerpt-->

Note: I have not looked into this online at all,
so the contents of this post could be wrong
or have uncommon names.

## Some Terms

An intersection can be in multiple states.
Each of these states is called a "step."
(state is a better name I think but step is what we thought of first)
I will ignore yellow lights because they are mostly insignificant.
Once an intersection gets back into its original state,
that is called a cycle.

An intersection can also have various amounts of lanes going into it or out of it.
If it has an equal number $$n$$ of both,
then this will be referred to as a $$n$$ way intersection.
If not, it will be called a $$n_{in}$$,$$n_{out}$$ intersection,
or "uneven".

## Types of Cycles

In this section I will show a lot of pictures of traffic light cycles,
represented by multiple drawings of intersections (for the steps).

For example, here is one step of a 4 way intersection:

<div align="center">
    <img src="/assets/images/trafficlights/example.png" alt="one step of a 4 way intersection">
    <p>Example of one step of a 4 way intersection</p>
</div>

In this image, the green and red dots represent
the colors of the traffic lights.
There are two green dots in this step.
Each green dot has a black arrow pointing to a green arrow,
which represent directions the cars can go
(e.g. turn left, from going up to going left).
In the following drawings, the black and green arrows will be omitted.

### 1 Way Intersections

<div align="center">
    <img src="/assets/images/trafficlights/1step1way.png" alt="1 step 1 way intersection">
    <p>1 way intersection (trivial)</p>
</div>

You might assume from this image that a 1 way intersection is just a road.
But actually, that would be a 2 way intersection. This is a one-way road.
Maybe you could consider the on-ramps that have traffic lights
during busy hours to also be 1 way intersections.

### 2 Way Intersections

<div align="center">
    <img src="/assets/images/trafficlights/1step2way.png" alt="1 step 2 way intersection">
    <p>2 way intersection (trivial)</p>
</div>

This is just a regular road.
You could consider a road with a pedestrian crossing
to be a 2 step 2 way intersection, maybe.

### 3 Way Intersections

It starts getting interesting now.
Of course, there is still the trivial intersection (no lights at all),
but I will ignore that for 3 and 4 way intersections.

<div align="center">
    <img src="/assets/images/trafficlights/3step3way.png" alt="3 step 3 way intersection">
    <p>3 step 3 way intersection</p>
</div>

This intersection roughly follows the layout:

Step 1: cars starting from the top do whatever

Step 2: cars starting from the right do whatever

Step 3: cars starting from the bottom do whatever

The cars that are going from top to bottom
are technically allowed to always go, as shown in the image,
but I find that it's usually turned off in step 2
(maybe because in step 2, the cars from the right and top would be merging).

Note that this image could be "flipped" top to bottom
or the states shown could change relative location.

### 4 Way Intersections

There are many more 4 way intersections.

<div align="center">
    <img src="/assets/images/trafficlights/4step4way.png" alt="4 step 4 way intersection">
    <p>4 step 4 way intersection (variant 1)</p>
</div>

In this intersection, each step gives full control to one of the directions.
For example, step 1 lets the cars from the right do anything.
This is probably the most common 4 way intersection.

<div align="center">
    <img src="/assets/images/trafficlights/4step4way2.png" alt="4 step 4 way intersection">
    <p>4 step 4 way intersection (variant 2)</p>
</div>

This intersection separates the turning cars from the cars going straight.
I am not completely sure that this intersection actually exists,
because having two turning paths at once sounds more prone to collisions.
However, this probably works fine for some weirdly shaped intersections.

<div align="center">
    <img src="/assets/images/trafficlights/6step4way.png" alt="6 step 4 way intersection">
    <p>6 step 4 way intersection</p>
</div>

This intersection is like the 4 step 4 way intersection (variant 1),
except there are added steps (#2 and #5 in the image) which
let the cars going straight go for longer,
relative to the cars that are turning left.
I think this is used on more major roads
where the majority of the traffic does not turn.

You may notice that all of these intersections in two phases:
in the top of the image, cars that start on the horizontal axes go,
and in the bottom, vertical ones go (or the other way, as seen in variant 2).
Because of this, we can mix and match the top and the bottom,
creating other 4 step, 5 step, or 6 step 4 way intersections.
For example, mixing the horizontal cars from the 6 step 4 way intersection
with the vertical cars from the 4 step 4 way intersection,
we get something (probably) seen when a major road
intersects with a minor road,
where the cars on the major road have more time to go forward.

### Other Intersections

I say that the trivial intersections are trivial because
they have no traffic lights, leading to a 1 step cycle.
But the roundabout also has no traffic lights,
so what is the n way roundabout classified as?

<div align="center">
    <img src="/assets/images/trafficlights/roundabout.png" alt="roundabout and circled interior intersection">
    <p>A roundabout and the hidden intersection within it</p>
</div>

I argue that a roundabout is really just a lot of weird 2 way roads.
Looking at the bit circled in red,
we see that it has 2 inward lanes (green)
and 2 outward lanes (red).
The right green and red arrows form one direction of the road,
and the left ones form the other direction.

Also, we have not talked about uneven intersections.
These are generally less common, and there are a lot more of them.
I think their cycles can mostly be constructed from even intersections.
For example, here is how to construct a 3,4 way intersection from a 3 way intersection.

<div align="center">
    <img src="/assets/images/trafficlights/3step3,4way.png" alt="3,4 way from 3 way">
    <p>A cycle for a 3,4 way intersection</p>
</div>

Note: the 3 way intersection shown here is different from before,
as the light corresponding to the top to the bottom cars is red sometimes.
But this is fine because they can still go at some times.

Interestingly, this also resembles the 4 way 4 step intersection, variant 1,
except one of the inward direction's step is removed.
Because of that, we don't need the step in which that direction can go anywhere,
which makes it only three steps long.
I think this can be generalized to any $$m$$,$$n$$ way intersection
where $$m<n$$.

## Optimizing your path

Now that you know some types of cycles, you must figure out which cycles
the traffic lights along your path use.
Observe the time each step takes.
Then, when you are walking, watch the intersection
to see when the traffic light changes colors.
It is likely that you will only see one of the four
sets of traffic lights, but you will still be able to
obtain a reasonably good estimate for the time until you can cross.
Using this estimate, approximate the speed you must walk/run at.

### Linking

Sometimes, one intersection may be "linked" with another intersection,
where the cycles line up with each other.
I don't know if this is by design (strongly linked)
or if the cycles just have the same length
and therefore repeat together (weakly linked.)
If they are weakly linked, then things like firetrucks
may change the relative time of the cycles.

Linking has some implications in optimization.
Say you have two linked intersections as shown below,
and you are trying to get from the very bottom left (star)
to the very top right (the badly drawn flag).

<div align="center">
    <img src="/assets/images/trafficlights/linkedintersections1.png" alt="linked intersections example">
    <p>The two different starting choices</p>
</div>

Say the intersection A is a 4 step 4 way intersection, variant 2.
This means that you will be able to cross rightward at the same time,
even if you chose to go up first.
Assuming you walk at the same speed,
you will get to the next intersection at the same time,
and you will be closer if you crossed up previously.
It seems like crossing up is the obvious choice.
However, if intersection B is a 6 step 4 way intersection linked to intersection A,
it is possible that when you get to intersection B,
the top crosswalk is no longer crossable
while the bottom one is.

<div align="center">
    <img src="/assets/images/trafficlights/linkedintersections2.png" alt="linked intersections example">
    <p>One of the steps of intersection B's cycle</p>
</div>

As shown in the figure above, the cars coming from the left
can turn left, which means that the top crosswalk is not crossable.
On the other hand, the bottom crosswalk is still crossable,
and so we can traverse the green arrow.

If, further, the next steps let the vertical cars go,
then you will end up getting to the destination
1 or 2 steps faster than if you crossed.
For example, if the next step lets the bottom cars go up or left,
we will be able to cross upwards,
beating the people who crossed first.

<div align="center">
    <img src="/assets/images/trafficlights/linkedintersections3.png" alt="linked intersection example">
    <p>The next step of intersection B, where the bottom one gets there first</p>
</div>

This shows how linked intersections can complicate things.

There are also simpler applications of linked intersections:
if you know that two intersections are linked,
knowing the step that your current intersection is on
tells you what step the other intersection is on,
which gives you a more accurate estimate, and also sooner.

## Further Ideas

### Minimal step counts

What is the minimal number of steps for a $$m$$,$$n$$ way intersection?
(assume that cars only go if a traffic light tells them to so the trivial cycle doesn't count)

In [
let's overcomplicate traffic intersections](https://www.youtube.com/watch?v=D7FNdfY_cUw&pp=ygUSdHJhZmZpYyBsaWdodCBtYXRo) by webgoatguy, he proves that a n way intersection
requires n steps minimum.
The construction was to have each origin direction go everywhere for one step,
which takes n steps because there are n origin directions in a n way intersection.
We have already seen an example of this;
the 4 step 4 way intersection, variant 1 is this construction for $$n=4$$.
This construction also works for $$m$$,$$n$$ way intersections when $$m < n$$,
giving a $$m$$ step cycle. This is minimal because the $$m$$ way intersection
is a "subintersection" of the $$m$$,$$n$$ way intersection,
as in if we ignore the extra $$n-m$$ outwards directions,
we just get a $$m$$ way intersection.
If there was a $$<m$$ step cycle,
then we would have found a $$<m$$ step cycle for a $$m$$ way intersection, a contradiction.

However, the case where $$m>n$$ is trickier.
Using the same construction would give a $$m$$ step cycle,
as there are $$m$$ inward directions.
This can not be minimal, because the $$4$$,$$3$$ way intersection
has a valid 3 step cycle (shown below.)
One idea I had was to "combine" the extra inward direction
with the inward direction next to it.

<div align="center">
    <img src="/assets/images/trafficlights/4,3to3wayintersection.png" alt="an example of making the 4,3 way intersection into a 3 way intersection">
    <p>The fourth in direction (red arrow) gets combined with the green arrow</p>
</div>

So whenever the adjacent inward direction can go somewhere,
the cars from the original direction also go there.
This would reduce the cycle (if we repeated this $$m-n$$ times) to a $$n$$ way intersection,
but for this to work, we need a cycle for the $$n$$ way intersection
where the directions that got combined
never have more than one traffic light green,
otherwise when we separate the combined directions,
the cars would intersect and crash.
Also, it is necessary for the combined direction to have a u-turn step at some point.

<div align="center">
    <img src="/assets/images/trafficlights/4,3intersection3step.png" alt="A 3 step 4,3 way cycle constructed from a 3 way 3 step cycle">
    <p>A 3 step 4,3 way cycle constructed from a 3 way 3 step cycle.<br>
    Note how the purple arrow always ends in the same place as the blue arrow.</p>
</div>

It is unclear if such cycles exist,
for example an extreme case is where we have a 8,4 way intersection.
Then we would (worst case) need to find a 4 step 4 way cycle
where each of the directions satisfies the above requirements.
Further, these intersections are sus because
they have multiple directions merging into the same road on the same step.

### program????

There is probably some place to scrape traffic light data.
Then you could use that to use an algorithm to optimize paths.
However, this seems like a headache.

## Conclusion

Traffic lights are interesting.
They appear to be quite simple,
however diving deeper, interesting problems arise,
problems with actual physical implications.
Yay? idk I put most of the stuff I usually put here in the above section