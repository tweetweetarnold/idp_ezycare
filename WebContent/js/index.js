$(document).ready(function() {
	$("#registerForm").hide();
});


$("#login-button").click(function(event){
	 event.preventDefault();
	 
	 $("#headText").html("Welcome");
	 $('form').fadeOut(200);
	 $('.wrapper').addClass('form-success');
	 
	 setTimeout(function () {
		 window.location.href = "home.html"; //will redirect to your blog page (an ex: blog.html)
     }, 2000); //will call the function after 2 secs.
});


$("#register-button").click(function(event){
	 event.preventDefault();
	 
	 $('#loginForm').hide();
	 $("#registerForm").fadeIn();

	 
//	 setTimeout(function () {
//		 window.location.href = "home.html"; //will redirect to your blog page (an ex: blog.html)
//    }, 2000); //will call the function after 2 secs.
});

$("#cancel-button").click(function(event){
	 event.preventDefault();
	 
	 $("#registerForm").hide();
	 $('#loginForm').fadeIn();
});


function login(){
	//console.log("enter");
	var email = $("#email").val();
	var password = $("#password").val();
	var input = {};
	input.email = email;
	input.password = password;
	var inputStr = JSON.stringify(input);
	inputStr = encodeURIComponent(inputStr);
	$.ajax({
		url:'/Payroll/admin/GetApplicationByEmailServlet?input='+inputStr,
		method:'POST',
		dataType: 'json',
		error: function(err){
			console.log(err);
			$("#message").html("system failed to login in");
		},
		success: function(data){
			console.log(data);
			var status = data.status;
			var message = data.message;
			if(status== 1){
				var applicationId = message.applicationId;
				localStorage.setItem('applicationId', applicationId);
				var app = localStorage.getItem('application');
				var appChecking = JSON.parse(app) ;
				window.location = "index.html";
			}else{
				$("#message").html("Invalid Eamil/Password");
				console.log(message);
			}
		}
	});
}
