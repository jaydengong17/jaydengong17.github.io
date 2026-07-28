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
They are rotating CCW about their axes.
The black shape is rotating about everything composed.

Hold and drag to move around camera

w = forward, a = left, s = back, d = right, shift = down, space = up

<!--excerpt-->

{%include line_renderer.html%}
<script>
{%include line_renderer.js%}

// hardcoded example
function startupAddThings() {
    // adding a cube
    world.addThing(new Thing(0, 3, 0, 
        // spamming things
        [new Point(-1, -1, -1), new Point(-1, -1, 1), new Point(-1, 1, -1), new Point(-1, 1, 1), new Point(1, -1, -1), new Point(1, -1, 1), new Point(1, 1, -1), new Point(1, 1, 1)],
        [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3], [2, 6], [4, 5], [4, 6], [3, 7], [5, 7], [6, 7]],
        "#0f0"
    ));

    // adding another cube
    world.addThing(new Thing(3, 0, 0, 
        // spamming things
        [new Point(-1, -1, -1), new Point(-1, -1, 1), new Point(-1, 1, -1), new Point(-1, 1, 1), new Point(1, -1, -1), new Point(1, -1, 1), new Point(1, 1, -1), new Point(1, 1, 1)],
        [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3], [2, 6], [4, 5], [4, 6], [3, 7], [5, 7], [6, 7]],
        "#f00"
    ));

    // adding a cube
    world.addThing(new Thing(0, 0, 3, 
        // spamming things
        [new Point(-1, -1, -1), new Point(-1, -1, 1), new Point(-1, 1, -1), new Point(-1, 1, 1), new Point(1, -1, -1), new Point(1, -1, 1), new Point(1, 1, -1), new Point(1, 1, 1)],
        [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3], [2, 6], [4, 5], [4, 6], [3, 7], [5, 7], [6, 7]],
        "#00f"
    ));

    // adding a cube
    world.addThing(new Thing(-3, -3, -3, 
        // spamming things
        [new Point(-1, -1, -1), new Point(-1, -1, 1), new Point(-1, 1, -1), new Point(1, -1, -1), new Point(1, 1, 1), new Point(1, 1, -1), new Point(1, -1, 1), new Point(-1, 1, 1)],
        [[0, 1], [0, 2], [0, 3], [1, 2], [2, 3], [3, 1], [4, 5], [4, 6], [4, 7], [5, 6], [6, 7], [7, 5]],
        "#000"
    ));
}

function updateThings() {
    camera.setRotation(0, -totalScroll.x/sensitivity * Math.PI/2, totalScroll.y/sensitivity * Math.PI/2)
    camera.move()

    world.getThings()[0].setRotation(0, Date.now() / 1000, 0);
    world.getThings()[1].setRotation(0, 0, Date.now() / 1000);
    world.getThings()[2].setRotation(Date.now() / 1000, 0, 0);
    world.getThings()[3].setRotation(Date.now() / 1000, Date.now() / 1000, Date.now() / 1000);
}

onStartup();
</script>

### Features to be implemented

 - filling in the sides (eventually textures maybe?)
 - rigorous rendering
 - rigorous culling
 - fov and stuff
 - some primitive type of lighting
 - add explanation of the rendering maybe?

update: rigorous culling is difficult. idk if that's the right term to use either.

### Changelog
idk how you're supposed to do these so I'm just yapping

07/27/2026: Made it a bit more adaptable because I wanted to use it in a different post.

03/22/2026: Camera can move.

03/18/2026: Added object rotations, yes.

03/17/2026: Made previous version less buggy, so the camera works

03/17/2026: Buggy, but slightly works: have camera rotation and wireframe rendering.