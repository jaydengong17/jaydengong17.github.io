---
layout: post
theme: minima
title: About
permalink: /about/
---

Hi. My name is Jayden. I am a <span id="grade"></span>th
grader living in the sunny San Francisco bay area,
and I have been writing these posts since 3rd grade.
Welcome to my website. I named it Blagorf because this is my favorite meaningless word.

<script>
    // calculates grade w/ the switch to the next grade being around july
    // doesn't take into account leap years and is generally inaccurate
    // but it probably won't drift that much
    document.getElementById("grade").innerHTML = Math.floor(Date.now() / 31536000000 - 46.583)
</script>

(okay, everything except for the grade up there is as of something like 2020)
Please don't judge my site picture or the image below. I made them in 3rd grade.

![Blagorf](/assets/images/Blagorf.png)
