	
	// onclick handler for all portfolio buttons
	$("#content a").on('click', function() {
		var MyClass = this.className;
		var loadPath = "Projects/" + MyClass + ".html";
		$(".rightContentPortfolio").removeClass("animated fadeInUp");
		$(".rightContentPortfolio").addClass("animated fadeOutDown");
		$('.rightContentPortfolio').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			var className = $('.rightContentPortfolio').attr('class');
			if(className == "rightContentPortfolio animated fadeOutDown")
			{
				$(".rightContentPortfolio").removeClass("animated fadeOutDown");
				$(".rightContentPortfolio").load(loadPath);
				$(".rightContentPortfolio").addClass("animated fadeInUp");
			}	
		});
	
	});
