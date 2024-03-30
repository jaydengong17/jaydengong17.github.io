---
layout: post
title: "Mass Spring Softbody Model"
date: "2024-03-15"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
---

{%include mass_spring.html%}
{%include latex.html%}

This is my mass spring softbody model.

Each of the red dots is a node
and each of the black lines is a spring.
The node has a mass,
so it is called the mass spring model.

In each timestep, the springs force
some acceleration on the nodes.
This is calculated with Hooke's Law,
which is $$F_s = -k \cdot s$$,
where $$k$$ is displacement
and $$s$$ is spring stiffness.

This simulation is quite fun to play with.
For more ideas to use this and more explanation,
go here: [Mass-Spring Model Video](https://www.youtube.com/watch?v=e3LkIRP-ytk)