"use strict"

window.addEventListener('scroll', function() {
    const header = document.getElementById('myHeader');
    const scrollPos = window.scrollY;
  
    if (scrollPos > 600) { // Change 100 to the scroll position when you want the change to occur
        header.classList.add('solid');
        header.classList.remove('transparent');
    } else {
        header.classList.remove('solid');
        header.classList.add('transparent');
    }
  });

/*mailchip*/
src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js">
(function($) {window.fnames = new Array(); 
    window.ftypes = new Array();
    fnames[0]='EMAIL';
    ftypes[0]='email';
    fnames[1]='FNAME';
    ftypes[1]='text';
    fnames[2]='LNAME';
    ftypes[2]='text';
    fnames[3]='ADDRESS';
    ftypes[3]='address';
    fnames[4]='PHONE';
    ftypes[4]='phone';
    fnames[5]='BIRTHDAY';
    ftypes[5]='birthday';
}
(jQuery));
var $mcj = jQuery.noConflict(true);
/*einde mailchip*/



let naamTxt;
let emailTxt;
let datumTxt;
let uurTxt;
let geselecteerdeGelegeneheid;
let gelegenheidTxt;
let geselecteerdePersonen;
let personenTxt;
let allesCorrectIngevuld=true;

/*functie verstuur*/ 

function verstuur() {
    naamTxt=document.getElementById("naam").value;
    allesCorrectIngevuld=true;

    if(naamTxt.length==0) {
        document.getElementById("naam_error").innerHTML="Naam is verplicht!";
        allesCorrectIngevuld = false;
    }else {
        controleerVoorwaardenNaam ()
    }
    if(allesCorrectIngevuld) {
        document.write("");
    }


    emailTxt=document.getElementById("email").value;

    if(emailTxt.length==0) {
        document.getElementById("email_error").innerHTML="Email is verplicht!";
        allesCorrectIngevuld = false;
    } else {
        controleerVoorwaardenEmail ();
    }


    datumTxt=document.getElementById("datum").value;
    allesCorrectIngevuld=true;

    if(datumTxt.length > 6) {
        document.getElementById("datum_error").innerHTML="Datum is verplicht!";
        allesCorrectIngevuld = false;
    }else {
        controleerVoorwaardenDatum ()
    }
    if(allesCorrectIngevuld) {
        document.write("");
    }


    uurTxt=document.getElementById("uur").value;
    allesCorrectIngevuld=true;

    if(uurTxt.length > 2) {
        document.getElementById("uur_error").innerHTML="Uur is verplicht!";
        allesCorrectIngevuld = false;
    }else {
        controleerVoorwaardenUur ()
    }
    if(allesCorrectIngevuld) {
        document.write("");
    }


    geselecteerdeGelegeneheid=document.getElementById("gelegenheid").selectedIndex;
    gelegenheidTxt=document.getElementById("gelegenheid").value;

    if(geselecteerdeGelegeneheid==0) {
      document.getElementById("gelegenheid_error").innerHTML="Kies een gelegenheid";
      allesCorrectIngevuld = false;
    }else {
      document.getElementById("gelegenheid_error").innerHTML="";
    }


    geselecteerdeGelegeneheid=document.getElementById("personen").selectedIndex;
    gelegenheidTxt=document.getElementById("personen").value;

    if(geselecteerdePersonen==0) {
      document.getElementById("personen_error").innerHTML="Kies de aantal personen";
      allesCorrectIngevuld = false;
    }else {
      document.getElementById("personen_error").innerHTML="";
    }
}

/*functie controle*/ 

function controleerVoorwaardenNaam() {
    if(naamTxt.length < 2) {
        document.getElementById("naam_error").innerHTML="Minstens 2 karakters lang!";
        allesCorrectIngevuld = false;
    }else {
        document.getElementById("naam_error").innerHTML="";
    }
}

function controleerVoorwaardenEmail() {
    let regEx = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;

    if(regEx.test(emailTxt) == false) {
        document.getElementById("email_error").innerHTML="Vul een correcte email in!";

        allesCorrectIngevuld = false;
    }else {
        document.getElementById("email_error").innerHTML="";
    }
}

function controleerVoorwaardenDatum() {
  if(datumTxt.length < 6) {
      document.getElementById("datum_error").innerHTML="Minstens 6 karakters lang!";
      allesCorrectIngevuld = false;
  }else {
      document.getElementById("datum_error").innerHTML="";
  }
}

function controleerVoorwaardenUur() {
  if(uurTxt.length < 4) {
      document.getElementById("uur_error").innerHTML="Minstens 4 karakters lang!";
      allesCorrectIngevuld = false;
  }else {
      document.getElementById("uur_error").innerHTML="";
  }
}

/*Versturen als correct*/ 

if(allesCorrectIngevuld) {
    let link = "mailto:" + encodeURIComponent("zareta.rasaeva@gmail.com")
    +"subject=" + encodeURIComponent("Formulier validatie")
    + "naam"
    + encodeURIComponent(naamTxt)
    + encodeURIComponent("\r\n\n")
    + "email"
    + encodeURIComponent(emailTxt)
    + encodeURIComponent("\r\n\n")
    + "datum"
    + encodeURIComponent(datumTxt)
    + encodeURIComponent("\r\n\n")
    + "uur"
    + encodeURIComponent(uurTxt)
    + encodeURIComponent("\r\n\n")
    + "gelegenheid"
    + encodeURIComponent(gelegenheidTxt)
    + encodeURIComponent("\r\n\n")
    + "personen"
    + encodeURIComponent(personenTxt)
    + encodeURIComponent("\r\n\n")
    window.location.href = link;
}

