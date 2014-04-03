---
layout: post
title: Look, ma! No Database!
image: jekyllrb.com.jpg
comments: true
category: blog
tags:
- Jekyll
- Design
date: 2013-07-30
description: It’s portfolio redesign season and I’ve gone static.
---

It’s portfolio redesign season and I’ve gone static. I’ve ditched Wordpress in favor of Jekyll. And from now on I’m going to be writing in English only. Ooh, I did not see myself doing this a year ago.

## Ditched WordPress? Wtf dude?

Don’t get me wrong. [WordPress](http://wordpress.org/) is an awesome blog engine and CMS but nothing can really beat a static site in pure HTML. Throw these files onto **any** server and you’ve got a speedy site. According to [Pingdom](https://www.pingdom.com/) my new site now has [just over 600ms load time](http://tools.pingdom.com/fpt/#!/ThiqZ/http://davidpaulsson.se/) and we all know [speed is important](https://developers.google.com/speed/), right?

A static blog engine thingie is something I’ve been wanting to try out and learn for quite some time now and I figured that the only way to actually learn anything was to [JFDI](http://www.urbandictionary.com/define.php?term=JFDI).

Stick around and I’ll try to explain my workflow.

## Who is this Jekyll you speak about?

[Jekyll](http://jekyllrb.com/) is a tool to “transform your plain text into static websites and blogs. No more databases, comment moderation, or pesky updates to install—just your content”.

![jekyllrb.com](/img//jekyllrb.com.jpg)

In other words you create your templates in HTML, write your site content in Markdown (or [Textile](http://textile.sitemonks.com/)) and let Jekyll compile everything to finished `.html` files. And if you’ve got your fancy pants on you throw in some [Liquid](http://wiki.shopify.com/Liquid) templating markup (in your HTML templates) before you let Jekyll spit out your static site ready for deployment.

### How to set it up

You need to be semi comfortable with the command line. If you're thinking that your not, you're in for a surprise; it's actually really simple. I hate the command line. But even I was able to make this step.

#### Install and use Jekyll

In order to run Jekyll you need to have it installed on your computer. So fire up that terminal app and write

{% highlight ruby %}
gem install jekyll
~ $ jekyll new my-awesome-site
~ $ cd my-awesome-site
~/my-awesome-site $ jekyll serve
{% endhighlight %}

Now you can browse to `http://localhost:4000` and view your site! If you’re really cool you type `~/my-awesome-site $ jekyll serve --watch` and Jekyll will recompile your site every time it detects a change. [Here’s a list of all available Jekyll commands](http://jekyllrb.com/docs/usage/).

And yeah, that’s it! As simple as that.

## My redesign toolbox

Programs and scripts to make my life easier. Here is what I use, and now I'm sharing my secret sauce recipe with you.

### Programs

* [Sublime Text 2](http://www.sublimetext.com/2). My weapon of choice when it comes to IDEs. Speedy, customizable and awesome.

![Sublime Text 2](/img//sublimetext.jpg)

* [Codekit](http://incident57.com/codekit/). I use it to compile my SASS to CSS and concatenate and minify my JS.  Yes, you could use Grunt or Jekyll plugins or whatever to do that but Codekit comes with a personal favorite of mine: style injection. This is way better than live reload. And I like to use a GUI whenever I can.
* [ImgOptim](http://imageoptim.com/). Makes your images small(er). Does a better job than Codekit in my opinion.
* [iA Writer](http://www.iawriter.com/). I write posts in Markdown on my phone, tablet or computer. iA Writer makes writing a pleasure. And it synchs all documents seamlessly between my devices through iCloud and Dropbox.

![iA Writer](/img//iawriter.jpg)

* [Photoshop](http://www.photoshop.com/). Yeah, design in the browser and yada yada. I still enjoy the process of mocking things up visually before I start to code. [Here’s a `.psd` file of how this site looked in Photoshop before code](http://davidpaulsson.se/img//davidpaulsson_se-large.psd.zip).

### Services

* [Github](https://github.com/). I push all my source files to Github. Easy to manage, fun to share. Version control and…ye, I don’t need to tell you how awesome it is.
* [FTPloy](http://ftploy.com/). Push to Github (or [Bitbucket](https://bitbucket.org/)) and deploy with FTP/SSH. Did I mention it’s free?

![FTPloy](/img//ftploy.jpg)

### Scripts

* [jQuery](http://jquery.com/). No surprise here.
* [Modernizer](http://modernizr.com/). Detect browser features easy. For example: toss in some SVG graphics and have Modernizer tell you when the browser doesn’t support it by adding `.no-svg` to the body tag. And it also comes with html5shiv built in for those old Internet Explorer versions that doesn’t support the new HTML5 tags.
* [Respond.js](https://github.com/scottjehl/Respond). Only load this for older IE as all it does is to polyfill for min/max-width CSS3 Media Queries for those browsers.
* [Fitvids.js](http://fitvidsjs.com/). Made by [Chris Coyer](http://chriscoyier.net/) and [Dave Rupert](http://daverupert.com/) their explanation says it all *“A lightweight, easy-to-use jQuery plugin for fluid width video embeds”*. [Here’s an expamle post using Fitvids.js](http://davidpaulsson.se/fem-minuter-fran-mitt-brollop/).

I’m sure I’ll add more scripts as I continue to iterate on this site and start to add my case studies but these are the ones for this 1.0 version.

Any thoughts and/or suggestions? Please consider leaving a comment below. If you find a bug or something quirky don’t be shy and [submit an issue on Github](https://github.com/davidpaulsson/davidpaulsson.se).
