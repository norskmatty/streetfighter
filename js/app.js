$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate( 
			{'left': '1020px'},
			800,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
		$('.hulk-ryu-ow').delay(790).queue(function(n) {
			$(this).show(); n();
		});
		$('.hulk-ryu-ow').delay(1000).queue(function(n) {
			$(this).hide(); n();
		});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		// ryu goes back to his ready position
	});

	$('.hulk-ryu').mouseenter(function() {
		$('.hulk-ryu-still').hide();
		$('.hulk-ryu-ready').show();
	})
	.mouseleave(function() {
		$('.hulk-ryu-still').show();
		$('.hulk-ryu-ready').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu-throwing').show();
		$('.hulk-hadouken').finish().show().animate( 
			{'left': '335px'},
			800,
			function() {
				$(this).hide();
				$(this).css('left', '865px');
			}
		);
		$('.ryu-ow').delay(790).queue(function(n) {
			$(this).show(); n();
		});
		$('.ryu-ow').delay(1000).queue(function(n) {
			$(this).hide(); n();
		});
	})
	.mouseup(function() {
		$('.hulk-ryu-throwing').hide();
		$('.hulk-ryu-ready').show();
		// ryu goes back to his ready position
	});

	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}	
	})
	.keyup(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});

	$(document).keydown(function(e) {
		if (e.keyCode == 89) {
			$('.hulk-ryu-still').hide();
			$('.hulk-ryu-ready').hide();
			$('.hulk-ryu-cool').show();
		}	
	})
	.keyup(function(e) {
		if (e.keyCode == 89) {
			$('.hulk-ryu-cool').hide();
			$('.hulk-ryu-still').show();
		}
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}