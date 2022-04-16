---
layout: single.njk
pagination:
  data: projects
  size: 1
  alias: post
  addAllPagesToCollections: true
eleventyComputed:
  title: "{{ post.title }}"
  excerpt: "{{post.excerpt}}"
  author: "{{post.author}}"
  image: "{{post.imgURL}}"
  publishedAt: "{{post.publishedAt}}"
ogtype: article
permalink: "/{{ post.slug }}/index.html"
---
{{post.body}}
