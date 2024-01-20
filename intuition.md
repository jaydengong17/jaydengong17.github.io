---
layout: post
title: Intuition Series
---

I am writing a series of blog posts about how to build intuition for junior high math concepts.


{% for intuition in site.intuition reversed %}
### <a href="{{ intuition.url }}">{{ intuition.title }}</a>
{{ intuition.date | date: "%-d %B %Y" }}
{{ intuition.excerpt }}
<a href="{{ intuition.url }}">\[more...\]</a>
{% endfor %}
