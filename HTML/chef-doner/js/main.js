/* fullPage.js Init */
var myFullpage = new fullpage('#fullpage', {
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',

	//Navigation
	menu: '#navbar',
	lockAnchors: false,
	anchors:['homePage', 'aboutPage', 'menuPage', 'franchisingPage', 'careerPage', 'contactPage'],
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
	var locations = [
		['Umraniye', 41.024455, 29.126812, 3],
		['Tesvikiye Sisli', 41.051208, 28.992764, 2],
		['Izzetpasa Sisli', 41.068399, 28.984116, 1]
	  ];

	var istanbul = { lat: 41.0053, lng: 28.9770 };
	var map = new google.maps.Map(
		document.getElementById('map'), {
			zoom: 10, 
			center: istanbul
		});

	var infowindow = new google.maps.InfoWindow();
	var markerIcon = './favicon/favicon-32x32.png';
	var marker, i;
	
	for (i = 0; i < locations.length; i++) { 
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map,
			icon: markerIcon
		});

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
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