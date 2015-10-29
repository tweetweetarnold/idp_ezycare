/**
 * Data
 */

$(document).ready(function() {
	var nurseStr = JSON.stringify(nurse);
	localStorage.setItem('Nurse', nurseStr);

	var residentListStr = JSON.stringify(residentList);
	localStorage.setItem('residentList', residentListStr);
});

// Nurse
var nurse = {
	name : "Juliet",
	notification : false
};

// Residents
var residentList = [ {
	name : "Jack",
	bed : 101,
	image : './img/profilePic/old1.jpg',
	news : [ {
		date : "11 Oct, Sun, 1700hrs",
		icon : "./img/NewsFeedIcon.png",
		description : "Jack fell down in the toilet at about 5pm"
	}, {
		date : "11 Oct, Sun, 0300hrs",
		icon : "./img/NewsFeedIcon.png",
		description : "Jack suffered a seizure"
	} ],
	pastAppt : [ {
		date : "11 Sep",
		time : 1200,
		address : "Singapore General Hospital"
	}, {
		date : "9 Oct",
		time : 1200,
		address : "Singapore General Hospital"
	} ],
	appt : [ {
		date : "6 Nov",
		time : 1200,
		address : "Singapore General Hospital"
	}, {
		date : "11 Dec",
		time : 1200,
		address : "Singapore General Hospital"
	} ],
	contact : [ {
		name : "Harry Armstrong",
		relation : "Father",
		contact : 98765425
	}, {
		name : "Angelababy",
		relation : "Mother",
		contact : 56489565
	} ],
	allergies : [ {
		name : "Peanut"
	}, {
		name : "Soya"
	}, {
		name : "Egg"
	} ],
	diagnoses : [ {
		name : "High Blood Pressure"
	}, {
		name : "Diabetes"
	}, {
		name : "Kidney"
	} ],
	medicine : [ {
		name : "Ibuprofen",
		dosage : "400mg",
		frequency : "Twice a day",
		beganon : "17 May 2015",
		sideEffects : ""
	}, {
		name : "Paracetamol",
		dosage : "200mg",
		frequency : "Once a day",
		beganon : "1 Nov 2015",
		sideEffects : ""
	} ]
}, {
	name : "John",
	bed : 102,
	image : './img/profilePic/old2.jpg',
	pastAppt : [ {
		date : "11 Sep",
		time : 1200,
		address : "Singapore General Hospital"
	}, {
		date : "9 Oct",
		time : 1200,
		address : "Singapore General Hospital"
	} ],
	appt : [ {
		date : "5 Nov",
		time : 1200,
		address : "National University Hospital"
	}, {
		date : "11 Dec",
		time : 1200,
		address : "Singapore General Hospital"
	} ],
	contact : [ {
		name : "Harry Armstrong",
		relation : "Father",
		contact : 98765425
	}, {
		name : "Angelababy",
		relation : "Mother",
		contact : 56489565
	} ]
}, {
	name : "Charlie",
	bed : 103,
	image : './img/profilePic/old3.jpg',
	pastAppt : [ {
		date : "11 Sep",
		time : 1200,
		address : "Singapore General Hospital"
	}, {
		date : "9 Oct",
		time : 1200,
		address : "Singapore General Hospital"
	} ],
	appt : [ {
		date : "6 Nov",
		time : 1200,
		address : "Singapore General Hospital"
	}, {
		date : "11 Dec",
		time : 1200,
		address : "Singapore General Hospital"
	} ],
	contact : [ {
		name : "Harry Armstrong",
		relation : "Father",
		contact : 98765425
	}, {
		name : "Angelababy",
		relation : "Mother",
		contact : 56489565
	} ]
}, {
	name : "Derrick",
	bed : 104,
	image : './img/profilePic/old4.jpg',
	pastAppt : [ {
		date : "11 Sep",
		time : 1200,
		address : "Singapore General Hospital"
	}, {
		date : "9 Oct",
		time : 1200,
		address : "Singapore General Hospital"
	} ],
	appt : [ {
		date : "6 Nov",
		time : 1200,
		address : "Singapore General Hospital"
	}, {
		date : "11 Dec",
		time : 1200,
		address : "Singapore General Hospital"
	} ],
	contact : [ {
		name : "Harry Armstrong",
		relation : "Father",
		contact : 98765425
	}, {
		name : "Angelababy",
		relation : "Mother",
		contact : 56489565
	} ]
}, {
	name : "Alex",
	bed : 105,
	image : './img/profilePic/old5.jpg',
	pastAppt : [ {
		date : "11 Sep",
		time : 1200,
		address : "Singapore General Hospital"
	}, {
		date : "9 Oct",
		time : 1200,
		address : "Singapore General Hospital"
	} ],
	appt : [ {
		date : "6 Nov",
		time : 1200,
		address : "Singapore General Hospital"
	}, {
		date : "11 Dec",
		time : 1200,
		address : "Singapore General Hospital"
	} ],
	contact : [ {
		name : "Harry Armstrong",
		relation : "Father",
		contact : 98765425
	}, {
		name : "Angelababy",
		relation : "Mother",
		contact : 56489565
	} ]
} ];