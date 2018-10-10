// Change site language
var changeToEnglish = document.getElementById('english');
changeToEnglish.addEventListener('click', function() {
    document.body.className = 'en';
});

var changeToTurkish = document.getElementById('turkish');
changeToTurkish.addEventListener('click', function() {
    document.body.className = 'tr';
});

/* // Navigation
function displayNoneAllSections() {
    var sections = document.getElementsByTagName('section');
    for(var i = 0; i < sections.length; i++)
        sections[i].style.display = 'none';
}

function clearActiveStyle() {
    var activeStyledHeader = document.getElementsByClassName('active');
    if(activeStyledHeader.length > 0)
        activeStyledHeader[0].className = activeStyledHeader[0].className.replace(" active", "");
}

var homeLink = document.getElementById('home-link');
var homeSection = document.getElementById('home');
homeLink.addEventListener('click', function(){
    displayNoneAllSections();
    homeSection.style.display = "block";

    clearActiveStyle();
});

var aboutLink = document.getElementById('about-link');
var aboutSection = document.getElementById('about');
aboutLink.addEventListener('click', function(){
    displayNoneAllSections();
    aboutSection.style.display = "block";

    clearActiveStyle();
    this.className += " active";
});

var brandsLink = document.getElementById('brands-link');
var brandsSection = document.getElementById('brands');
brandsLink.addEventListener('click', function(){
    displayNoneAllSections();
    brandsSection.style.display = "block";

    clearActiveStyle();
    this.className += " active";
});

var contactLink = document.getElementById('contact-link');
var contactSection = document.getElementById('contact');
contactLink.addEventListener('click', function(){
    displayNoneAllSections();
    contactSection.style.display = "block";

    clearActiveStyle();
    this.className += " active";
}); */