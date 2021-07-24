---
title: "SuoLab - Team"
layout: piclay
excerpt: "SuoLab: Team members"
sitemap: false
permalink: /team/
---

# Group Members

 **We are  looking for passionate Associate Investigator, Postdoc, Assitent Investigator and Research Assistant/Lab manager to join the team** [(more info)]({{ site.url }}{{ site.baseurl }}/positions) **!**

<!-- Jump to [staff](#staff), [master and bachelor students](#master-and-bachelor-students), [alumni](#alumni), [administrative support](#administrative-support), [lab visitors](#lab-visitors). -->

## Staff
<div class="col-sm-6 clearfix" style="padding-left: 1px;">
<div class="well"  style="height: 180px; width: 960px">
<img src="/images/teampic/ShengbaoSuo.jpg" width="12.8%" style="float: left; border-radius:20px"/>
<h5><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shengbao Suo<strong></h5>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Principal Investigator</i></p>
<ul style="list-style-type:square; overflow: hidden">
<li>2021&nbsp;&nbsp;Postdoc, Dana-Farber Cancer Institute and Harvard Medical School</li>
<li>2020&nbsp;&nbsp;Postdoc, Dana-Farber Cancer Institute and Harvard Medical School</li>
<li>2019&nbsp;&nbsp;Postdoc, Dana-Farber Cancer Institute and Harvard School of Public Health</li>
<li>2017&nbsp;&nbsp;Ph. D., CAS-MPG Partner Institute for Computational Biology, Chinese Academy of Sciences</li>
</ul>
</div>
</div>

<div class="col-sm-6 clearfix" style="padding-left: 1px;">
<div class="well"  style="height: 180px; width: 960px">
<img src="/images/teampic/ShengbaoSuo.jpg" width="12.8%" style="float: left; border-radius:20px"/>
<h5><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shengbao Suo<strong></h5>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Principal Investigator</i></p>
<ul style="list-style-type:square; overflow: hidden">
<li>2021&nbsp;&nbsp;Postdoc, Dana-Farber Cancer Institute and Harvard Medical School</li>
<li>2020&nbsp;&nbsp;Postdoc, Dana-Farber Cancer Institute and Harvard Medical School</li>
<li>2019&nbsp;&nbsp;Postdoc, Dana-Farber Cancer Institute and Harvard School of Public Health</li>
<li>2017&nbsp;&nbsp;Ph. D., CAS-MPG Partner Institute for Computational Biology, Chinese Academy of Sciences</li>
</ul>
</div>
</div>

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="20%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <p><i>{{ member.info }}<i></p>
  <ul style="overflow: hidden">
  
  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}
  
  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}
  
  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}
  
  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}
 
  {% if member.number_educ == 5 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}
  
  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}




<!-- ## Master and Bachelor Students 
{% assign number_printed = 0 %}
{% for member in site.data.students %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}<br>email: <{{ member.email }}></i>
  <ul style="overflow: hidden">
  
  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}
  
  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}
  
  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}
  
  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}
  
  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}
 -->

<!-- ## Alumni
<table align="center" style="width:100%">
<tr><th>Visitors</th>
    <th>Master Students</th> 
    <th>Bachelor Students</th>
  </tr>
  <tr>
    <td>Nikolaos Iliopoulos, Spring 2016</td>
    <td>Bert Visscher, Fall 2017</td>
    <td>Vishnu Saj, Spring 2017</td>
  </tr>
  <tr>
    <td>Vitaly Fedoseev, all of 2016</td>
    <td>Ahmad Jamalzada, Fall 2017</td>
    <td>Joey Braspenning, Spring 2017</td>
  </tr>
  <tr>
    <td></td>
    <td>Tjerk Benschop, Summer 2017</td>
    <td>Margot Leemker, Spring 2017</td>
  </tr>
  <tr>
    <td></td>
    <td>Oliver Ostojic, Spring 2016</td>
    <td>Sietske Lensen, Spring 2017</td>
  </tr>
  <tr>
    <td></td>
    <td>Farshaad Hoeseni, Fall 2015</td>
    <td>Alexander Vanstone, Spring 2016</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Tjerk Benschop, Spring 2016</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Arjo Andringa, Spring 2016</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Daniëlle van Klink, Spring 2016</td>
  </tr>
</table> -->

<!-- 
## Administrative Support
<a href="mailto:Rijsewijk@Physics.LeidenUniv.nl">Ellie van Rijsewijk</a> is helping us (and other groups) with administration.
 -->





