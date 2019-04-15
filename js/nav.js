	$('#hamburger').click(function() {
			// $()
			$('ul li').toggle('slow');
		})

		window.addEventListener('resize', function() {
			console.log($('nav').css('display'))
			if ($(window).innerWidth() > 780 && $('nav li').attr('style') == 'display: none;') {
				// location.reload()
				$('ul li').toggle();
				// $('nav li').attr('style', '')
			}
		})
