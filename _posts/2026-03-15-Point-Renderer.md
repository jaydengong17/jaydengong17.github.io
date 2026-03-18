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

Right now, the whole thing is broken.
Rotations of the camera don't work,
I think the whole screen is rendered flipped,
I just "delete" vertices behind the screen (this is bad),
and a lot of things are broken generally.
However, it kind of looks fine so whatever.

<!--excerpt-->

{%include line_renderer.html%}
<script>
{%include line_renderer.js%}
</script>