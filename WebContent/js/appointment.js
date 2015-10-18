/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).on("pageinit", "#appointments", function(event) {

	console.log("here");

	var initialData = [ {
		id : 1,
		name : 'Mr. Peepers',
		bed : '123'
	}, {
		id : 2,
		name : 'Mr. Peepers',
		bed : '123'
	}, {
		id : 3,
		name : 'Mr. Peepers',
		bed : '123'
	} ];

});

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


