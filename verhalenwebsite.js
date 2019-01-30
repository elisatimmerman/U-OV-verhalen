/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/*Filterscherm*/
var filterForm = document.querySelector('.filter');
var filterButton = document.querySelector('button');

/*Filterscherm*/
function show() {
    filterForm.classList.toggle('zichtbaar');
}

/*Filterscherm*/
/*De instantie moet aangemaakt zijn - vervolgens moet er functie show zijn*/
if (filterButton !== null) {
    filterButton.addEventListener('click', show);
}





/*Meer genre opties*/
var meerOpties = document.querySelector('.tweedeGenre');
var optieKnop = document.querySelector('.meerOpties');

function showMeerGenre () {
    meerOpties.classList.toggle('zichtbaarOpties');
}

if (optieKnop !== null) {
    optieKnop.addEventListener('click', showMeerGenre);
}






/*Genre bij elkaar optellen*/
var filterKnop = document.getElementsByName('filteren');
var filterCheckboxes = document.getElementsByName('genre');

/*Genre bij elkaar optellen*/
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







/*Aantal sterren beoordeling verhaal*/
var sterrenGeel = document.querySelector('.geleSter');

function aantalSterren (aantalSterrenGeel) {
    if (aantalSterrenGeel === true) {
        sterrenGeel.style.background = '#fcd900';
    }
    if (aantalSterrenGeel === false) {
        sterrenGeel.style.background = '#8d857e';
    }
}

sterrenGeel.addEventListener('click', function () {
    aantalSterren(true);
});

sterrenGeel.addEventListener('dblclick', function () {
    aantalSterren(false);
});


/*Aantal sterren beoordeling verhaal 2*/
var sterrenGeelTwee = document.querySelector('.geleSterTwee');

function aantalSterrenTwee (aantalSterrenGeelTwee) {
    if (aantalSterrenGeelTwee === true) {
        sterrenGeelTwee.style.background = '#fcd900';
    }
    if (aantalSterrenGeelTwee === false) {
        sterrenGeelTwee.style.background = '#8d857e';
    }
}

sterrenGeelTwee.addEventListener('click', function () {
    aantalSterrenTwee(true);
});

sterrenGeelTwee.addEventListener('dblclick', function () {
    aantalSterrenTwee(false);
});


/*Aantal sterren beoordeling verhaal 3*/
var sterrenGeelDrie = document.querySelector('.geleSterDrie');

function aantalSterrenDrie (aantalSterrenGeelDrie) {
    if (aantalSterrenGeelDrie === true) {
        sterrenGeelDrie.style.background = '#fcd900';
    }
    if (aantalSterrenGeelDrie === false) {
        sterrenGeelDrie.style.background = '#8d857e';
    }
}

sterrenGeelDrie.addEventListener('click', function () {
    aantalSterrenDrie(true);
});

sterrenGeelDrie.addEventListener('dblclick', function () {
    aantalSterrenDrie(false);
});


/*Aantal sterren beoordeling verhaal 4*/
var sterrenGeelVier = document.querySelector('.geleSterVier');

function aantalSterrenVier (aantalSterrenGeelVier) {
    if (aantalSterrenGeelVier === true) {
        sterrenGeelVier.style.background = '#fcd900';
    }
    if (aantalSterrenGeelVier === false) {
        sterrenGeelVier.style.background = '#8d857e';
    }
}

sterrenGeelVier.addEventListener('click', function () {
    aantalSterrenVier(true);
});

sterrenGeelVier.addEventListener('dblclick', function () {
    aantalSterrenVier(false);
});


/*Aantal sterren beoordeling verhaal 5*/
var sterrenGeelVijf = document.querySelector('.geleSterVijf');

function aantalSterrenVijf (aantalSterrenGeelVijf) {
    if (aantalSterrenGeelVijf === true) {
        sterrenGeelVijf.style.background = '#fcd900';
    }
    if (aantalSterrenGeelVijf === false) {
        sterrenGeelVijf.style.background = '#8d857e';
    }
}

sterrenGeelVijf.addEventListener('click', function () {
    aantalSterrenVijf(true);
});

sterrenGeelVijf.addEventListener('dblclick', function () {
    aantalSterrenVijf(false);
});







/*Beoordeling verhaal*/
var beoordeling = document.querySelector('.beoordeling');
var knopBeoordeling = document.querySelector('.beoordelingKnop');
var verstuurKnop = document.querySelector('.beoordelingVersturen');

/*Beoordeling verhaal*/
function verstuurd() {
    knopBeoordeling.classList.toggle('beoordelingKnopSpin');
}

/*Beoordeling verhaal*/
function showBeoordeling() {
    beoordeling.classList.toggle('beoordelingZichtbaar');
}

/*Beoordeling verhaal*/
/*De instantie moet aangemaakt zijn - voer showbeoordeling uit.
function is nodig om aan te geven wat voor element showBeoordeling is.*/
if (knopBeoordeling !== null) {
    knopBeoordeling.onclick = function () {
        showBeoordeling();
    };
}

/*Beoordeling verhaal*/
/*De instantie moet aangemaakt zijn - voer showbeoordeling uit en daarna verstuurd uit*/
if (verstuurKnop !== null) {
    verstuurKnop.onclick = function () {
        showBeoordeling();
        verstuurd();
    };
}







/*Afbeeldingenreeks verhaal Mobiel*/
var afbeeldingInterview = document.querySelector('.afbeeldingInterview');


/*Afbeeldingenreeks verhaal*/
/*Als vorigeAfbeelding is true gaat hij 1 afbeelding terug. Bij false gaat hij verder bij verschillendeAfbeeldingMobiel.
Bij de eerste en de elfde afbeelding komen de style elementen weer tevoorschijn*/
var j = 1;

function toonVolgendeAfbeelding(vorigeAfbeelding) {
    if (vorigeAfbeelding === true) {
        j--;
    }

    var verschillendeAfbeeldingenMobiel = ['../images/Verhaal/Mobiel/mobiel-titel6.jpg',
        '../images/Verhaal/Mobiel/mobiel-2.jpg', '../images/Verhaal/Mobiel/mobiel-3.jpg', '../images/Verhaal/Mobiel/mobiel-4.jpg', '../images/Verhaal/Mobiel/mobiel-5.jpg', '../images/Verhaal/Mobiel/mobiel-6.jpg', '../images/Verhaal/Mobiel/mobiel-7.jpg', '../images/Verhaal/Mobiel/mobiel-8.jpg', '../images/Verhaal/Mobiel/mobiel-9.jpg', '../images/Verhaal/Mobiel/mobiel-10.jpg'];
    var hiddenElement = document.getElementsByTagName('section')[0];
    var hiddenBeoordelingsKnop = document.querySelector('.beoordelingKnop');

    hiddenElement.style.visibility = "hidden";
    hiddenElement.style.height = 0;
    hiddenElement.style.padding = 0;

    hiddenBeoordelingsKnop.style.visibility = "hidden";

    if (j === 0) {
        hiddenElement.style = null;
    }

    if (j === 9) {
        hiddenBeoordelingsKnop.style = null;
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







/*Afbeeldingenreeks verhaal Tablet*/
var afbeeldingInterviewTablet = document.querySelector('.afbeeldingInterviewTablet');


/*Afbeeldingenreeks verhaal*/
/*Als vorigeAfbeelding is true gaat hij 1 afbeelding terug. Bij false gaat hij verder bij verschillendeAfbeeldingMobiel.
Bij de eerste en de elfde afbeelding komen de style elementen weer tevoorschijn*/
function toonVolgendeAfbeeldingTablet(vorigeAfbeeldingTablet) {
    if (vorigeAfbeeldingTablet === true) {
        j--;
    }

    var verschillendeAfbeeldingenTablet = ['../images/Verhaal/tablet/verhaal-tablet-titel1.jpg',
        '../images/Verhaal/tablet/verhaal-tablet-2.jpg', '../images/Verhaal/tablet/verhaal-tablet-3.jpg', '../images/Verhaal/tablet/verhaal-tablet-4.jpg', '../images/Verhaal/tablet/verhaal-tablet-5.jpg', '../images/Verhaal/tablet/verhaal-tablet-7.jpg'];
    var hiddenElement = document.getElementsByTagName('section')[0];
    var hiddenBeoordelingsKnop = document.querySelector('.beoordelingKnop');

    hiddenElement.style.visibility = "hidden";
    hiddenElement.style.height = 0;
    hiddenElement.style.padding = 0;

    hiddenBeoordelingsKnop.style.visibility = "hidden";

    if (j === 0) {
        hiddenElement.style = null;
    }

    if (j === 5) {
        hiddenBeoordelingsKnop.style = null;
    }

    afbeeldingInterviewTablet.setAttribute('src', verschillendeAfbeeldingenTablet[j++]);

    if (j >= 6) {
        j = 0;
        hiddenElement.style = null;
    }

}

/*function is nodig om aan te geven wat voor element toonVolgendeAfbeelding is*/
afbeeldingInterviewTablet.addEventListener('click', function () {
    toonVolgendeAfbeeldingTablet(false);
});







/*Afbeeldingenreeks verhaal Desktop*/
var afbeeldingInterviewDesktop = document.querySelector('.afbeeldingInterviewDesktop');


/*Afbeeldingenreeks verhaal*/
/*Als vorigeAfbeelding is true gaat hij 1 afbeelding terug. Bij false gaat hij verder bij verschillendeAfbeeldingMobiel.
Bij de eerste en de elfde afbeelding komen de style elementen weer tevoorschijn*/

function toonVolgendeAfbeeldingDesktop(vorigeAfbeeldingDesktop) {
    if (vorigeAfbeeldingDesktop === true) {
        j--;
    }

    var verschillendeAfbeeldingenDesktop = ['../images/Verhaal/desktop/verhaal-desktop-titel.jpg',
        '../images/Verhaal/desktop/verhaal-desktop-2.jpg', '../images/Verhaal/desktop/verhaal-desktop-3.jpg', '../images/Verhaal/desktop/verhaal-desktop-4.jpg', '../images/Verhaal/desktop/verhaal-desktop-5.jpg', '../images/Verhaal/desktop/verhaal-desktop-6.jpg'];
    var hiddenElement = document.getElementsByTagName('section')[0];
    var hiddenBeoordelingsKnop = document.querySelector('.beoordelingKnop');

    hiddenElement.style.visibility = "hidden";
    hiddenElement.style.height = 0;
    hiddenElement.style.padding = 0;

    hiddenBeoordelingsKnop.style.visibility = "hidden";

    if (j === 0) {
        hiddenElement.style = null;
    }

    if (j === 5) {
        hiddenBeoordelingsKnop.style = null;
    }

    afbeeldingInterviewDesktop.setAttribute('src', verschillendeAfbeeldingenDesktop[j++]);

    if (j >= 6) {
        j = 0;
        hiddenElement.style = null;
    }

}

/*function is nodig om aan te geven wat voor element toonVolgendeAfbeelding is*/
afbeeldingInterviewDesktop.addEventListener('click', function () {
    toonVolgendeAfbeeldingDesktop(false);
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
