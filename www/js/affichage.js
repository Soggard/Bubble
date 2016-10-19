
	var width = [0];
	var scale = [0];
	var score = [0];
	var timer = 0;
	var timer_rapid = 0;
	var score_total = 0;
	var nbBublleDetruite = 0;

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
			var timer_multi = 200 + (2000 * j);
			$("#col-"+id).append("<div class='rond grandrond rond"+id+"' id='gr"+id+"' data-tag='"+id+"'><div class='petitrond rond rond"+id+"' data-start='"+timer_multi+"' data-tag='"+id+"' data-explode='0' ></div></div>");	
			j++;
			$("#col-"+id).data('libre', '1'); // CASE NON VIDE
			
		}
	}
	
	for (var i=0; i<25; i++) {
		width[i] = 0;
		scale[i] = 0;		
		score[i] = 0;
	}

	var maxheight =  "" + $('#col-1').width()+"px";
	console.log(maxheight);
	$('.grandrond').css('max-height', maxheight);
	
	/*$(".app").append("<button class='play'>Jouer</button>");*/
	$(".table1").append("<div id='col-6' class='col s2' ><button class='play'>Jouer</button>");
	$(".table1").append("<br>Score :<span class='score'>0</span></div>");
	/*$(".table1").append("<br>Score :<span class='score'>0</span>");*/
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
		var id_boule = $(this).find(".petitrond").data('tag');
		eclate( $(this).data('tag'), width[id_boule]) ;
	}); 
} // LANCEMENT DU JEU 

function check () {
	timer_rapid += 10;
	for (var i=0; i<25; i++) {		
		$(".rond"+i).each(function() {
			
			if ($(this).data('start') <= timer && $(this).data('explode') != '1') { /* Si le temps du lancement du rond est passé ET que la bulle n'a pas déjà éclaté, on lance la fonction */
				width[i] += 10;
				scale[i] += 0.1;
				console.log(width);
				$(this).css("transform" , "scale("+scale[i]+")" );
				if (scale[i] >= 1 ) {
					// La bulle éclate naturellement
					$(this).data('explode', "1");
					eclate( $(this).data('tag'), -100);
					scale[i] = 0.1;
					width[i] = 0;
				} else {
					
				}	
			}
			
		});
	}
	timer += 200 + timer_rapid;
}



function eclate(tag, points) {
	// Lorsqu'une bulle éclate :
	// On comptabilise les points. 
	score_total += points;
	// On masque la bulle
	$(".rond"+tag).hide();
	$(".score").text(score_total);
	nbBublleDetruite += 1;
    if(nbBublleDetruite==15){
        $(".table3").append("<div id='col-6' class='col s2' >Fini");
        $(".table4").append("<div id='col-6' class='col s2' ><a href='secondniveau'>Jouer au niveau suivant</a> ");
    }
}

