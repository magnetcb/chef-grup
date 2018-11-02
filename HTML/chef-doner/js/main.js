var myFullpage = new fullpage('#fullpage', {
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',

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
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
});