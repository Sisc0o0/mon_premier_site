

/************************java script pour la date et l'heure ********************** */
var dateGlobale = new Date();

var annee = dateGlobale.getFullYear();
var mois = dateGlobale.getMonth();
var jour = dateGlobale.getDate();
var jour_semaine = dateGlobale.getDay();

var heure = dateGlobale.getHours();
var minute = dateGlobale.getMinutes();
var seconde = dateGlobale.getSeconds();

if( heure < 10 ) { heure = "0" + heure; }
if( minute < 10 ) { minute = "0" + minute; }
if( seconde < 10 ) { seconde = "0" + seconde; }

var MOIS = [ "janvier", "février", "mars", "avril","Mai", "Juin", "Juillet", "Aout","Septembre", "Octobre", "Novembre", "Décembre"   ];
var JOUR_SEMAINE = [ "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi" ];

mois = MOIS[mois];
jour_semaine = JOUR_SEMAINE[jour_semaine];

document.getElementById("heure").innerHTML= jour_semaine + " " + jour + " " + mois + " " + annee + " - " + heure + ":" + minute + ":" + seconde;


/*********** Java script pour le nombre de visite */
const counter = document.getElementById("counter")
const updateCounter = async()=> {

    const data = await fetch("https://api.countapi.xyz/hit/namespace/key")
    const count = await data.json()
    counter.innerHTML = count.value
    counter.style.filter = 'blur(0)'
};
updateCounter();