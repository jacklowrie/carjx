$(document).ready( function(){
	//If user submits the form
	$("#submitmsg").click(function(){   
		var clientmsg = $("#usermsg").val();
		$.post("post.php", {text: clientmsg});              
		$("#usermsg").attr("value", "");
		return false;
	});
});
	