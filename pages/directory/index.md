---
layout: page
title: "Directory"
subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
permalink: /directory/
---

<div class="product-items">
  {% for business in site.directory %}
    <div class="product-item">
        <a href="{{ project.permalink }}">
          <div class="product-image">
            <img src="{{ business.images.first.image_path }}" alt="{{ business.title }}">
          </div>
          <h2 class="product-title">{{ business.title }}</h2>
          <h5 class="product-location">{{ business.location }}</h5>
        </a>
    </div>
  {% endfor %}
</div>