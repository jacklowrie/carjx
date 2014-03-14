$(document).ready( function(){

//Creating a New Game
	game = new Object();
	game.time="3:00pm";
	game.type="Basketball";
	game.location="SPAC";
	game.style="intense";


// Post Message Button
	var button = $("#postmessage");
	$(button).click(function(){
		var inputVal = $("#mymessage").val();
		var message = $("<div></div>").addClass(newmessage);
		(message).append( $(inputVal) );
		
	});

});