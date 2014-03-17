---
layout: post
title: "Style Ordered Lists"
comments: true
date: 2013-12-17
description: Automatic counters and numbering.
---

Here’s  a little known CSS (that actually existed since CSS 2.1) feature: **Automatic counters and numbering**.

This is a part of generated content spec, like when you do `p.note:before { content: "Note: " }` or similar.

I’ve seen it before, being used for chapter markup, so for example [this would generate this layout (demo)](länk).

{% highlight css %}
body {
  counter-reset: chapter; /* Create a chapter counter scope */
}

h1 {
  counter-reset: section; /* Set section to 0 */

  &:before {
    content: "Chapter " counter(chapter) ". ";
    counter-increment: chapter; /* Add 1 to chapter */	
  }
}

h2 {
  &:before {
    content: counter(chapter) "." counter(section) " ";
    counter-increment: section;
  }
}
{% endhighlight %}

## What about those ordered lists

But here’s a little trick you can use to style ordered list numbers.

{% highlight css %}
ol {
  clear: both;
  margin: 0 5% 5% 0;
  counter-reset: recept-counter;

  li {
    @extend .largeprint;
    padding: 1em 0;
    border-bottom: 1px dotted $secondary;
    overflow: hidden;
    color: $secondary;

    &:before {
      @extend .alpha;
      content: counter(recept-counter);
      counter-increment: recept-counter;
      vertical-align: top;
    }
}
{% endhighlight %}

blabla.