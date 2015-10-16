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
	name : "Alex",
	bed : 101,
	image : '<img src="//lorempixel.com/150/150/people/1/" class="ui-thumbnail ui-thumbnail-circular" />',
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
	name : "John",
	bed : 102,
	image : '<img src="//lorempixel.com/150/150/people/2/" class="ui-thumbnail ui-thumbnail-circular" />',
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
	image : '<img src="//lorempixel.com/150/150/people/3/" class="ui-thumbnail ui-thumbnail-circular" />',
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
	image : '<img src="//lorempixel.com/150/150/people/4/" class="ui-thumbnail ui-thumbnail-circular" />',
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
	name : "Jack",
	bed : 105,
	image : '<img src="//lorempixel.com/150/150/people/5/" class="ui-thumbnail ui-thumbnail-circular" />',
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