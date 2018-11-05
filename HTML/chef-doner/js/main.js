var myFullpage = new fullpage('#fullpage', {
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',

	//Navigation
	menu: '#navbar',
	lockAnchors: false,
	anchors:['homePage', 'aboutPage', 'menuPage'],
	navigation: false,
	navigationPosition: 'left',
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

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