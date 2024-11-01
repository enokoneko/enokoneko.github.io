---
layout: home
title: eno
---
# include proj.md
{% include proj.md %}

# assign
{% assign a = site.pages | where: "path", "page/proj.md" | first %}
{{a.content}}