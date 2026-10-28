---
title: "SuoLab - Home"
layout: homelay
excerpt: "SuoLab at Guangzhou Laboratory combines single-cell and spatial multi-omics with computational biology to understand immune regulation and cancer."
permalink: /
---
<div class="home-content" markdown="0">
<section class="overview-panel" aria-labelledby="overview-title">
  <div class="section-heading"><h2 id="overview-title">Research overview</h2></div>
  <p><strong>Research focus.</strong> We investigate how immune cell states and tissue environments shape responses to cancer immunotherapy, including the balance between antitumor immunity and immune-related adverse effects. We also study changes in the immune microenvironment during early tumor evolution, with particular interest in T-cell regulation and interactions among different cell populations.</p>
  <p><strong>Methods.</strong> We combine <strong>single-cell and spatial multi-omics</strong> with computational modeling to connect molecular profiles with their tissue context. Our work develops approaches for spatial mapping, regulatory network analysis, causal inference and interpretable machine learning. Experimental systems help validate computationally inferred hypotheses, linking method development to biological discovery.</p>
</section>
{% assign snapshots = site.data.research_snapshots %}
{% assign snapshots_count = snapshots | size %}
{% if snapshots_count > 0 %}
<section class="research-showcase" aria-label="Research snapshots">
  <div class="section-heading compact"><h2>Research snapshots</h2></div>
  <div id="carousel" class="carousel slide" data-interval="5000" role="region" aria-roledescription="carousel" aria-label="Research figures" tabindex="0">
    <div class="carousel-inner" aria-live="off">
      {% for snapshot in snapshots %}
      {% assign snapshot_path = '/images/homepage/' | append: snapshot.image | relative_url | uri_escape %}
      <div class="item{% if forloop.first %} active{% endif %}" role="group" aria-roledescription="slide" aria-label="{{ forloop.index }} of {{ snapshots_count }}"{% unless forloop.first %} hidden{% endunless %}><a href="{{ snapshot_path | escape }}"><img src="{{ snapshot_path | escape }}" alt="{{ snapshot.alt | escape }}"{% unless forloop.first %} loading="lazy"{% endunless %}></a></div>
      {% endfor %}
    </div>
    <div class="carousel-toolbar"><span>Click a figure to enlarge</span>{% if snapshots_count > 1 %}<div class="carousel-buttons"><button type="button" data-carousel-toggle aria-label="Pause slideshow">Pause</button><button type="button" data-carousel="prev" aria-label="Previous research figure">←</button><span class="carousel-count" aria-live="off">1 / {{ snapshots_count }}</span><button type="button" data-carousel="next" aria-label="Next research figure">→</button></div>{% endif %}</div>
  </div>
</section>
{% endif %}
<section class="join-callout"><h2>Open positions</h2><p>We welcome applications from students, postdoctoral researchers and research assistants interested in computational biology and immunology. Please see our <a href="{{ '/positions/' | relative_url }}">positions page</a> for details.</p></section>
</div>
