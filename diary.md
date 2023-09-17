---
layout: post
title: Diary
---

Sometimes I write about random things in my life.


{% for diary in site.diaries %}
### <a href="{{ diary.url }}">{{ diary.title }}</a>
{{ diary.date | date: "%-d %B %Y" }}
{{ diary.excerpt }}
<a href="{{ diary.url }}">\[more...\]</a>
{% endfor %}
