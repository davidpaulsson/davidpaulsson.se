// @codekit-prepend "../app/bower_components/jquery/jquery.js"
// @codekit-prepend "../app/bower_components/fitvids/jquery.fitvids.js"
// @codekit-prepend "../app/bower_components/OwlCarousel/owl-carousel/owl.carousel.js"
// @codekit-prepend "jquery.zrssfeed.js"

jQuery(document).ready(function($) {

	//  Find any element starting with a # in the URL
	//  And listen to any click events it fires
	$('a[href^="#"]').click(function() {
		//  Find the target element
		var target = $($(this).attr('href'));

		//  And get its position
		var pos = target.offset(); // fallback to scrolling to top || {left: 0, top: 0};

		//  jQuery will return false if there's no element
		//  and your code will throw errors if it tries to do .offset().left;
		if(pos) {
			//  Scroll the page
			$('html, body').animate({
				scrollTop: pos.top,
				scrollLeft: pos.left
			}, 1000);
		}

		//  Don't let them visit the url, we'll scroll you there
		return false;
	});

	//  Animate
	$('.prelude').addClass('animated fadeInDown');
	$('.about > img').addClass('animated flipInY');

	//  Remove the P tag that surround images
	$('p > img').removeAttr('height').removeAttr('width').unwrap();

	//  Use image alt text as caption
	$('.single-post img').each(function() {
		var caption = $(this).attr('alt');
		$(this).after('<div class="caption">' + caption + '</div>');
	});

	//  Toggle small menu
	$('.menu-toggle').click(function() {
		$('body').toggleClass('show-small-navigation');
	});

	//  Slideshow
	var owl = $('.owl-carousel').data('owlCarousel');
	$('.owl-carousel').owlCarousel({
		items: 3,
		itemsDesktop: [1000,2], //5 items between 1000px and 901px
		itemsDesktopSmall: false, // betweem 900px and 601px
		itemsTablet: false, //2 items between 600 and 0;
		itemsMobile: [479,1] // itemsMobile disabled - inherit from itemsTablet option
	});
	$('.prev').click(function(event) {
		owl.prev();
	});
	$('.next').click(function(event) {
		owl.next();
	});

	//  Fitvids
	$('.single-post').fitVids();

	//  Latest comments
	$('.latest-comments-load').rssfeed('http://davidpaulsson.disqus.com/latest.rss', {
		limit: 5,
		date: false,
		header: false,
		showerror: false
	});

	//  The most important feature on this site
	var kkeys = [], konami = '38,38,40,40,37,39,37,39,66,65';
	$(document).keydown(function(e) {
		kkeys.push( e.keyCode );
		if ( kkeys.toString().indexOf( konami ) >= 0 ){
			$(document).unbind('keydown',arguments.callee);
			$.getScript('http://www.cornify.com/js/cornify.js',function(){
				cornify_add();
				$(document).keydown(cornify_add);
			});
		}
	});

});