---
layout: page
title: "About Us"
subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
permalink: /about-us/
---

<div class="staff">
{% for staff in site.data.staff %}
	<div class="staff-member">
		<img src="{{ staff.image_path }}" alt="{{ staff.name }}">
		<div class="staff-title">
			<h2 class="staff-name">{{ staff.name }}</h2>
			<h3 class="staff-position">{{ staff.position }}</h3>
		</div>
		<div class="staff-bio">{{ staff.bio }}</div>
	</div>
{% endfor %}
</div>