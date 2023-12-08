<<<<<<< HEAD
"use strict"
=======



var naam = prompt('Geef je naam in');
var email = prompt('geef je mail in');
var acc = document.getElementsByClassName("accordion");
var i;
>>>>>>> 2cea4ddd3278f75c89051532402546e1203c574a

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
<<<<<<< HEAD

function controleerVoorwaardenEmail(){
    if(emailTxtTxt.length < 2 ){
        document.getElementById("email_error").innerHTML="Minstens 2 karakters lang!";
            allesCorrectIngevuld = false;
    }
    else{
        document.getElementById("email_error").innerHTML="";
    }
}


=======
>>>>>>> 2cea4ddd3278f75c89051532402546e1203c574a
