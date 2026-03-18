---
layout: post
title: "3D Renderer"
date: "2026-03-15"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
---

It's been a while.

I haven't done anything with html canvas in a while,
so this is mostly just a thing to get me back going.

In no way is this final, I'll probably add way more stuff.
I also need to fix a lot of stuff.

Here, x is red cube, y is green cube, z is blue cube.

Hold and drag to move around camera

<!--excerpt-->

{%include line_renderer.html%}
<script>
{%include line_renderer.js%}
</script>

### Features to be implemented

 - filling in the sides (eventually textures maybe?)
 - rotation of objects
 - rigorous rendering
 - rigorous culling
 - movement of camera
 - some primitive type of lighting
 - add explanation of the rendering maybe?


### Changelog
idk how you're supposed to do these so I'm just yapping

03/17/2026: Made previous version less buggy, so the camera works

03/17/2026: Buggy, but slightly works: have camera rotation and wireframe rendering.