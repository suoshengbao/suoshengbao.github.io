---
title: "SuoLab - Lab News"
layout: allnews
excerpt: "Research publications, team updates and news from SuoLab at Guangzhou Laboratory."
permalink: /allnews.html
---
<div class="page-content" markdown="0">
<div class="page-heading"><h1>Lab news</h1><p>Research milestones, new colleagues and updates from our group.</p></div>
<div class="news-archive">{% for article in site.data.news %}<article class="news-item"><p class="news-date">{{ article.date }}</p><div><p>{{ article.headline }}</p>{% if article.url %}<a class="text-link" href="{{ article.url }}">Read the paper</a>{% endif %}</div></article>{% endfor %}</div>
</div>
