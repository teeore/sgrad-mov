feedUrl = "http://www.sonypictures.com/previews/movies/carrie.xml";
clipName = '5348';

$(document).ready(function(){
	showGallery();
	$('#movie-trailer').bind('click', function(e){
		e.preventDefault();
		openOverlay(clipName);
	});
	$('#about-movie').bind('click', function(e){
		e.preventDefault();
		$("#synopsis").show();
		sCode.trackPageView('about');
	});
	
	$('#synopsis-close').bind('click', function(e){
		e.preventDefault();
		$("#synopsis").hide();
	});
});

function showGallery() {
	var galleryImages = ['gallery-photo1', 'gallery-photo2', 'gallery-photo3', 'gallery-photo4', 'gallery-photo5', 'gallery-photo6', 'gallery-photo7', 'gallery-photo8', 'gallery-photo9', 'gallery-photo10', 'gallery-photo11', 'gallery-photo12', 'gallery-photo13'];
	$('body').append('<div id="gallery-overlay"></div>');
	$('#gallery-overlay').append('<a href="#" id="close"></a><a href="#" id="left"></a><div id="gallery-window"><div id="gallery-belt"></div></div><a href="#" id="right"></a>');
	$.each(galleryImages, function(index, item) {
	    $('#gallery-belt').append('<img src="images/'+item+'.jpg" alt="'+item+'" />');
	});
	var docHeight = $(document).height();
	var winHeight = $(window).height();
	var galMidPos = ((winHeight/2)-250);
	var btnMidPos = ((winHeight/2)-64);
	var clsMidPos = ((winHeight/2)-260);
	$('#gallery-overlay').css('height',docHeight);
	$('#gallery-window').css('top', galMidPos);
	$('#left, #right').css('top', btnMidPos);
	$('#close').css('top', clsMidPos);

	$('#movie-gallery').bind('click', function(e){
		e.preventDefault();
		$("#gallery-overlay").fadeIn();
		sCode.trackPageView('gallery');
	});
	$('a#close').bind('click', function(e){
		e.preventDefault();
		$('#gallery-overlay').fadeOut();
	});

	var position = 1;
	$('a#left').click(function(e){
		e.preventDefault();
		if(position > 1){
			$('#gallery-belt').animate({left: '+=810'});
			position--;
		}
	});
	$('a#right').click(function(e){
		e.preventDefault();
		if(position < 13){
			$('#gallery-belt').animate({left: '-=810'});
			position++;
		}
	});
}
	
	
	



