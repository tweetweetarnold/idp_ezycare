//$(document).ready(function() {
//	displayFeeds();
//
//});

//$(document).on("pageinit", "#resident-main", function(event) {
//	
//});

var residentString = localStorage.getItem("resident");
var resident = JSON.parse(residentString);
console.log(resident);
var image = '<img class="profile-thumbnail" src="'+resident.image+'"/>';
$("#residentPic").html(image);
$("#residentName").html(resident.name);
$("#bed").html('bed number '+ resident.bed);
var newsList = resident.news;
//console.log(newsList);

//function displayFeeds(){
	var newshtml = '<li data-role="list-divider">Resident Newsfeed</li>';
//	console.log(newsList);
	for ( var n in newsList) {
		var feed = newsList[n];
		var residentBed = feed.bed;
		newshtml += '\
		<li>\
			<img src="'+feed.icon+'" class="ui-thumbnail ui-thumbnail-circular" />\
			<h3>' + feed.date + '</h2>\
			<p>' + feed.description + '</p>\
		</li>';
	}
	$('#news').html(newshtml);
//}

//function postFeed(){
//	var feed = $("#feedText").val();
//	document.getElementById("createFeed").reset();
//	console.log(feed);
//	var newFeed = {
//			date : "Just now",
//			icon : "./img/NewsFeedIcon.png",
//			description : feed};
//	newsList.push(newFeed);
//	
//	var newshtml = '<li data-role="list-divider">Resident Newsfeed</li>';
//	console.log(newsList);
//	for ( var n in newsList) {
//		var feed = newsList[n];
//		var residentBed = feed.bed;
//		newshtml += '\
//		<li>\
//			<img src="'+feed.icon+'" class="ui-thumbnail ui-thumbnail-circular" />\
//			<h3>' + feed.date + '</h2>\
//			<p>' + feed.description + '</p>\
//		</li>';
//	}
//	$('#news').html(newshtml);
////	displayFeeds();
//}