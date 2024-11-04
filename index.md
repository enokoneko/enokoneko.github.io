---
layout: home
title: eno
---
{% assign a = site.pages | where: "path", "/page/" %}
{{ a.content }}
<!-- {{ "/page/proj.md" | content }} -->