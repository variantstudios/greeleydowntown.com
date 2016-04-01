---
layout: page
title: "DDA Board Directors"
header_image_path: 'https://unsplash.it/1400/600/?random' 
permalink: /about-us/dda-board-directors/
---

Downtown Development Authority (DDA) Board of Directors meetings take place the 3rd Thursday of each month at 7:30 am. These meetings are held in the conference room on the 3rd Floor of the Chase Tower (822 7th Street) and are open to the public.

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