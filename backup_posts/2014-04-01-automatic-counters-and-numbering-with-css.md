---
layout: post
title: Automatic Counters and Numbering with CSS
date: 2014-04-01
comments: true
category: blog
tags:
- CSS
author: David Paulsson
---

Here’s  a little known CSS (that actually existed since CSS 2.1) feature: **Automatic counters and numbering**.

This is a part of generated content spec, just like when you do `p.note:before {content: "Note: "}` or whatever. But you can also use it to set up counters that you can reset and increment as you go along. It’s pretty old news for many of you I can imagine, but maybe you’re like me and had completely missed this. So, yeah.

## Use cases

So, why exactly is this cool?

### Chapters and sections

Well, how about automatic marking of chapters and sections? *(You can swicth between HTML/SCSS/Result below)*

<p data-height="440" data-theme-id="0" data-slug-hash="iDEHo" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/davidpaulsson/pen/iDEHo/'>iDEHo</a> by David Paulsson (<a href='http://codepen.io/davidpaulsson'>@davidpaulsson</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

## Style ordered lists

I recenty was in [a project where we wanted to display a top five list of recepies](http://www.recept.nu/). So, we used the good ol' `ol` _(heh)_ tag as you'd suspect. The problem is: you cant really style the numbers in an `ol` list. So this

{% highlight html %}
<ol>
  <li>Lorem.</li>
  <li>Sunt!</li>
  <li>In.</li>
  <li>Temporibus!</li>
  <li>Cumque.</li>
  <li>Itaque.</li>
  <li>Praesentium!</li>
  <li>Optio?</li>
  <li>Tempora.</li>
  <li>Odit?</li>
</ol>
{% endhighlight %}

just renderers as this

<ol>
  <li>Lorem.</li>
  <li>Sunt!</li>
  <li>In.</li>
  <li>Temporibus!</li>
  <li>Cumque.</li>
  <li>Itaque.</li>
  <li>Praesentium!</li>
  <li>Optio?</li>
  <li>Tempora.</li>
  <li>Odit?</li>
</ol>

_Pretty boring, right?_

So this is actually pretty hard to style. All you really have at your disposal is `list-style`, and that won’t help you much unless you want to change the number into a disc or something like that. (Everything you can do: `list-style: <list-style-type> <list-style-position> <list-style-image>;`) But here’s the trick: **counters!**

So using the same technique as above, we can hide the `ol` default numbering and just use a counter instead!

{% highlight scss %}
ol {
  counter-reset: my-counter; // Set up a counter

  li {
    overflow: hidden; // Hide the default ol li numbers

    &:before {
      // Add our counter
      content: counter(my-counter);
      counter-increment: my-counter;

      // Your awesome CSS
    }
  }
}
{% endhighlight %}

<p data-height="268" data-theme-id="0" data-slug-hash="Bcvyf" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/davidpaulsson/pen/Bcvyf/'>Style ol numbers with css</a> by David Paulsson (<a href='http://codepen.io/davidpaulsson'>@davidpaulsson</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

### Note

Now these code examples won’t win design awards, but that’s not the meaning either. Now: go wild!
