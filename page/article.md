---
layout: default
---
{% for p in site.posts %}
	{{p.date | date: "%Y-%m-%d"}} [{{ p.title }}]({{ p.url | relative_url }})
{% endfor %}