/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var zoekveld = document.querySelector('body > section > form > fieldset');
var zoekbutton = document.querySelector('body > section > button');

zoekbutton.addEventListener ('click', function(){
zoekveld.classList.toggle('show-search');
});
