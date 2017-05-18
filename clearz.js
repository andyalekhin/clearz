$.fn.clearz = function(options) {
	$(this).each(function() {
		var defaults = {
			position: "right"
		};
		var settings = $.extend(defaults, options);

		$(this).wrap("<div class='wrapper'></div>");
		$(this).after($("<img class='cross'>"));

		$(this).keyup(function() {
			if ($(this).val().length != 0) {
				$(this).next().show();
			} else {
				$(this).next().hide();
			}
		});

		$('.cross').on("click", function() {
			$(this).prev().val('').next().hide();
		});

		function positionCross(pos) {
			switch(pos) {
				case 'left':
					$('.cross').css("left", "5px").prev().css("padding-left", "28px");
					break;
				case 'right':
					$('.cross').css("right", "5px").prev().css("padding-right", "28px");
					break;
			}
		}
		positionCross.bind(this, settings.position)();
	});
};