(function ($) {
	"use strict";

    jQuery(document).ready(function($){

	    
     	$(".homepage-slides").owlCarousel({
    		items: 1,
    		nav: true,
    		dots: true,
    		loop: true,
    		autoplay: true,
           navText: ["<i class='fa fa-angle-left'</i>", "<i class='fa fa-angle-right'</i>"],
    	});
        
         
     	$(".homepage-slides").on("translate.owl.carousel", function(){
			$(".home-silde-contant h1").removeClass("animated fadeInLeft")
			$(".home-silde-contant p").removeClass("animated fadeInRight")
    		
    	});
        
			  
     	$(".homepage-slides").on("translated.owl.carousel", function(){
			$(".home-silde-contant h1").addClass("animated fadeInLeft")
			$(".home-silde-contant p").addClass("animated fadeInRight")
    		
    	});
        
        
        
		
		
		$(".video-icon").magnificPopup({
         type: 'video',
       
       });
		
		
   
		
		 new WOW().init();

        
        $(window).scroll(function(){
		        if ($(this).scrollTop() > 100) {
		            $('.scrollToTop').fadeIn();
		        } else {
		            $('.scrollToTop').fadeOut();
		        }
		    });

		    //Click event to scroll to top
		    $('.scrollToTop').on('click', function(){
		        $('html, body').animate({scrollTop : 0},800);
		        return false;
		    });

        

    });





}(jQuery));	