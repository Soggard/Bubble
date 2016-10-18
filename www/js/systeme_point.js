
	var width = 30;
	var score = 0;
	var timer = 0;

$(document).ready(function() {
	console.log( "ready!" );
	$(".app").append("<div class='rond grandrond rond1' id='gr1' data-tag='1'><div class='petitrond rond rond1' data-start='5000' data-tag='1' data-explode='0' ></div></div>");
	$(".app").append("<div class='rond grandrond rond2' id='gr2' data-tag='2'><div class='petitrond rond rond2' data-start='3000' data-tag='2' data-explode='0' ></div></div>");
	$(".app").append("<button class='play'>Jouer</button>");
	$(".app").append("Score :<span class='score'>"+score+"</span>");
	$(".play").click( function() {
		start();
		$(this).hide();
	});
});


function start() {
	console.log( "start!" );
	setInterval( check , 200 ); /* Tous les 200ms */
	$('.grandrond').click(  function() {
		$(this).find(".petitrond").data('explode', "1");
		eclate( $(this).data('tag'), width) ;
	});	
}

function check () {
		
		$(".petitrond").each(function() {
			//console.log( "Testing" + $(this).data('tag') );
			if ($(this).data('start') <= timer && $(this).data('explode') != '1') { /* Si le temps du lancement du rond est passé ET que la bulle n'a pas déjà éclaté, on lance la fonction */
				width = $(this).width() + 1;
				if (width >= 70 ) {
						// La bulle éclate naturellement
					$(this).data('explode', "1");
					//console.log( $(this).data('explode') );
					eclate( $(this).data('tag'), -70);
				} else {
					$(this).width( width );
					$(this).height( width );

				}
			}
		});

		timer += 200;
	
		//console.log( "Timer : "+timer );
}



function eclate(tag, points) {
// Lorsqu'une bulle éclate :
	// On comptabilise les points. 
	score += points;
	// On masque la bulle
	$(".rond"+tag).hide();
	console.log( tag +"Paf! " + score );
	$(".score").text(score);
}