---
title: "SuoLab - Team"
layout: teamlay
excerpt: "Researchers, students and alumni of SuoLab at Guangzhou Laboratory."
permalink: /team/
---
<div class="page-content" markdown="0">
<div class="page-heading"><h1>Group Members</h1></div>
<p>We welcome prospective students, postdoctoral researchers and research assistants. See <a href="{{ '/positions/' | relative_url }}">Open positions</a> for application information.</p>
<h2 id="staff-and-students" class="section-title">Staff and Students</h2>
<div class="team-list">{% for member in site.data.team_members %}{% include member-card.html folder='/images/teampic/' %}{% endfor %}</div>
<h2 id="alumni" class="section-title">Alumni</h2>
<div class="team-list alumni-list">{% for member in site.data.alumni_members %}{% include member-card.html folder='/images/alumnipic/' alumni=true %}{% endfor %}</div>
</div>
