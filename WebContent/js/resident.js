//$(document).ready(function() {
//	displayFeeds();
//
//});

var residentString = localStorage.getItem("resident");
var resident = JSON.parse(residentString);
//console.log(resident);
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

function postFeed(){
	var feed = $("#feedText").val();
	document.getElementById("createFeed").reset();
	console.log(feed);
	var newFeed = {
			date : "Just now",
			icon : "./img/NewsFeedIcon.png",
			description : feed};

	newsList.unshift(newFeed);	
	resident.news = newsList;
	var residentBed = resident.bed;
	localStorage.setItem("resident",JSON.stringify(resident));
	
	var residentListString = localStorage.getItem("residentList");
	var residentList = JSON.parse(residentListString);
	for(var r in residentList){
		var resident1 = residentList[r];
		var residentBed1 = resident1.bed;
		if(residentBed == residentBed1){
			residentList[r] = resident;
			break;
		}
	}
	var residentListStr = JSON.stringify(residentList);
	localStorage.setItem('residentList', residentListStr);
	location.reload();
}