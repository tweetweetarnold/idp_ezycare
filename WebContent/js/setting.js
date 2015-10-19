console.log(localStorage.getItem('notificationOption'));
if (localStorage.getItem('notificationOption')) {
	$('#notification').val(localStorage.getItem('notificationOption'));
}

$('#notification').change(function() {
	localStorage.setItem('notificationOption', this.value);
});
