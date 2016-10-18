
	var width = 30;
	var score = 0;
	var timer = 0;

$(document).ready(function() {
	// CREER 5 LIGNES AVEC 5 CASES 
	$(".app").append("<div class='table1 row'></div>");		
	$(".app").append("<div class='table2 row'></div>");
	$(".app").append("<div class='table3 row'></div>");
	$(".app").append("<div class='table4 row'></div>");
	$(".app").append("<div class='table5 row'></div>");
	for(var i=0; i<25; i++) {
		if (i<5) {
			$(".table1").append("<div id='col-"+i+"' class='col s2 case' data-libre='0	'></div>");		
		}
		if (i> 4 && i<10) {
			$(".table2").append("<div id='col-"+i+"' class='col s2 case' data-libre='0'></div>");		
		}
		if (i> 9 && i<15) {
			$(".table3").append("<div id='col-"+i+"' class='col s2 case' data-libre='0'></div>");		
		}
		if (i> 14 && i<20) {
			$(".table4").append("<div id='col-"+i+"' class='col s2 case' data-libre='0'></div>");		
		}		
		if (i> 19 && i<25) {
			$(".table5").append("<div id='col-"+i+"' class='col s2 case' data-libre='0'></div>");		
		}			
		
	}
	
var j=0;
	
	while( j < 15 ) {
		var id = Math.floor((Math.random() * 25) + 1); // GENERE UN ID ALEATOIREMENT 
		if ( $("#col-"+id).data('libre') == 0) {
			$("#col-"+id).append("<div class='rond grandrond rond"+id+"' id='gr"+id+"' data-tag='"+id+"'><div class='petitrond rond rond"+id+"' data-start='5000' data-tag='"+id+"' data-explode='0' ></div></div>");	
			j++;
			$("#col-"+id).data('libre', '1'); // CASE NON VIDE
		}
	}
	
	$(".app").append("<button class='play'>Jouer</button>");
	$(".app").append("Score :<span class='score'>"+score+"</span>");
	$(".play").click( function() {
		start();
		$(this).hide();
	});
}); // FIN DE L INITIATION DU JEU 


function start() {
	console.log( "start!" );
	setInterval( check , 200 ); /* Tous les 200ms */
	$('.grandrond').click(  function() {
		$(this).find(".petitrond").data('explode', "1");
		eclate( $(this).data('tag'), width) ;
	});	
} // LANCEMENT DU JEU 

function check () {
		
	$(".petitrond").each(function() {
		if ($(this).data('start') <= timer && $(this).data('explode') != '1') { /* Si le temps du lancement du rond est passé ET que la bulle n'a pas déjà éclaté, on lance la fonction */
			width = $(this).width() + 1;
			if (width >= 70 ) {
				// La bulle éclate naturellement
				$(this).data('explode', "1");
				eclate( $(this).data('tag'), -70);
			} else {
				$(this).width( width );
				$(this).height( width );
			}
		}
	});

	timer += 200;
}



function eclate(tag, points) {
	// Lorsqu'une bulle éclate :
	// On comptabilise les points. 
	score += points;
	// On masque la bulle
	$(".rond"+tag).hide();
	$(".score").text(score);
}