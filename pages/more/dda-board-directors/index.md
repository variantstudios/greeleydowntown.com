---
layout: page
title: DDA Board of Directors
description: 'Downtown Development Authority (DDA) Board of Directors meetings take place the 3rd Thursday of each month at 7:30 am. These meetings are held in the conference room on the 3rd Floor of the Chase Tower (822 7th Street) and are open to the public.'
meeting_minutes:
  - title: "April 2016 DDA Minutes"
    pdf_path: "/assets/pdfs/ddameetingminutes-4-21-16.pdf"
  - title: "March 2016 DDA Minutes"
    pdf_path: "/assets/pdfs/ddameetingminutes-3-17-16.pdf"
  - title: "February 2016 DDA Minutes"
    pdf_path: "/assets/pdfs/ddameetingminutes-2-18-16.pdf"
header_image_path: 'https://unsplash.it/1400/600/?random'
sub-nav: more
permalink: /dda-board-directors/
---


Downtown Development Authority (DDA) Board of Directors meetings take place the 3rd Thursday of each month at 7:30 am. These meetings are held in the conference room on the 3rd Floor of the Chase Tower (822 7th Street) and are open to the public.

![DDA Board of Directors](/uploads/versions/ddaboard---x----1200-512x---.jpg)

### Board of Directors

<div class="staff">
{% for staff in site.data.staff %}
<div class="staff-member">
<img alt="{{ staff.name }}" src="{{ staff.image_path }}" />
<div class="staff-title">
<h2 class="staff-name">{{ staff.name }}</h2>
<h3 class="staff-position">{{ staff.position }}</h3></div>
<div class="staff-bio">{{ staff.bio }}</div>
</div>
{% endfor %}
</div>