$(document).ready(function() {
	$("#registerFormContainer").hide();
	
	localStorage.setItem('username', 'Juliet');
//	localStorage.setItem('password', '123');
});

$("#login-button").click(function(event) {
	event.preventDefault();
	
	var username = $("#loginUsername").val();
	var password = $("#loginPassword").val();
	
	var verifyUsername = localStorage.getItem('username');
	var verifyPassword = localStorage.getItem('password');
	
	if(username == verifyUsername){
		$("#loginErrorMessage").html('');
		$("#headText").html("Welcome " + username);
		$('form').fadeOut(200);
		$('.wrapper').addClass('form-success');
		
		localStorage.setItem('currentUser', username);
		
		setTimeout(function() {
			window.location.href = "home.html"; // will redirect to your blog page
												// (an ex: blog.html)
		}, 2000); // will call the function after 2 secs.
	}else{
		$("#loginErrorMessage").html("The user does not exist or the password is incorrect.");
	}
	
});

$("#register-button").click(function(event) {
	event.preventDefault();
	
	$("#loginErrorMessage").html('');
	$('#loginFormContainer').hide();
	$("#registerFormContainer").fadeIn();

	// setTimeout(function () {
	// window.location.href = "home.html"; //will redirect to your blog page (an
	// ex: blog.html)
	// }, 2000); //will call the function after 2 secs.
});

$("#register-in").click(function(event) {
	event.preventDefault();
	
	$("#loginErrorMessage").html('');
	var username = $("#regUsername").val();
	var password = $("#regPassword").val();
	var password2 = $("#confirmPassword").val();
	
	if(password == password2){
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
		
		$("#registerFormContainer").hide();
		$('#loginFormContainer').fadeIn();
	}else{
		$("#registerErrorMessage").html("Password does not match, try again.");
	}
	// setTimeout(function () {
	// window.location.href = "home.html"; //will redirect to your blog page (an
	// ex: blog.html)
	// }, 2000); //will call the function after 2 secs.
});

$("#cancel-button").click(function(event) {
	event.preventDefault();
	
	$("#loginErrorMessage").html('');
	$("#registerFormContainer").hide();
	$('#loginFormContainer').fadeIn();
});
