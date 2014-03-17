---
layout: post
title: "Webbdesign och retinaskärmar"
comments: true
date: 2012-06-12
description: Ska vi fortsätta hysterin och göra separata bilder för alla olika enheter eller ska webbutvecklare äntligen börja arbeta med CSS3 och skalbar grafik på webben?
---

[Igår släppte Apple sin nya MacBook Pro](http://www.apple.com/se/macbook-pro/) och äntligen får vi retinaupplösning på våra ”vanliga” skärmar. Fotografer och filmskapare är lyriska, men hur ska vi som jobbar med design på webben anpassa oss för en upplösning på 2880×1800 pixlar på en 15” skärm som ger hela 226.42 ppi?

**Ska vi fortsätta hysterin och göra separata bilder för alla olika enheter eller ska webbutvecklare äntligen börja arbeta med CSS3 och skalbar grafik på webben? Om vi fortsätter att skapa dubbla uppsättningar av våra bilder; ska vi ”straffa” besökare med bra skärmar med längre laddningstider bara för att vi måste ladda ner bilder som är dubbelt så stora?**

## Hur fungerar det rent tekniskt?

Att veta exakt vilken ppi besökaren har på sin skärm är nästan omöjligt. Jag använder till exempel en [DELL U2410](http://www.dustinhome.se/product/5010330369/dell-u2410-ultrasharp-24-wide-tft-black/) som har 1920×1200 pixlar genom 24”. Det ger min skärm 94.34 ppi. Medans min 15” MackBook Pro mid 2010 har en upplösning av 1680×1050 pixlar på 15” vilket ger den skärmen 132.08 ppi (alltså nästan hälften av de nya MacBook Pro-skärmarna som släpptes igår).

Det hela är väldigt rörigt, men alla vi är vana att skapa design för webb i Photoshop med ett dokument som har 72 ppi. Jag gör det, du gör det, alla gör det. Det hela är väldigt krångigt och det är ok, man behöver inte veta exakt hur det fungerar. Men 72 ppi har fungerat hittills, och om skärmen har betydligt högre upplösning än så (till exempel en iPhone 4 eller de nya MacBook Pro-skärmarna) så kommer massor av krångliga algoritmer försöka hitta på nya pixlar med så kallad sub-pixel rendering.

![1) En pixel är en pixel. 2) En pixel kommer ”delas upp” och visas på samma yta, men är i själva verket flera stycken pixlar tack vare högre upplösning.]({{ site.url }}/img//retinaskarm-pixel.png)

Skitkrångligt, strunt samma. Det enda vi behöver bry oss om är; hur får vi vår design att se bra ut oavsett vilken skärm besökaren har?

**Låt oss generalisera lite nu.** En pixel på en vanlig skärm visas upp med pixeltätheten 72 ppi, samma bild på en retinaskärm kommer att visas upp med en pixeltäthet 326 ppi. Det är alltså betydligt fler pixlar på samma yta. Om vi visar upp en skärmdump från en iPhone eller skapar design för en iPhone behöver vi alltså en rityta som är 960×640 pixlar i 72 ppi.

Ett sätt att anpassa oss är att sluta designa med exakt pixelkontroll. Dagarna när vi kan det är snart borta och det är lika bra att försöka anpassa oss så gott vi kan.

## Skapa design med CSS3

Med CSS kan vi komma väldigt långt med många element. Vi kan göra betydligt mer än att sätta runda hörn nu för tiden. Dessutom finns det många guider, plugins och fristående program som hjälper oss att återskapa det vi hittat på i Photoshop.

Till exempel finns det spännande webbprojekt som Layer Styles där du i ett bekant gränssnitt kan skapa egen CSS.

Till vardags använder jag själv ett litet program som heter Gradient för att skapa gradienter som fungerar bra på webben. Och igår köpte jag en Photoshop-plugin som heter CSS Hat som kan skapa CSS utifrån effektinställningarna på dina lager.

![Samma knapp på en retinaskärm. Den övre är CSS och den undre är pixlar. Bättre upplösning = sämre knapp. Du kan själv surfa till http://dev.davidpaulsson.se/csshat/ om du vill inspektera och titta vilken kod som CSS Hat trycker ut.]({{ site.url }}/img//csshat-test.png)

## Ikoner som typsnitt

Det har släppts många riktigt bra ikon-typsnitt på senaste tid, de mest nämnvärda är [Font Awesome](http://fortawesome.github.com/Font-Awesome/), [Foundation Icons](http://www.zurb.com/playground/foundation-icons), [Web Symbols Typeface](http://www.justbenicestudio.com/studio/websymbols/) och [Entypo](http://entypo.com/).

## SVG-grafik på webben

Scalable Vector Graphics eller SVG är något som snart kommer kännas helt naturligt. Personligen är jag inte tillräckligt insatt för att skriva om det (än) men ett tag sedan var det [en bra artikel på Smashing Magazine](http://coding.smashingmagazine.com/2012/01/16/resolution-independence-with-svg/) som jag rekommenderar er att läsa.

## Ladda separata bilder för skärmar med högre upplösning

![retina.js]({{ site.url }}/img//retinajs.png)

Ett snabbhack som kommer att fungera ett par år till är också att helt enkelt ladda större bilder för besökare som använder skärmar med bättre upplösning. Till exempel [Retina.js](http://retinajs.com/) som kommer att leta efter samma bild fast med ett tillägg i slutet och ladda de bilderna istället om användarens skärm stödjer det. Så då kan du skapa två bilder till exempel bild.png och bild@2x.png och be den hålla utkik för filtillägget @2x. Men det går bra att be den kika efter vad som helst, så du kan [sätta upp egna storlekar](http://codex.wordpress.org/Function_Reference/add_image_size) och låta WordPress-egna bildskalning skapa separata bilder för retinastärmar. Om WordPress då har skapat bild-150-150.png så kan du byta ut den till bild-300-300.png.

## Vad tror ni?

Hur tycker ni att man ska tackla alla dessa olika skärmstorlekar och upplösningar? Vad har ni får smarta program, webbsidor och tips för att arbeta med responsiv webbdesign och upplösnings-oberoende design på webben? Dela gärna med er nedan.

### Uppdateringar:

1. La till Entypo i listan för ikon-typsnitt. Tack [@danielbruce_](http://twitter.com/#!/danielbruce_) för tipset!
2. [Här är en skärmdump från en ny MacBook Pro](http://cl.ly/0m0D3i032B282T0m3j29/o) som visar precis hur många pixlar som får plats på dess 15″ skärm.
3. [@Marlun](https://twitter.com/#!/Marlun) tipsar om om en bra resurs för SVG-ikoner, [The Noun Project](http://thenounproject.com/). Tack Martin!
