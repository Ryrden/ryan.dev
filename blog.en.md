---
title: Blog
lang: en
permalink: /blog/
---

# Latest posts

{% for post in site.posts %}
  {% if post.lang == site.active_lang %}
  <article>
    <header>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    </header>
    <p>
      <time datetime="{{ post.date | date_to_xmlschema }}">
        {{ post.date | date_to_long_string: "ordinal" }}
      </time>
    </p>
    <p>{{ post.description | truncatewords: 20 }}</p>
  </article>
  {% endif %}
{% else %}
<div style="text-align:center;">
 <h1 style="font-size: 4em;">404</h1>

 <h2><strong>Página em construção</strong></h2>
 <p>Em breve ela estará pronta</p>
    <p>Ainda não escrevi nenhum artigo, mas o primeiro já está em produção!"</p>
</div>
{% endfor %}
