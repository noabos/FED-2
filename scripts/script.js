// NAVIGATIE HAMBURGER
// VAR declareert een variabele. Variabelen zijn containers voor het opslaan van informatie.
var navToggler = document.querySelector('.nav-toggler'); //nav-toggler is het knopje
var navMenu = document.querySelector('nav ul'); //nav-ul is de daadwerkelijke navigatie

function togglerClick() {
    navToggler.classList.toggle('toggler-open'); // dit maakt het vierkantje wit, wanneer er op is geklikt.// Classlist wordt gebruikt om class te manipuleren.
    navMenu.classList.toggle('open'); // dit maakt 'm open // true of false
}

// als je klikt popt hij op
navToggler.addEventListener('click', togglerClick); // Eventlisitener voor de toggler | Event die de functie aanroept dmv eventlistener, die de functie aanroept wanneer je op knop klikt



// GALLERIJ

var listItems = document.querySelectorAll('.filteroptie'); //Filteroptie is de optie waar de gebruiker tussen kan kiezen in ul,li
var allImages = document.querySelectorAll('.filter'); //Filter zijn de filters waar echt iets in staat.

function toggleActiveClass(active) {  //eerst overal active weghalen, waar je op klikt wordt "active" en die geeft hij de class "active"
    listItems.forEach(item => { // voor elk item in de lijst
        item.classList.remove('active'); //hier haalt hij de active weg
    })
    active.classList.add('active'); //hier verandert hij de vormgeving, dus de kleur verandert van het woordje
}

function toggleImages(dataClass) {

    for (let i = 0; i < allImages.length; i++)  // let is een var die je gebruikt voor een bepaalde functie, let is bepaald nummer wordt meteen weer vergeten, bij var is dat niet zo. Als ik var had gebruikt, had de filteroptie niet gewerkt

        if (allImages[i].dataset.class === dataClass) {   // als ie zichtbaar is dan laat ie t zien en anders niet
                allImages[i].classList.add('visible'); // hij voegt de class visible toe
                allImages[i].classList.remove('unvisible'); // hij verwijdert de class unvisible


        } else { // als ie zichtbaar is dan laat 'ie t zien en anders niet
                allImages[i].classList.add('unvisible'); // hij verwijdert de class unvisible
                allImages[i].classList.remove('visible'); // hij voegt de class visible toe
        }
}

for (let x = 0; x < listItems.length; x++) { // js loop // als ie zichtbaar is dan laat ie t zien en anders niet
    listItems[x].addEventListener('click', function () { //Event die de functie aanroept dmv eventlistener, die de functie aanroept wanneer je op knop klikt

        toggleActiveClass(listItems[x]); //hier kijkt hij naar welke element op geklikt is, dat geeft hij mee aan de functie.
        toggleImages(listItems[x].dataset.class); // DATASET.CLASS - Het element waar je op hebt geklikt, kijkt hij naar welke classes hier op zitten. Hij geeft de class van het element weer.
    });
}

//SLIDER

var slideIndex = 0;  //Hij begint op 0, daarna gaat hij optellen.
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");

  for (var i = 0; i < slides.length; i++) { //elke keer komt er 1 slide bij, dit maakt alles onzichtbaar, daarna wordt er 1 zichtbaar
    slides[i].style.display = "none"; //verdwijnen andere slides
  }

  slideIndex++; // 1 toevoegen
  if (slideIndex > slides.length) {slideIndex = 1} //houdt bij hoeveel slides hij heeft gehad, als hij groter is, dan start hij weer opnieuw
  slides[slideIndex-1].style.display = "block"; //1 voor 1 en dan worden ze weer zichtbaar
  setTimeout(showSlides, 3000); //hoelang voordat de volgende slide komt, 3sec

}
