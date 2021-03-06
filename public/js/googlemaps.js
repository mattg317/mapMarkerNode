//var markers = require("../../data/locations.js")

//This file has the correct click and dis appear tab.

console.log("working");
var geocoder;
var map;


 $(document).ready(function() {
    initMap();
});

function initMap() {
        geocoder = new google.maps.Geocoder();
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: 40.824169, lng: -73.915452},
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
       
       var infoWindow = new google.maps.InfoWindow();
        $("#food").on("click", function(){
        for (i = 0; i < markers.length; i++) {  
  	      	var marker = new google.maps.Marker({
  	        	position: new google.maps.LatLng(markers[i].lat, markers[i].long),
  	        	map: map
  	      	});
  	      	var message = markers[i].name

  	      	addName(marker, message)
	      	
        }

      })
};

function addName(marker, message) {
 infowindow = new google.maps.InfoWindow({
    content: message
  });

   marker.addListener('click', function() {
    infowindow.setContent(message);
    infowindow.open(marker.get('map'), marker);
    $('#form').append("<p>"+ message+"</p>")

  });
}

function codeAddress() {
    // var address = document.getElementById('address').value;
    geocoder = new google.maps.Geocoder();

    var address = $("#address").val();
    var name = $("#name").val();
    var boro = $("#boro").val();
    var phone = $("#phone").val();
    var comments=$("#comments").val();

    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();

        var newPlace={
          name: name,
          strAdress: address,
          boro: boro,
          lat: lat,
          long: lng,
          phone: phone,
          }
          console.log(newPlace)
        postAPI(newPlace);

        console.log(JSON.stringify(results[0].geometry.location));
        console.log(lat);
        console.log(lng);
        addName(marker, name);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

//API post ====================================

  function postAPI(newPlace){
      var currentURL = window.location.origin;

    $.post(currentURL + "/api/jobs", newPlace, function(data){
      console.log(data.name);
    })
  }