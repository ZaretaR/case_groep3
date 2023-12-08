<<<<<<< HEAD
"use strict"
=======



>>>>>>> b475390f430bd210598dcc70d3569a06e9afac93

let acc = document.getElementsByClassName("accordon");
let i;

<<<<<<< HEAD
function controleerVoorwaardenNaam(){
    if(naamTxt.length < 2 ){
        document.getElementById("naam_error").innerHTML="Minstens 2 karakters lang!";
            allesCorrectIngevuld = false;
    }
    else{
        document.getElementById("naam_error").innerHTML="";
    }
}

function controleerVoorwaardenEmail(){
    if(emailTxtTxt.length < 2 ){
        document.getElementById("email_error").innerHTML="Minstens 2 karakters lang!";
            allesCorrectIngevuld = false;
    }
    else{
        document.getElementById("email_error").innerHTML="";
=======
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
>>>>>>> b475390f430bd210598dcc70d3569a06e9afac93
    }
  });
}

let voornaamTxt;
function controleerVoorwaardenVoornaam(){
  if(voornaamTxt.length < 2 ){
    document.getElementById("voornaam_error").innerHTML="Minstens 2 karakters lang!";
    allesCorrectIngevuld = false;
  }
  else{
    document.getElementById("voornaam_error").innerHTML="";
  }
};

<<<<<<< HEAD
=======
function verstuur(){ 
    voornaamTxt=document.getElementById("voornaam").value;

    allesCorrectIngevuld=true;
        //als er op de knop geklikt wordt, moet het bijhouden van de fouten gereset worden
    telSelectedWinToestel=0;

    if(voornaamTxt.length==0){
      document.getElementById("voornaam_error").innerHTML="Vul in a.u.b.";
      allesCorrectIngevuld = false;
    }
    else{
      //aparte functie aanmaken om de voorwaarden te controleren
      controleerVoorwaardenVoornaam()
    }
    if(allesCorrectIngevuld){
      document.write("Naam is correct ingevuld");
    }
  };
>>>>>>> b475390f430bd210598dcc70d3569a06e9afac93
