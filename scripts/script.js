// NAVIGATIE HAMBURGER
var navToggler = document.querySelector('.nav-toggler');
var navMenu = document.querySelector('nav ul');

function togglerClick() {
    navToggler.classList.toggle('toggler-open'); // dit maakt het vierkantje wit
    navMenu.classList.toggle('open'); // dit maakt 'm open
}

// als je klikt popt hij op
navToggler.addEventListener('click', togglerClick); // Eventlisitener voor de toggler



// GALLERIJ

var listItems = document.querySelectorAll('.filteroptie');
var allImages = document.querySelectorAll('.filter');

function toggleActiveClass(active) {  //eerst overal active weghalen, waar je op klikt wordt "active" en die geeft hij de class "active"
    listItems.forEach(item => {
        item.classList.remove('active');
    })
    active.classList.add('active'); //hier verandert hij de vormgeving
}

function toggleImages(dataClass) {

    for (let i = 0; i < allImages.length; i++)  // let is een var die je gebruikt voor een bepaalde functie, let is bepaald nummer wordt meteen weer vergeten, bij var is dat niet zo

        if (allImages[i].dataset.class === dataClass) {   // als ie zichtbaar is dan laat ie t zien en anders niet
                allImages[i].classList.add('visible');
                allImages[i].classList.remove('unvisible');


        } else { // als ie zichtbaar is dan laat ie t zien en anders niet
                allImages[i].classList.add('unvisible');
                allImages[i].classList.remove('visible');
        }
}

for (let x = 0; x < listItems.length; x++) { // js loop // als ie zichtbaar is dan laat ie t zien en anders niet
    listItems[x].addEventListener('click', function () {
        toggleActiveClass(listItems[x]); //hier kijkt hij naar welke element op geklikt is, dat geeft hij mee aan de functie.
        toggleImages(listItems[x].dataset.class); // DATASET.CLASS - Het element waar je op hebt geklikt, kijkt hij naar welke classes hier op zitten. Hij geeft de class van het element weer.
    });
}

//SLIDER

var slideIndex = 0;  //Hij begint op 0, daarna gaat hij optellen.
showSlides();

function showSlides() {

  var slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < slides.length; i++) { //elke keer komt er 1 slide bij, dit maakt alles onzichtbaar, daarna wordt er 1 zichtbaar
    slides[i].style.display = "none"; //verdwijnen andere slides
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} //houdt bij hoeveel slides hij heeft gehad, als hij groter is, dan start hij weer opnieuw

  slides[slideIndex-1].style.display = "block"; //1 voor 1 en dan worden ze weer zichtbaar

  setTimeout(showSlides, 3000); //hoelang voordat de volgende slide komt, 3sec

}
