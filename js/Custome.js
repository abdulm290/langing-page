
// wow active code
 new WOW().init();
// collapse 
var coll = document.getElementsByClassName("collapsible");
			var i;

			for (i = 0; i < coll.length; i++) {
			  coll[i].addEventListener("click", function() {
			    this.classList.toggle("active");
			    var content = this.nextElementSibling;
			    if (content.style.display === "block") {
			      content.style.display = "none";
			    } else {
			      content.style.display = "block";
			    }
			  });
			}
// collapse
// <!--screenshot slider  -->
			    var swiper = new Swiper('.swiper-container', {
		      effect: 'coverflow',
		      grabCursor: true,
		      centeredSlides: true,
		      slidesPerView: 'auto',
		      coverflowEffect: {
		        rotate: 0,
		        stretch: 0,
		        depth: 50,
		        modifier: .5,
		        slideShadows : true,
		      },
		      pagination: {
		        el: '.swiper-pagination',
		      },
		    });


  		// <!-- collaps -->
// <!-- counter -->

$('.counter').counterUp({
delay: 10,
time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');


//smoth js
$(document).ready(function(){ $('nav li a').click(function() { if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) { var $target = $(this.hash); $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']'); if ($target.length) { var targetOffset = $target.offset().top; $('html,body') .animate({scrollTop: targetOffset}, 1000); return false; } } }); });