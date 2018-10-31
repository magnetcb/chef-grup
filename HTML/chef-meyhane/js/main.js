document.addEventListener("DOMContentLoaded", function() {
  run();
});

function run() {
  var slider = document.querySelector(".js-carousel");

  lory(slider, {
    infinite: 1,
    enableMouseEvents: true,
    classNameFrame: "js-carousel__frame",
    classNameSlideContainer: "js-carousel__slides",
    classNamePrevCtrl: "js-carousel__prev",
    classNameNextCtrl: "js-carousel__next"
  });
}

/* Menu Tab Header */
function openMenu(evt, menuName) {
    var i, menuTabContent, menuTabLinks;
    menuTabContent = document.getElementsByClassName("menu-tab-content");

    for (i = 0; i < menuTabContent.length; i++) {
        menuTabContent[i].style.display = "none";
    }

    menuTabLinks = document.getElementsByClassName("menu-tab-navigation-item-button");

    for (i = 0; i < menuTabLinks.length; i++) {
        menuTabLinks[i].className = menuTabLinks[i].className.replace(" active", "");
    }

    document.getElementById(menuName).style.display = "flex";
    evt.currentTarget.className += " active";
}

// Get the modal
var modal = document.getElementById('fix-menu');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('fix-menu-info');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = './images/fix-menu.jpg';
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

/* Mobile Menu */
/*
    var toggle = document.getElementById('toggle');
    var mobileNavbar = document.getElementById('mobile-navbar');
    var displayStyleOfMobileNavbar = mobileNavbar.style.display;

    toggle.addEventListener('click', function() {
        if(displayStyleOfMobileNavbar == 'none') {
            displayStyleOfMobileNavbar = 'block';
            console.log(displayStyleOfMobileNavbar);
        } else {
            displayStyleOfMobileNavbar = 'none';
            console.log(displayStyleOfMobileNavbar);
        }
    });

    BU NEDEN CALISMADI????
*/

/* Mobile Menu */
document.getElementById('toggle').addEventListener('click', function () {
    toggle(document.querySelectorAll('.target'));
});

function toggle (elements, specifiedDisplay) {
  var element, index;

  elements = elements.length ? elements : [elements];
  for (index = 0; index < elements.length; index++) {
    element = elements[index];

    if (isElementHidden(element)) {
      element.style.display = '';

      // If the element is still hidden after removing the inline display
      if (isElementHidden(element)) {
        element.style.display = specifiedDisplay || 'block';
      }
    } else {
      element.style.display = 'none';
    }
  }
  function isElementHidden (element) {
    return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
  }
}

// BACK TO TOP Button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}