$(document).ready(function () {
	Waves.attach('.btn, .btn-floating', ['waves-light']);
	// Waves.attach('.view .mask', ['waves-light']);
	Waves.attach('.waves-light', ['waves-light']);
	Waves.attach('.navbar-nav a, .nav-icons li a, .navbar form, .nav-tabs .nav-item', ['waves-light']);
	Waves.attach('.navbar-brand', ['waves-light']);
	Waves.attach('.pager li a', ['waves-light']);
	Waves.attach('.pagination .page-item .page-link', ['waves-effect']);
	Waves.init();//Preloading script
});

new WOW().init();

$('.jarallax').jarallax();

$(window).scroll(function(){
  parallax();
})

function parallax() {
  var wScroll = $(window).scrollTop();

  $('.parallax--box').css('top', 
  (wScroll*0.02)+'em')
}



