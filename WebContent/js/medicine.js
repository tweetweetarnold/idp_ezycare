$(document).ready(function() {
	$("#editableForm").hide();

});

$("#editBtn_medicine").click(function(event) {
	event.preventDefault();

	$('#displayForm').hide();
	// console.log($('#dosage').html());
	// console.log('400mg');
	// // $('#dosageEdit').val($('#dosage').html());
	// document.getElementById('dosageEdit').value = $('#dosage').html();
	// // document.getElementById('frequencyEdit').value =
	// $('#frequency').html();
	// $("#frequencyEdit").val($('#frequency').html());
	// document.getElementById('startDateEdit').value = $('#startDate').html();
	// $("#startDateEdit").val($('#startDate').html());
	// document.getElementById('sideEffectEdit').value =
	// $('#sideEffect').html();
	$("#editableForm").fadeIn();

});

$("#saveBtn_medicine").click(function(event) {
	event.preventDefault();

	$('#dosageEdit').val();
	$('#dosageEdit').val();
	$("#frequencyEdit").val();
	$("#startDateEdit").val();
	$("#sideEffectEdit").val();

	var username = $("#regUsername").val();
	var password = $("#regPassword").val();
	var password2 = $("#confirmPassword").val();

	localStorage.setItem('username', username);
	localStorage.setItem('password', password);

	$("#editableForm").hide();
	$('#displayForm').fadeIn();
});

var residentString = localStorage.getItem("resident");
var resident = JSON.parse(residentString);
console.log(resident);
var image = '<img class="profile-thumbnail" src="' + resident.image + '"/>';
$("#residentPic").html(image);
$("#residentName").html(resident.name);
$("#bed").html('bed number ' + resident.bed);
var newsList = resident.news;
// console.log(newsList);

// function displayFeeds(){
var medicineshtml = '<li data-role="list-divider">Resident Newsfeed</li>';
// console.log(newsList);
for ( var n in newsList) {
	var feed = newsList[n];
	var residentBed = feed.bed;
	medicineshtml += '\
		<li>\
			<img src="' + feed.icon
			+ '" class="ui-thumbnail ui-thumbnail-circular" />\
			<h3>'
			+ feed.date + '</h2>\
			<p>' + feed.description + '</p>\
		</li>';
}
$('#medicines').html(medicineshtml);
