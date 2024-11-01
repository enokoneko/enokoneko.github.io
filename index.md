---
layout: home
title: eno
---
{% assign a = site.pages | where: "path", "/page/proj.md" | first %}
{{ a.content }}
<!-- {{ "/page/proj.md" | content }} -->