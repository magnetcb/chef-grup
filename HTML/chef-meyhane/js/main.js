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

    menuTabLinks = document.getElementsByClassName("menu-tab-navigation-item-link");

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