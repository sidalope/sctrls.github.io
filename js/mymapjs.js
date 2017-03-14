function myMap(){
	var mapOptions = {
		center: new google.maps.LatLng(40.783909, -73.965228),
		zoom: 10,
		mapTypeId: google.maps.mapTypeId.HYBRID
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function scrivi(){
	document.write(5+6);
}