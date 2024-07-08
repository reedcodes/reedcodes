---
title: Blog
permalink: "blog{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber + 1 }}{% endif %}/index.html"
layout: blog
eleventyNavigation:
  key: Blog
  order: 2
pagination:
  data: collections.postList
  size: 10
---
