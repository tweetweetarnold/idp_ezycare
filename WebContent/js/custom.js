//$(document).ready(function() {


//});

var residentListString = localStorage.getItem("residentList");
var residentList = JSON.parse(residentListString);
//console.log(residentList);
var residentshtml = '<li data-role="list-divider">All Residents</li>';

for ( var r in residentList) {
	var resident = residentList[r];
	var residentBed = resident.bed;
	residentshtml += '\
	<li>\
	<a href="#" onclick="residentDetail('+residentBed+');return false;">\
			<img src="'+resident.image+'" class="ui-thumbnail ui-thumbnail-circular" />\
			<h2>' + resident.name + '</h2>\
			<p>Bed ' + resident.bed + '</p>\
		</a>\
	</li>';
}
$('#residents').html(residentshtml);

function residentDetail(bed){
	for(var r in residentList){
		var resident1 = residentList[r];
		var residentBed = resident1.bed;
		if(bed == residentBed){
			var residentStr = JSON.stringify(resident1);
			localStorage.setItem('resident', residentStr);
			window.location.href = "resident-main.html";
		}
	}
}

	