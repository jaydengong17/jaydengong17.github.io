---
layout: post
title: "Mandelbrot Set"
date: "2023-09-22"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
---

This post is about the Mandelbrot set. I also included a rendering of the Mandelbrot set
, with zooming capabilities.

{% include mandelbrot_set.html%}
<!--excerpt-->
{% include latex.html %}
The Mandelbrot set is defined this way:
$$f(n) = z^2 + c$$

where $$z = f(n-1)$$ and $$c$$ is your starting coordinates (in the complex plane).

$$f(0)$$ is defined to be $$c$$ (or more percisely, $$f(0) = 0^2 + c$$).

The places where $$f(n)$$, as $$n\to\infty$$ doesn't diverge are the Mandelbrot Set.

But then, why are there colors in some places?
The color encodes how fast that starting place will diverge to infinity.
Specifically, it looks at how quickly it reaches a distance of more than 2 from the origin
(because it is proven that if it does, it will diverge to infinity),
and colors it dependent on how many steps it takes before it reaches that border. 