var residentString = localStorage.getItem("resident");
var resident = JSON.parse(residentString);
console.log(resident);
var image = '<img class="profile-thumbnail" src="'+resident.image+'"/>';
$("#residentPic").html(image);
$("#residentName").html(resident.name);
$("#bed").html('bed number '+ resident.bed);

var newshtml = '<li data-role="list-divider">Resident Newsfeed</li>';
var newsList = resident.news
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