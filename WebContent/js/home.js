var residentListString = localStorage.getItem("residentList");
var residentList = JSON.parse(residentListString);

for ( var r in residentList) {
	var resident = residentList[r];
	var residentname = resident.name;
	if ('Jack' == residentname) {
		var residentStr = JSON.stringify(resident);
		localStorage.setItem('resident', residentStr);
//		window.location.href = "resident-main.html";
	}
}

function individual(){
	window.location.href = "resident-main.html";
}


function notImplement(){
	$("#popNotImplement").popup("open");
}