---
layout: post
title: Blog
---

Hi. My name is Jayden. I am a 7th grader living in the sunny San Francisco bay area,
and I have been writing these posts since 3rd grade.

<b style="color: red; size: 25pt">
Notice: if you are looking for the intuition series posts,
they were relocated to the Intuition Series tab.</b>

{% for post in site.posts %}
### <a href="{{ post.url }}">{{ post.title }}</a>
{{ post.date | date: "%-d %B %Y" }}
{{ post.excerpt }}
<a href="{{ post.url }}">\[more...\]</a>
{% endfor %}
