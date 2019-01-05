
function initMap() {
	var mapOptions = {
		center: {lat: 40.783909, lng:-73.965228},
		zoom: 13
	}
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function scrivi(){
	document.write(5+6);
}