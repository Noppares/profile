// var infoBox
function mapset(){
var urlfull = window.location.hostname;
var latlng = new google.maps.LatLng(13.669224,100.623381);
var centerll= new google.maps.LatLng(13.673654,100.624711);

  var myOptions = {
    zoom: 16,
    center: centerll,
    styles: [{
    stylers: [{
      saturation: -100
    }]
  }],
    scrollwheel: false,
    mapTypeControl: true,
	clickableIcons: false,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DEFAULT
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
	    position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
	  panControl: true,
	  panControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
	  streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }	
	var map = new google.maps.Map(document.getElementById("map"), myOptions); 
   var myOptions2 = {
    zoom: 16,
    center: latlng,
    styles: [{
    stylers: [{
      saturation: -100
    }]
  }],
    scrollwheel: false,
    mapTypeControl: true,
  clickableIcons: false,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DEFAULT
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    panControl: true,
    panControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  } 
  var map2 = new google.maps.Map(document.getElementById("map-mobile"), myOptions2); 
	
	var kmlOP = {
  	suppressInfoWindows: false,
  	preserveViewport: true,
  	clickable: false
	};

   var Marker = new google.maps.MarkerImage('http://client-access.chachingstudio.com/IBCLNG/wp-content/themes/IBCI/src/images/marker.png');
   var icon = {
    url: "http://client-access.chachingstudio.com/IBCLNG/wp-content/themes/IBCI/src/images/marker.png", // url
    scaledSize: new google.maps.Size(345, 272), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(69, 280) // anchor
};
    var View = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: icon,        
        title: "IBCI",
        url:'https://goo.gl/maps/Ma4CMoQ4bAp'
    });

    var Marker2 = new google.maps.MarkerImage('http://client-access.chachingstudio.com/IBCLNG/wp-content/themes/IBCI/src/images/marker-mobile.png');
    var View2 = new google.maps.Marker({
        position: latlng,
        map: map2,
        icon: Marker2,        
        title: "IBCI",
        url:'https://goo.gl/maps/Ma4CMoQ4bAp'
    });

  /*var contentString = '<div style="font-size:13px; font-weight:normal; color:#000; padding-top:10px;">'+
   '<strong style="color:#d9531e;">Arcadia Suites Bangkok Phloenchit Serviced Apartment <br /> by Compass Hospitality</strong><br />'+
  '15 Soi Nai Lert, Wireless Road, Lumpini Sub-district,<br />'+
  'Pathumwan District, Bangkok 10330<br />'+
  '<strong>Tel: </strong>+66 2 305 6565<br />'+
   '<strong>Fax:</strong>+66 2 305 6599</div>';
   var infowindow = new google.maps.InfoWindow({
       content: contentString
  });

  google.maps.event.addListener(markerkl, 'click', function() {
  infowindow.open(map,markerkl);
  });*/

  google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(latlng);
  });
  google.maps.event.addListener(View, 'click', function() {
    window.open(this.url);
  });
  google.maps.event.addListener(View2, 'click', function() {
    window.open(this.url);
  });
}

