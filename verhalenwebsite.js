/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var beoordeling = document.querySelector('.beoordeling');
var knopBeoordeling = document.querySelector('.beoordelingKnop');

if (knopBeoordeling != null){
    knopBeoordeling.onclick = function(){showBeoordeling();};
}





var verstuurKnop = document.querySelector('.beoordelingVersturen');

if (verstuurKnop != null){
    verstuurKnop.onclick = function(e){
    showBeoordeling();
    verstuurd();
}
}


function verstuurd(){   knopBeoordeling.classList.toggle('beoordelingKnopSpin');
    console.log("Henk");
}




function showBeoordeling(){                beoordeling.classList.toggle('beoordelingZichtbaar');
}

var filterForm = document.querySelector('.filter');
var filterButton = document.querySelector('button');

if (filterButton != null){
filterButton.addEventListener('click', show);
}


function show(){
  filterForm.classList.toggle('zichtbaar');
}

