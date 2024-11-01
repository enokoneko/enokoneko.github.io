---
layout: default
---
# pages
{{pages}}

{% for p in site.pages %}
- [{{ p.title }}]({{ p.url | relative_url }})
{% endfor %}