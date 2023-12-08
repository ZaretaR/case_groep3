"use strict"

let acc = document.getElementsByClassName("accordon");
let i;

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
    }
  };

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

