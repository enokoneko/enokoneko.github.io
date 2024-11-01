---
layout: default
---
{% for p in site.posts %}
	<small>{{p.date | date: "%Y-%m-%d"}}<small> [{{ p.title }}]({{ p.url | relative_url }})
{% endfor %}