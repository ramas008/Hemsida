	// Pressing a tag link scroll to top smooth
	$(document).ready(function(){
	  $("a").on('click', function(event) {

	    if (this.hash !== "") {
	      event.preventDefault();

	      var hash = this.hash;
	      // 200 miliseconds
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 200, function(){
	        window.location.hash = hash;
	      });
	    } 
	  });
	});