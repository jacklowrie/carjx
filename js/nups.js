$(document).ready( function(){

//Creating a New Game
	game = new Object();
	game.time="3:00pm";
	game.type="Basketball";
	game.location="SPAC";
	game.style="intense";


// Post Message Button
	$("#postmessage").click(function(){
		var inputVal = $("#mymessage").val();
		("messageboard").append( $("<div>inputVal</div>").addClass("new-message") );
	});

});