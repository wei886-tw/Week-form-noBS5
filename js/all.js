$(function () {
	$(".emir").click(function(event) {
		$(".popupOverlay, .popupContent").addClass("active");
	})

	$(".popupOverlay").click(function(){
		$(".popupOverlay").click(function(){;
			$(".popupOverlay, .popupContent").removeClass('active')
		});
	});
});

