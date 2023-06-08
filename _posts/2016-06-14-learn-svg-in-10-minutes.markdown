---
layout: post
title: Learn SVG basics in 10 minutes
published: false
description: Understand what is an SVG, how to make one and what are its components
keywords: svg, learn, animation, html, css, newbie, part, rectangle, circle, polyline, polygon
tags: tech
disqus:	y
share: y
---

**Audience**

Those looking for a quick tutorial on SVG, to get a clear understanding of its basics. You should know a bit of HTML and CSS to understand this article.

**What is SVG**

SVG is Scalable Vector Graphics. It was introduced in 1999 by W3C.


**Why use SVG**

+	SVG is basically a vector image. Vector images are visually sharper compared to raster images (PNG, JPEG).
+	They are XML-compatible.
+	Vector images are independent of the resolution of the screen. 
+	You can add style using CSS.
+	You can make it interactive using Javascript.
+	The image is created using lines of code which means, compared to raster image formats, the size is very low. This saves bandwidth.

**Learn by Example**

Open a browser and editor and practice the following code. You can easily figure out most of it. All the code rests inside <code>svg</code> tag similar to XML. It needs a namespace and a version. Inside <code>svg</code> tag is where the magic happens. 


<center>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
  <rect x="25" y="30" width="200" height="150" fill="lime" stroke-width="4" stroke="pink" />
</svg>
</center>

	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="200">
		<rect x="25" y="30" width="200" height="150" fill="lime" stroke-width="4" stroke="pink" />
	</svg>

<code>(x,y)</code> are the coordinates of the top left corner. <code>width</code> and <code>height</code> are the dimensions of the rectangle. The other attributes <code>fill</code>, <code>stroke</code> and <code>stroke-width</code> are responsible for the color and thickness of the figure. 

<center>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
  <circle cx="125" cy="100" r="75" fill="orange" />
</svg>
</center>

	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="200">
	  <circle cx="125" cy="100" r="75" fill="orange" />
	</svg>

<code>(cx,xy)</code> is the center of the circle and <code>r</code> is its radius.

<center>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
	<polyline points="50,150 50,188 188,188 188,100" stroke="red" stroke-width="4" fill="none" />
</svg>
</center>

	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="200">
	  <polyline points="50,150 50,188 188,188 188,100" stroke="red" stroke-width="4" fill="none" />
	</svg>

This polyline has four coordinates. Each of the coordinates are separated by spaces. 

<center>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
  <line x1="50" y1="50" x2="180" y2="180" stroke="blue" stroke-width="4" />
</svg>
</center>

	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="200">
	  <line x1="50" y1="50" x2="180" y2="180" stroke="blue" stroke-width="4" />
	</svg>

<code>(x1,y1)</code> and <code>(x2,y2)</code> are the two end points of the line.

<center>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
  <polygon points="50,50  150,50  150,150" style="stroke:#aaa000; fill:#712ae;"/>
</svg>
</center>

	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
	  <polygon points="50,50  150,50  150,150" style="stroke:#aaa000; fill:#712ae;"/>
	</svg>

This is similar to polyline, except that the enclosed area is filled. 

Now its time to play with the <code>path</code> tag. You use this to draw advanced shapes. (The below code was developed by [Peter Collingridge](http://www.petercollingridge.co.uk/)) 
<center><embed src="http://www.petercollingridge.co.uk/sites/files/peter/path_cube_curve_tutorial.svg" /></center>

Here you can play around with your mouse and see how the path is getting changed. You can draw many curves using the <code>path</code> tag. To know more on that you can read this [documentation](https://www.w3.org/TR/SVG/paths.html#PathElement).

**End**

That should not have taken more than 10 minutes! If you want to learn a bit more, click [here](http://tutorials.jenkov.com/svg/). It is an amazing tutorial by Jenkov that explains things in a more detailed manner. 