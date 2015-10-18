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
	image : '//lorempixel.com/150/150/people/1/',
	news : [ {
		date : "11 Oct, Sun, 1830hrs",
		icon : "./img/NewsFeedIcon.png",
		description : "Alex fell down in the toilet at about 5pm just now"
	}, {
		date : "11 Oct, Sun, 1500hrs",
		icon : "./img/NewsFeedIcon.png",
		description : "Jack choked on fishballs during lunch"
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
	image : '//lorempixel.com/150/150/people/2/',
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
	image : '//lorempixel.com/150/150/people/3/',
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
	image : '//lorempixel.com/150/150/people/4/',
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
	image : '//lorempixel.com/150/150/people/5/',
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