---
layout: default
---
{% for p in site.posts %}
- [{{ p.title }}]({{ p.url | relative_url }})
{% endfor %}