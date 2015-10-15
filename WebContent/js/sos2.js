$(document).ready(function() {
	
	$("#count2").hide();
	$("#count1").hide();
	
	setTimeout(function(){
	$('#count3').fadeOut();
	}, 1600);
	setTimeout(function(){
	$('#count2').fadeIn();
	}, 2000);
	
	setTimeout(function(){
	$('#count2').fadeOut();
	}, 3000);
	setTimeout(function(){
	$('#count1').fadeIn();
	}, 3400);

//	setTimeout(function(){
//	$('#count1').fadeOut();
//	}, 4400);
	
	setTimeout(function(){
		$('#cancelButtonContent').html("Press to CANCEL the request!").css({"background-color": "#FFB000"});
		$('#cancelButtonContent').on("mouseenter", function() {
			$(this).css({
				"background-color" : "yellow",
				"font-weight" : "bolder"
			});
		}).on("mouseleave", function() {
			var styles = {
				backgroundColor : "#ddd",
				fontWeight : ""
			};
			$(this).css(styles);
		});
		
// $("#popSosSent").popup();
		$("#popSosSent").popup("open");
	}, 4500);
	
	setTimeout(function(){
		$("#popSosSent").popup("close");
    }, 5500);
	
	
	
});

//$("#cancelSOS").click(function(event) {
//	event.preventDefault();
//	
//	$("#loginErrorMessage").html('');
//	$('#loginFormContainer').hide();
//	$("#registerFormContainer").fadeIn();
//
//	// setTimeout(function () {
//	// window.location.href = "home.html"; //will redirect to your blog page (an
//	// ex: blog.html)
//	// }, 2000); //will call the function after 2 secs.
//});



//$(document).bind('pageinit', function() {
//        setTimeout(function(){
//          $("#popSosSent").popup();
//          $("#popSosSent").popup("open");
//        }, 100);
//        setTimeout(function(){
//          $("#popSosSent").popup("close");
//        }, 3000);
//        setTimeout(function(){
//          $("#popSosRequest").popup();
//          $("#popSosRequest").popup("open");
//        }, 3100);
//        setTimeout(function(){
//          $("#popSosRequest").popup("close");
//        }, 3000);
//         setTimeout(function(){
//          $("#popSosResponse").popup();
//          $("#popSosResponse").popup("open");
//        }, 100);
//});