$(document).ready(function(){

	$('a[href="#"]').attr('href', 'javascript:void(0)');	

	$('.item-box .item a:first').addClass('active');
	$('.photos:first').show();
	$('.item-box .item a').click(function(e){
		e.preventDefault();
		if(!$(this).hasClass('active')){
			$('.item-box .item a').removeClass('active');
			$(this).addClass('active');
			$('.photos').hide();
			var e=$(this).attr('id');
			$('.photos.'+e).fadeIn();
		}
	});

	var width = (parseInt($('.item-box .item').outerWidth() + parseInt($('.item-box .item').css('margin-right')))) * $('.item-box .item').length; 
	$('.carousel-box').css('width', width);


	var windowwidth = $(window).width();
	if( windowwidth > 540 ){
		var numImages = 3;
	} else if( windowwidth > 420 ){
		var numImages = 2;
	}
	var count = ($('.item-box .item').length / numImages) + 1;

	if( windowwidth <= 420 ){
		var numImages = 1;
		var count = ($('.item-box .item').length - numImages);
	}
	
	var padding = 4;

	var ident = 0;
	var item = (padding) + ($('.item-box .item').outerWidth() * 1);

	$('.next').click(function(){
		if (ident < count) {
			ident ++;
			$('.item-box').animate({
				'margin-left': '-=' + item + 'px'
			}, '500');
		}
	});

	$('.prev').click(function(){
		if (ident >= 1) {
			ident --;
			$('.item-box').animate({
				'margin-left': '+=' + item + 'px'
			}, '500');
		}
	});

	var slideHeight = $('.slider ul .slide').height();
	$('.slider ul').css('height', slideHeight);

	$('.photos figure img').click(function(){
		$('.overlay').addClass('visible');
		$('.popup').addClass('visible');
		$('.slider .slide:first').addClass('current');
		$('.dot-box .dot:first').addClass('active');
	});


	$('.closePopup').click(function(){
		$('.overlay').removeClass('visible');
		$('.slider .slide').removeClass('current');
		$('.dot-box .dot').removeClass('active');
	});	
});

$(window).resize(function(){
	var slideHeight2 = $('.slider ul .slide').height();
	$('.slider ul').css('height', slideHeight2);
});

var current = 0;
function dots(n){
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < dots.length; i++) {
		if (dots[i].className.includes("active")) {
			dots[i].className = dots[i].className.replace("active", "");
			break;
		}
	}
	dots[n].className += " active";
}

function show(n){
	var slides = document.getElementsByClassName('slide');
	for (i = 0; i < slides.length; i++) {
		if (slides[i].className.includes('current')) {
			slides[i].className = slides[i].className.replace("current", "");
			break;
		}
	}
	current = n;
	slides[n].className += " current";
	dots(n);
}