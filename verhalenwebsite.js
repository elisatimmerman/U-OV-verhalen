/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var filterForm = document.querySelector('.filter');
var filterButton = document.querySelector('button');
var beoordeling = document.querySelector('.beoordeling');

var knopBeoordeling = document.querySelector('.beoordelingKnop');
var verstuurKnop = document.querySelector('.beoordelingVersturen');

var filterKnop = document.getElementsByName('filteren');
var filterCheckboxes = document.getElementsByName('genre');

var afbeeldingInterview = document.querySelector('.afbeeldingInterview');




function verstuurd() {
    knopBeoordeling.classList.toggle('beoordelingKnopSpin');
}

function showBeoordeling() {
    beoordeling.classList.toggle('beoordelingZichtbaar');
}

function show() {
    filterForm.classList.toggle('zichtbaar');
}


/*Als er op een checkbox geklikt is bepaal dan aantal verhalen.
parseInt zorgt ervoor dat value (=tekst) omgezet wordt naar een getal (=int).*/
function aantalVerhalen() {

    if (filterCheckboxes !== undefined && filterKnop[0] !== undefined) {


        var totaal = 0;
        var i;
        for (i = 0; i < filterCheckboxes.length; i++) {
            if (filterCheckboxes[i].checked) {
                totaal += parseInt(filterCheckboxes[i].value);
            }
        }
//        console.log(totaal);
        filterKnop[0].value = 'Filter ' + totaal + ' verhalen';
    }
}

/*Hij weet hoe vaak hij door de loep moet d.m.v. .length = aantal elementen filtercheckboxes
Loop controleert of er op een checkbox geklikt is.*/
for (var x = 0; x < filterCheckboxes.length; x++) {
    filterCheckboxes[x].onclick = function () {
        aantalVerhalen();
    };
}

aantalVerhalen();



/*De instantie moet aangemaakt zijn - vervolgens moet er functie show zijn*/
if (filterButton !== null) {
    filterButton.addEventListener('click', show);
}

/*De instantie moet aangemaakt zijn - voer showbeoordeling uit.
function is nodig om aan te geven wat voor element showBeoordeling is.*/
if (knopBeoordeling !== null) {
    knopBeoordeling.onclick = function () {
        showBeoordeling();
    };
}

/*De instantie moet aangemaakt zijn - voer showbeoordeling uit en daarna verstuurd uit*/
if (verstuurKnop !== null) {
    verstuurKnop.onclick = function () {
        showBeoordeling();
        verstuurd();
    };
}


/*Als vorigeAfbeelding is true gaat hij 1 afbeelding terug. Bij false gaat hij verder bij verschillendeAfbeeldingMobiel.
Bij de eerste en de elfde afbeelding komen de style elementen weer tevoorschijn*/
var j = 1;

function toonVolgendeAfbeelding(vorigeAfbeelding) {
    if (vorigeAfbeelding === true) {
        j--;
    }

    var verschillendeAfbeeldingenMobiel = ['../images/Verhaal/Mobiel/mobiel-titel.jpg',
        '../images/Verhaal/Mobiel/mobiel-2.jpg', '../images/Verhaal/Mobiel/mobiel-3.jpg', '../images/Verhaal/Mobiel/mobiel-4.jpg', '../images/Verhaal/Mobiel/mobiel-5.jpg', '../images/Verhaal/Mobiel/mobiel-6.jpg', '../images/Verhaal/Mobiel/mobiel-7.jpg', '../images/Verhaal/Mobiel/mobiel-8.jpg', '../images/Verhaal/Mobiel/mobiel-9.jpg', '../images/Verhaal/Mobiel/mobiel-10.jpg'];
    var hiddenElement = document.getElementsByTagName('section')[0];

    hiddenElement.style.visibility = "hidden";
    hiddenElement.style.height = 0;
    hiddenElement.style.padding = 0;

    if (j === 0) {
        hiddenElement.style = null;
    }

    afbeeldingInterview.setAttribute('src', verschillendeAfbeeldingenMobiel[j++]);

    if (j >= 10) {
        j = 0;
        hiddenElement.style = null;
    }

}

/*function is nodig om aan te geven wat voor element toonVolgendeAfbeelding is*/
afbeeldingInterview.addEventListener('click', function () {
    toonVolgendeAfbeelding(false);
});


/*Wanneer mousedown afbeelding in src van class rodeKnop. Wanneer mouseup vorige afbeelding van function toonVolgendeAfbeelding*/
var rodeKnop = document.querySelector('.rodeKnop');

function rodeTekst() {
    afbeeldingInterview.setAttribute('src', '../images/Verhaal/Mobiel/Gescheiden/mobiel-rood-scherm-1.jpg');
}

rodeKnop.addEventListener('mousedown', rodeTekst);

rodeKnop.addEventListener('mouseup', function () {
    toonVolgendeAfbeelding(true);
});


var blauweKnop = document.querySelector('.blauweKnop');

function blauweTekst() {
    afbeeldingInterview.setAttribute('src', '../images/Verhaal/Mobiel/Gescheiden/mobiel-blauw-scherm-1.jpg');
}

blauweKnop.addEventListener('mousedown', blauweTekst);

blauweKnop.addEventListener('mouseup', function () {
    toonVolgendeAfbeelding(true);
});
