---
layout: post
title: "Teckenstorlek med px, %, em eller&nbsp;rem?"
comments: true
tags:
- Type
- REM
date: 2012-05-18
description: Jag tänkte i det här inlägget försöka gå igenom skillnaderna, styrkorna och nackdelarna med de olika sätt man kan sätta teckenstorlek på webben med.
---

Att sätta rätt teckenstorlek på webben kan vara krångligt.  Speciellt eftersom det finns så många skolor som alla berättar varför just deras sätt är bäst. Jag tänkte i det här inlägget försöka gå igenom skillnaderna, styrkorna och nackdelarna med de olika sätt man kan sätta teckenstorlek på webben med.

Generellt så gäller följande regel: **1em = 12pt = 16px = 100%**.

## px

Den lättaste lösningen är att kopiera samma teckenstorlek som förlagan i Photoshop (är teckenstorleken 12 pt så motsvarar det 16 px i vår CSS (vi skriver aldrig pt i CSS, men om det senare)). Men detta har visat sig dåligt då användaren inte kan använda textförstoring i webbläsaren utan måste zooma in hela webbsidan.

Att skriva teckenstorleken i px är det absolut bästa sättet om man vill vara riktigt pixelexakt med sin design utifrån förlagan. 12 px är helt enkelt 12 pixlar.

<figure class="caption caption--right">
  <img data-src="/img/12px.png" alt="Text som är satt till 12px med CSS är 12 pixlar hög.">
  <figcaption>Text som är satt till 12px med CSS är 12 pixlar hög.</figcaption>
</figure>

Att sätta text med pixlar har som sagt ett rätt dåligt rykte bland webbutvecklare och tillgänglighetsexperter då text som angetts i pixlar inte kan skalas upp/zoomas av besökare som använder IE6 eller tidigare. Inte ens i nyare versioner av Internet Explorer fungerar detta, men då finns det i alla fall en zoom-funktion i Internet Explorer som tillåter att användaren zoomar in ALLT innehåll på sidan. Det kan vara värt att tänka på, även om dina 20-någonting-ögon kan läsa text satt till 12px så är det inte alls säkert att dina besökare kan det.

### Hur var det med pt nu då?

Jo, pt, eller punkter, är bara för print-stil! Detta är viktigt att komma ihåg. pt kommer skala bra för storlek när man skriver ut, men måtten på ett papper (dpi, dots per inch) är inte alls samma sak som måtten på en skärm (ppi, pixels per inch). Det är helt enkelt fel att använda pt på webben. Så vi går inte in djupare på det, kom bara ihåg; använd det inte.

## EM

EM är ett gammalt begrepp från [tryckvärlden](http://en.wikipedia.org/wiki/Em_%28typography%29) där ett M angav en full höjd och bredd på typsnittens tecken. Att använda em är kanske det knepigaste sättet i CSS då EM ärver stil från sina föräldrar. Så till exempel; om vi inte har deklarerat en typsnittsstorlek för vårt HTML-dokument så kommer det att vara webbläsarens standard (16px) och då är 1em = 16px. Skulle vi sätta `body { font-size:12px; }` så skulle 1em = 12px, 2em = 24px och 0.5em = 6px.

Det här med att EM ärver storleken från sin förälder blir lite svårt att hålla reda på om man har en djup struktur i sin CSS. Om man har en liknande struktur för t.ex. ett blogginlägg:

{% highlight html %}
<article>
  <header>
    <hgroup>
      <h1>Titel</h1>
      <h2>Undertitel</h2>
    </hgroup>
    <div>
      <p>Publicerat den …</p>
    </div>
  </header>
  <div>
    <!-- Innehåll … -->
  </div>
</article>
{% endhighlight %}

Nu vill vi sätta större text på våra rubriker och mindre text på vår meta-information när inlägget har publicerats. Skriver vi då `header { font-size: 2em; }` och sen `header div { font-size: .5em; }` så kommer vår metainformation bli halva storleken av förälderns element (dvs motsvarigheten till 1em). Alltså inte alls vad vi egentligen ville. Så här gäller det att hålla tungan rätt i mun.

EM kan även användas som en generell måttenhet, så det går utmärkt att skriva t.ex. `margin: 2em 0;`. För att enkelt komma ihåg textstorlekarna och kunna översätta Photoshop till CSS så brukar man ange `html { font-size: 62.5%; }` i sin reset så att 1em = 10px. Då kan man enkelt skriva 1.6em för att få text som är 16px stor (t.ex.).

## %

Procent beter sig ungefär som EM och skalar tillsammans med förälderns element. Jag har läst att procent skalar annorlunda när man använder font-size: smallest eller font-size: largest och liknande, men jag har själv inte lyckats återskapa problemet. Det kan vara ett Internet Explorer-problem (som så mycket annat ;)). Men använder du inte den typen av deklarationer kan du använda % eller EM, helt beroende på vad du själv tycker är enklast.

## REM

REM, eller Root EM, är en hyfsat ny måttenhet som kom med CSS3 och beter sig som EM, men med den stora skillnaden att den inte bryr sig om sin förälder. Med Root så menas den att den bara bryr sig om dokumentets root, alltså HTML-deklarationen som styr teckenstorleken. Så har man angett html { font-size: 62.5%; } i sin CSS så är 1.2rem samma sak som 12px, oavsett vad det omslutande elementet har. Sweet!

### Men; hur ser det ut med bakåtkompabilitet för REM då?

Jo, tyvärr så är det rätt så kasst–men det finns ljuspunkter. Minns ni vad jag skrev om att inte ens nya versioner av Internet Explorer klarar av att skala text utan att zooma hela webbsidan? Ta-daa; från och med Internet Explorer 9 och uppåt klarar man det, men bara med REM. Dock så har inte versioner tidigare än Internet Explorer 9 någon som helst aning om vad REM är så då måste vi lägga in en fallback i vår kod. Men ändå, att skriva en fallback är ett litet pris att betala för att slippa slita sitt hår varje gång man vill ta vara på användarvänlighet och enkelt kunna räkna ut teckenstorleken.

{% highlight css %}
p {
  font-size: 12px; // Fallback för IE8 och tidigare
  font-size: 1.2rem; // Alla andra vettiga webbläsare
}
{% endhighlight %}

## Slutsats

Vill du enkelt kunna ange rätt teckenstorlek utan att bli galen på vägen samtidigt som du försöker omfamna användarvänliga utvecklingsmetoder så använd REM med fallback som px.
