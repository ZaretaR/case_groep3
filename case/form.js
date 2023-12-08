"use strict"

let naamTxt;
let emailTxt;
let datumTxt;
let uurTxt;
let gelegeenheidTxt;
let aantalpersonenTxt;
let allesJuistIngevuld=true;

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
}


