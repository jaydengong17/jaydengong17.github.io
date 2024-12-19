---
layout: post
title: "Image to Unicode converter"
date: "2024-12-17"
hide: false
author: "Jayden Gong"
excerpt_seperator: <!--excerpt-->
---

I made a tool to convert images to ascii art (ish) files.
As you can see from my ascii art tab,
I've always been interested in this concept,
and recently, I found an image made out of braille.
This image seemed too big to make by hand,
so I tried to write a program to make it.

This converts images in a 1 to 1 mapping of pixels to dots.
The converter is made for pixel art.
To make the 1 to 1 part possible,
this sacrafices the grayscale part of usual ascii image converters
and replaces it with braille,
which has 8 dots per character.

<!--excerpt-->

### Examples

Images scaled up, so they look kind of blurry

<img src="\assets\images\pixel_bunny.png" alt="bunny picture" width="128px">

<p style="line-height: 110%">
⠀⠀⠀⠀⣠⣀⠀⠀⠀⡶⡄⠀⠀⠀⠀⠀ <br>
⠀⠀⠀⠀⠱⡑⡍⡆⡠⠷⢼⡀⠀⠀⠀⠀ <br>
⠀⠀⠀⠀⠀⠘⣼⢏⡀⠀⠀⠱⡀⠀⠀⠀ <br>
⠀⠀⠀⠀⠀⢀⢧⣀⠁⠰⢷⡠⠃⠀⠀⠀ <br>
⠀⠀⠀⢀⠀⡇⠘⠿⠋⠉⠹⣿⠲⢤⣾⡆ <br>
⠀⠀⢰⠟⢳⠃⢰⠱⡀⠀⡠⢊⠇⠀⠙⠁ <br>
⠀⠀⠀⢇⣇⠀⠈⢢⡸⣪⡆⡇⠀⠀⠀⠀ <br>
⠀⠀⠀⠀⠀⠉⠒⠚⠛⠉⠉⠀⠀⠀⠀⠀
</p>

<img src="\assets\images\test_image.png" alt="test image" width="96px">

<p style="line-height: 110%">
⢹⠁⡯⠁⠪⢅⠈⡏ <br>
⠈⠀⠉⠁⠈⠁⠀⠁
</p>

This can also be done with regular images,
although the size of the output text can become very big.

<img src="\assets\images\cube.jpg" alt="rubik's cube">

<p style="line-height: 110%">
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⢿⠿⠛⠛⠛⠛⠛⠛⠋⠉⠉⠉⠉⠉⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ <br>
⣿⠿⠿⠟⠛⠛⠛⠛⠛⠛⠋⠉⠉⠉⠉⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ <br>
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿ <br>
⡇⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣿⣿⣿⣿⣿ <br>
⡇⣿⣿⣿⡆⠀⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣿ <br>
⡇⣿⣿⣿⡇⠀⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈ <br>
⡇⣿⣿⣿⡇⠀⣿⣿⣿⣿⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⢀⣀⡀⠀⠤⠤⠤⠤⠄⣀⣂⣐⣀⠀⠀⠀⠀⣤⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⡇⢸ <br>
⡇⣿⣿⣿⡇⠀⣿⣿⣿⣿⠀⢸⣿⣷⣦⡀⠀⠀⠐⠀⢒⣒⣒⣒⣉⣩⣭⣭⣭⣥⣤⡀⠀⠀⠀⢠⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸ <br>
⡇⢿⣿⣿⡇⠀⣿⣿⣿⣿⠀⢸⣿⣿⣿⣿⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸ <br>
⡷⠀⠈⠻⠇⠀⣿⣿⣿⣿⠀⢸⣿⣿⣿⣿⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸ <br>
⡇⠀⠀⠀⠀⠀⠘⠿⣿⣿⠀⢸⣿⣿⣿⣿⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸ <br>
⡇⡗⣦⡀⠀⠀⠀⠀⠀⠙⠀⢸⣿⣿⣿⣿⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢸ <br>
⡇⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠸⢿⣿⢿⡿⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠻⠿⠿⠟⠛⠛⠛⠛⠋⠉⠁⠀⣼ <br>
⡇⣿⣿⠁⠂⠀⣿⣶⣄⠀⠀⠀⠀⠉⠻⠇⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠙⠛⠛⠛⠛⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸ <br>
⡇⣯⣿⡀⠀⠀⢸⣿⣿⣿⠀⠁⠐⠀⠀⠀⠀⠀⠀⠈⠛⠛⠉⠉⠉⠉⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⢈⣤⣤⣤⣴⣶⣶⣶⣾⣿⣿⡆⢸ <br>
⡇⣿⣿⠃⠀⠀⢸⣿⣾⣿⠀⠀⡶⢀⠀⠀⠀⠀⠀⡀⢀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⢀⣭⣤⣤⣶⣶⣶⣶⣿⣿⣿⣷⡀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸ <br>
⡇⠛⢿⣗⡄⠀⢸⣿⣿⣿⠀⠀⡟⢲⠀⠄⠀⠀⠀⢀⣤⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⢟⡻⣿⣿⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸ <br>
⡏⠀⠀⠉⠁⠀⢸⣿⣿⣿⠀⠀⣷⢾⠉⠃⡀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸ <br>
⡇⡀⠀⠀⠀⠀⠘⢿⣻⣿⠀⠀⣿⢻⣆⣄⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⢸⣿⣿⣿⣿⡛⠍⣹⣿⣿⣿⣿⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣸ <br>
⡇⣏⣷⣄⠀⠀⠀⠀⠈⠻⠀⠀⣿⢸⣿⣿⠇⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⢸⣿⡿⣛⡿⣿⣾⣿⣿⣿⣿⣿⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⣿ <br>
⡇⡟⣿⢿⠀⠀⠀⠀⠀⠀⠀⠀⢪⡾⣟⡇⡀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⣿⣿⣿⣧⣾⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠘⠿⠿⠿⠿⠛⠛⠛⠛⠉⠉⠁⠀⣿ <br>
⡇⡇⣇⢠⠀⠀⢸⣤⣄⡀⠀⠀⠀⠉⠺⢕⠃⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠹⠿⠿⠿⠟⠛⠛⠛⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿ <br>
⡇⡷⠛⢸⠀⠀⢸⣿⣊⣷⠀⠐⠀⠀⠀⠀⠀⠀⠀⠘⠿⠿⠿⠿⠛⠛⠛⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣶⣶⣶⣾⣿⣿⣿⠀⣿ <br>
⡇⡇⠂⠀⠀⠀⢸⣿⡳⠞⠀⠀⠀⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢐⣊⣠⣤⣤⣴⣶⣶⣶⣿⣿⡆⠀⠀⠠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿ <br>
⣧⣀⠀⠀⠀⠀⠸⢻⣶⢾⠀⠀⢸⢹⠹⠦⠀⠀⠀⠀⢀⣠⣤⣤⣤⣶⣶⣶⣾⣿⣿⣿⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿ <br>
⣿⣿⣷⣄⡀⠀⠘⠈⠁⠸⠀⠀⢠⠈⢻⠐⠑⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿ <br>
⣿⣿⣿⣿⣿⣦⣀⠀⠈⠀⠀⠀⠀⠻⣷⣤⣀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿ <br>
⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠈⢿⠿⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⣿ <br>
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⢣⣴⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠂⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠈⠻⠟⠛⠛⠛⠉⢉⣉⣀⣠⣤⣴⣿ <br>
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⢠⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠘⠿⠿⠿⠿⠟⠛⠛⠋⠉⣉⣁⣠⣤⣤⣤⣶⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿ <br>
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠻⣿⠿⠿⠿⠛⠛⠛⠉⠉⠉⣀⣀⣤⣀⣠⣤⣤⣴⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ <br>
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⣀⣀⣠⣤⣤⣴⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
</p>
(Yes, it's inverted)

### Program

You can find the program [here](https://github.com/jaydengong17/image_to_braille).

The way this works is by splitting the image into 2 * 4 chunks,
each corresponding to a unicode character.
By then checking if the pixels are each bigger than a threshold,
we can create an id for the unicode character.
This might seem like a hard thing to do,
but I eventually noticed that each character's dots
were creating a binary number, which corresponded to its id.
Then, using Python's chr() function,
we can convert this into an actual character and log it in the output text file.

<p style="line-height: 110%">
⣿⣿⣿⣿⣿⠿⠛⠋⠉⠉⠉⠙⠛⠿⣿⣿⣿⣿⣿ <br>
⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿ <br>
⣿⡟⠁⠀⠀⠀⣴⡆⠀⠀⠀⢰⣦⠀⠀⠀⠈⢻⣿ <br>
⣿⠀⠀⠀⠀⠀⣿⡷⠀⠀⠀⢺⣿⠀⠀⠀⠀⠀⣿ <br>
⡇⠀⠀⠀⠀⠀⠙⠃⠀⠀⠀⠘⠋⠀⠀⠀⠀⠀⢸ <br>
⣷⠀⠀⠰⠤⠤⣀⣀⣀⣀⣀⣀⣀⠤⠤⡆⠀⠀⣾ <br>
⣿⣆⠀⠘⢤⣀⣀⣀⡀⠀⣀⣀⣀⣠⡴⠁⠀⣰⣿ <br>
⣿⣿⣦⡀⠈⠛⢿⣿⣿⣿⣿⣿⠿⠋⠀⢀⣴⣿⣿ <br>
⣿⣿⣿⣿⣦⣄⡀⠀⠉⠉⠁⠀⢀⣠⣴⣿⣿⣿⣿ <br>
⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛
</p>