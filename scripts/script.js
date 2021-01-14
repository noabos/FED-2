// NAVIGATIE HAMBURGER
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav a');

allEventListners();

function allEventListners() {

    // als je klikt popt hij op
    navToggler.addEventListener('click', togglerClick);
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}




// GALLERIJ

const listItems = document.querySelectorAll('.filteroptie');
const allImages = document.querySelectorAll('.filter');

function toggleActiveClass(active) {
    listItems.forEach(item => {
        item.classList.remove('active');
    })
    active.classList.add('active');
}

function toggleImages(dataClass) {

    for (let i = 0; i < allImages.length; i++)

        if (allImages[i].dataset.class === dataClass) {

            if (allImages[i].classList.contains('visible')) {} else {
                allImages[i].classList.add('visible');
                allImages[i].classList.remove('unvisible');
            }

        } else {

            if (allImages[i].classList.contains('visible')) {
                allImages[i].classList.add('unvisible');
                allImages[i].classList.remove('visible');
            }
        }
}

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
        toggleActiveClass(listItems[i]);
        toggleImages(listItems[i].dataset.class);
    });
}

//SLIDER

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";

  setTimeout(showSlides, 3000);
}
