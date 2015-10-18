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
		$('#sosTitle').html('SOS Request is sent');
		
		var htmlContent = 
			'<div data-role="content" data-overlay-theme="a"> \
					<div data-role="header">\
						<h1 style="color:red">Emergency Alert</h1>\
						<h4 style="text-align: center">17 Sep, 11:00 AM</h4>\
					</div>\
					<div data-role="content" id="requestContent">\
						<p>Juliet is calling for help from level 3.</p>\
					</div>\
			</div>';
		$('#count1').html(htmlContent);
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
	
	setTimeout(function(){
		$("#popSosResponse").popup("open");
		var content = '<p>Juliet is calling for help from level 3.</p>\
			</br>\
			<strong>Request been Accepted</strong>\
			<p>Babarella is coming.</p>';
		$("#requestContent").html(content);
	},8500);
	
});


function cancelRequest(){
	$("#cancelReuqest").popup("open");
	setTimeout(function(){
		window.location.href = "home.html";
	},2500);
}

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