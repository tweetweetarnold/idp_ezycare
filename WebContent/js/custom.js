//$(document).ready(function() {
//	getResidents();
//});


//
//function getResidents() {
	var residentListString = localStorage.getItem("residentList");
	var residentList = JSON.parse(residentListString);
//	console.log(residentList);
	var residentshtml = '<li data-role="list-divider">All Residents</li>';
	
	for ( var r in residentList) {
		var resident = residentList[r];
		
		residentshtml += '\
		<li>\
		<a href="resident-summary.html">'
				+ resident.image + 
				'<h2>' + resident.name + '</h2>\
				<p>Bed ' + resident.bed + '</p>\
			</a>\
		</li>';
	}

	$('#residents').html(residentshtml);
//}