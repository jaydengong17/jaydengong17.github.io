---
layout: default
title: Home
---

Hi. My name is Jayden. I am a 6th grader living in the sunny San Francisco bay area.

Welcome to my website. I named it Blagorf because this is my favorite meaningless word.


{% for post in site.posts %}
### <a href="{{ post.url }}">{{ post.title }}</a>
{{ post.date | date: "%-d %B %Y" }}
{{ post.excerpt }}
<a href="{{ post.url }}">\[more...\]</a>
{% endfor %}
