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
// Initialize and add the map
function initMap() {
	// The location of Uluru
	var uluru = { lat: -25.344, lng: 131.036 };
	// The map, centered at Uluru
	var map = new google.maps.Map(
		document.getElementById('map'), {
			zoom: 4, 
			center: uluru
		});
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({
		position: uluru, 
		map: map
	});
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