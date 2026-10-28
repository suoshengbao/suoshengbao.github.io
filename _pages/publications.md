---
title: "SuoLab - Publications"
layout: gridlay
excerpt: "Selected publications and the publication list of SuoLab at Guangzhou Laboratory."
permalink: /publications/
---
<div class="page-content" markdown="0">
<div class="page-heading"><h1>Publications</h1></div>
<p class="publication-legend"><span>^ Co-first author</span><span># Corresponding author</span></p>
{% capture publication_dataset_names %}{% for dataset in site.data %}{% assign dataset_name = dataset[0] %}{% assign dataset_prefix = dataset_name | slice: 0, 8 %}{% if dataset_prefix == 'publist_' and dataset_name != 'publist_highlight' %}{{ dataset_name }}|{% endif %}{% endfor %}{% endcapture %}
{% assign publication_dataset_names = publication_dataset_names | split: '|' | sort | reverse %}
<nav class="section-nav publication-nav" aria-label="Publication years">
  <a href="#highlights">Highlights</a>
  {% for dataset_name in publication_dataset_names %}
    {% assign dataset_prefix = dataset_name | slice: 0, 8 %}
    {% if dataset_prefix == 'publist_' and dataset_name != 'publist_highlight' %}
      {% assign year = dataset_name | remove_first: 'publist_' %}<a href="#year-{{ year }}">{{ year | replace: '-', '–' }}</a>
    {% endif %}
  {% endfor %}
</nav>
<section id="highlights" class="publication-highlights"><div class="section-heading"><h2>Highlights</h2></div><div class="highlights-grid">{% for publi in site.data.publist_highlight %}{% include publication-entry.html featured=true %}{% endfor %}</div></section>
{% for dataset_name in publication_dataset_names %}
  {% assign dataset_prefix = dataset_name | slice: 0, 8 %}
  {% if dataset_prefix == 'publist_' and dataset_name != 'publist_highlight' %}
    {% assign year = dataset_name | remove_first: 'publist_' %}
    <section id="year-{{ year }}" class="publication-year"><h2>{{ year | replace: '-', '–' }}</h2>{% for publi in site.data[dataset_name] %}{% include publication-entry.html %}{% endfor %}</section>
  {% endif %}
{% endfor %}
</div>
