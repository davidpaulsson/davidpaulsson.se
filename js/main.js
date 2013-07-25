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
	})

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