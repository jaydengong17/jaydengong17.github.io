---
layout: post
title: Blog
---

Hi. My name is Jayden. I am a 7th grader living in the sunny San Francisco bay area,
and I have been writing these posts since 3rd grade.

{% for post in site.posts %}
### <a href="{{ post.url }}">{{ post.title }}</a>
{{ post.date | date: "%-d %B %Y" }}
{{ post.excerpt }}
<a href="{{ post.url }}">\[more...\]</a>
{% endfor %}
