		
		var audio1;
		audio1 = new Audio(); 
		audio1.src ="assets/media/ouch.mp3";;
		audio1.pause(); 
		audio1.volume=0.2;

		var audio2;
		audio2 = new Audio(); 
		audio2.src ="assets/media/baleine.mp3";;
		audio2.pause(); 
		audio2.volume=0.2;

		$('#ouch').click(function(){
			if(audio1.paused) {
				audio1.play();
			}
		});

		$('#baleine').click(function(){
			if(audio2.paused) {
				audio2.play();
			}
		});


		$(document).ready(function() {

			$('#buisson').click(function() {
			    $('.box2').fadeIn('slow').delay(6000).fadeOut('slow');
			  });

			});