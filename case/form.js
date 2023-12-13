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

  let naamTxt;
  let emailTxt;
  let datumTxt;
  let uurTxt;
  let geselecteerdeGelegenheid;
  let gelegenheidTxt;
  let geselecteerdePersonen;
  let personenTxt;
  let allesCorrectIngevuld;
  
  /*functie controle*/ 
  
  function controleerVoorwaardenNaam() {
    if(naamTxt.length < 2) {
        document.getElementById("naam_error").innerHTML="Minstens 2 karakters lang!";
        allesCorrectIngevuld = false;
    }
    else{
        document.getElementById("naam_error").innerHTML="";
    }
  };
  function controleerVoorwaardenEmail() {
    let regExp=/^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
    if(regExp.test(emailTxt) == false){
      document.getElementById("email_error").innerHTML="Dit is niet correct!";
      allesCorrectIngevuld = false;
    }
    else{
      document.getElementById("email_error").innerHTML="";
    }	
  };
  function contoleerVoorwaardenDatum() {
    let regExp=/^(3[01]|[12][0-9]|0[1-9])\/(1[0-2]|0[1-9])\/(19|20)?[0-9]{2}$/;
    if(regExp.test(datumTxt) == false){
      document.getElementById("datum_error").innerHTML="Dit is niet correct!";
      allesCorrectIngevuld = false;
    }
    else{
      document.getElementById("datum_error").innerHTML="";
    }
  };
  function controleerVoorwaardenUur() {
    let regExp=/^(1[2-9]|2[0-3]|00):[0-5][0-9]$/;
    if(regExp.test(uurTxt) == false){
      document.getElementById("uur_error").innerHTML="Dit is niet correct!";
      allesCorrectIngevuld = false;
    }
    else{
      document.getElementById("uur_error").innerHTML="";
    }
  }
  
  /*functie verstuur*/ 
  function verstuur() {
      naamTxt=document.getElementById("naam").value;
      emailTxt=document.getElementById("email").value;
      datumTxt=document.getElementById("datum").value;
      uurTxt=document.getElementById("uur").value;
      gelegenheidTxt=document.getElementById("gelegenheid").value;
      geselecteerdeGelegenheid=document.getElementById("gelegenheid").selectedIndex;
      personenTxt=document.getElementById("personen").value;
      geselecteerdePersonen=document.getElementById("personen").selectedIndex;
      allesCorrectIngevuld=true;
      if(naamTxt.length==0) {
          document.getElementById("naam_error").innerHTML="Naam is verplicht!";
          allesCorrectIngevuld = false;
      }else {
          controleerVoorwaardenNaam ()
      }
      if(emailTxt.length==0) {
        document.getElementById("email_error").innerHTML="E-mail is verplicht!";
      }else {
        controleerVoorwaardenEmail()
      }
      if(datumTxt.length==0) {
        document.getElementById("datum_error").innerHTML=" is verplicht!";
      }else {
        contoleerVoorwaardenDatum()
      }
      if(uurTxt.length==0) {
        document.getElementById("uur_error").innerHTML=" is verplicht!";
      }else {
        controleerVoorwaardenUur()
      }
      if(geselecteerdeGelegenheid==0) {
        document.getElementById("gelegenheid_error").innerHTML="Kies aub";
        allesCorrectIngevuld = false;
      }else {
        document.getElementById("gelegenheid_error").innerHTML="";
      }
      if(geselecteerdePersonen==0){
        document.getElementById("personen_error").innerHTML="Kies aub";
        allesCorrectIngevuld = false;
      }else {
        document.getElementById("personen_error").innerHTML="";
      }
      if(allesCorrectIngevuld) {
        let link = "mailto:" + encodeURIComponent("zarflocvo_dev@hotmail.com")
        + "?cc=" + encodeURIComponent(document.getElementById('email').value)
        + "&subject=" + encodeURIComponent("Bevestiging van reservatie")
        + "&body="
        + "In deze mail kunt u uw reservering bij Mokka Lounge terugzien. Bedankt!"
        + "%0D%0A"
        + "%0D%0A"
        + "Naam: "
        + encodeURIComponent(naamTxt)
        + encodeURIComponent("\r\n\n")
        + "E-mail: "
        + encodeURIComponent(emailTxt)
        + encodeURIComponent("\r\n\n")
        + "Datum: "
        + encodeURIComponent(datumTxt)
        + encodeURIComponent("\r\n\n")
        + "Uur: "
        + encodeURIComponent(uurTxt)
        + encodeURIComponent("\r\n\n")
        + "Gelegenheid: "
        + encodeURIComponent(gelegenheidTxt)
        + encodeURIComponent("\r\n\n")
        + "Aantal Personen: "
        + encodeURIComponent(personenTxt)
        + encodeURIComponent("\r\n\n")
        window.location.href = link;
      }
    };

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