---
layout: post
title: "Newton's Fractal"
date: "2024-11-03"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
---

Description not included yet, but UI works!
{% include newton_fractal.html %}

<div id="points">
    <div class="root_container" id="0">
        (<input id="0x">, <input id="0y">) <input type=button value="Delete point" onclick = "delete_point('0')">
    </div>
    <div class="root_container" id="1">
        (<input id="1x">, <input id="1y">) <input type=button value="Delete point" onclick = "delete_point('1')">
    </div>
    <div class="root_container" id="2">
        (<input id="2x">, <input id="2y">) <input type=button value="Delete point" onclick = "delete_point('2')">
    </div>
</div>
<input type=button onclick="addpoint()" value="Add point/root">

<input type=button onclick="render()" value="Render">
<p id="warning"></p>