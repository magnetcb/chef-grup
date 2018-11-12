/* fullPage.js Init */
var myFullpage = new fullpage('#fullpage', {
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',

	//Navigation
	menu: '#navbar',
	lockAnchors: false,
	anchors:['homePage', 'aboutPage', 'menuPage', 'franchisingPage','galleryPage', 'careerPage', 'contactPage'],
	navigation: false,
	navigationPosition: 'left',
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Scrolling
	scrollOverflow: true,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	verticalCentered: true,
	paddingTop: '3em',
	paddingBottom: '10px',
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'}
});

/* Google Maps */
function initMap() {

	// Basic options for a simple Google Map
	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 11,

		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(41.084455, 29.056812), // Istanbul

		// How you would like to style the map. 
		// This is where you would paste any style found on Snazzy Maps.
		styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
	};

	var locations = [
		["<span style='color: black;'>Fatih Sultan Mehmet Mahallesi, Balkan Cad. Meydan İstanbul AVM No: 64, 34771 Ümraniye/İstanbul</span>", 41.024455, 29.126812, 3],
		["<span style='color: black;'>Teşvikiye, Teşvikiye Cd. No:12, 34365 Şişli/İstanbul</span>", 41.051208, 28.992764, 2],
		["<span style='color: black;'>İzzetpaşa Mahallesi, İzzet Paşa Mahallesi Abide-i Hürriyet Caddesi, No: 160/B, 34403 Şişli/İstanbul</span>", 41.068399, 28.984116, 1]
	  ];

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var infoWindow = new google.maps.InfoWindow();
	var markerIcon = new google.maps.MarkerImage('./favicon/favicon-32x32.png');
	var marker, i;
	
	for (i = 0; i < locations.length; i++) { 
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map,
			icon: markerIcon
		});

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infoWindow.setContent(locations[i][0]);
				infoWindow.open(map, marker);
			}
		})(marker, i));
	}
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var menuButton = document.getElementById('menu-button');
menuButton.onclick = function(){
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}