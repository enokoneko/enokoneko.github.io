---
layout: default
---
# pages
{{pages}}
# site.pages
{% for p in site.pages %}
- [{{ p.title }}]({{ p.url | relative_url }})
{% endfor %}