---
layout: single.njk
pagination:
  data: sanity
  size: 1
  alias: post
  addAllPagesToCollections: true
eleventyComputed:
  title: "{{ post.title }}"
  excerpt: "{{post.excerpt}}"
  author: "{{post.author}}"
  image: "{{post.imgURL}}"
ogtype: article
permalink: "/{{ post.slug }}/index.html"
---

{{post.body}}
