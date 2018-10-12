$(function(){

	let blockColor = $('.colour');

	function chooseColor(){
		
		let productData = $(this).attr('data-img');
		blockColor.removeClass('active-thumb');
		$(this).addClass("active-thumb");
		$('.overview-img').addClass('effect').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd", function(){
			$('.overview-img').removeClass('effect');
		});
		$(".overview-img").attr("src", productData);
	}


	blockColor.on('click', chooseColor);

	let size =  $('#viewSize'),
		range = $('#sizeRange');


	
	function  changeSize() {
		$('#viewSize').text(range.val());
	}

	range.on('change', changeSize);

});


