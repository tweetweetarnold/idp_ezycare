var data = ''
	
localStorage.setItem(data);



 var residents = JSON.parse(localStorage.getItem("residents"));
 
 
 var html = '<li data-role="list-divider">All Residents</li>';
 
 for (var r in residents) {
	 html += '\
		<li>
			<a href="resident-summary.html">
				<img src="//lorempixel.com/150/150/people/1/" class="ui-thumbnail ui-thumbnail-circular" />
				<h2>Ethel Chancy</h2>
				<p>Bed 101</p>
			</a>
		</li>
 }
 
 
 $('#residents').html(html);