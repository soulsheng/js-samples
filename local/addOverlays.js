// JavaScript Document


function addInfowindow(marker, infowindow)
{
	google.maps.event.addListener(marker, 'click', 
								  function() 
								  {	infowindow.open(map, marker);}
									);
}

function addOverlays() 
{
	for (var i=0; i < 5; i++) {
		var iLatlng = new google.maps.LatLng( myLatlng.lat(), myLatlng.lng() + 15*i );
		var marker = new google.maps.Marker({
            position: iLatlng,
            draggable: true,
            title: 'this is a marker',
            icon: './mapfiles/logo-ioi-s.png'
          });
		var infowindow = new google.maps.InfoWindow({
            content: '山东省科学院海洋仪器仪表研究所浮标'
          });
        addInfowindow(marker, infowindow);
		marker.setMap(map);
	}

	// Add a polyline
	var polyOptions = {
	  strokeWeight: 2,
	  strokeColor: '#FFCC30'
	};
	var polyline = new google.maps.Polyline(polyOptions);
	polyline.setMap(map);
	for (i = 0; i < 5; i++) {
	  polyline.getPath().push( new google.maps.LatLng( myLatlng.lat(), myLatlng.lng()+15*i ) );
	}
}
  
