$(document).ready(function() {
	// var currentPage;
	$('#wrapper').fullpage({
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		verticalCentered: true,
		onLeave: function(origin, destination, direction){
			func(destination.index);
		}
	});

func(0);

	function func(index){
		if(index == 0) {
			$('.product > h1').addClass('heading');
		} else {
			$('.product > h1').removeClass('heading');
		}

		if(index == 1) {
			$('.history-img').addClass('leftSlide');
			$('.history-text').addClass('rightSlide');
		} else {
			$('.history-img').removeClass('leftSlide');
			$('.history-text').removeClass('rightSlide');
		}

		if(index == 3) {
			$('.social').addClass('onSection');
		} else {
			$('.social').removeClass('onSection');
		}
	}

});