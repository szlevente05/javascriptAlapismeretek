/* Gyulolom a JavaScriptet - A kod szerzoje, 2022.03.03 0:48*/

const d = new Date();
counter = 0;

function dataTypes() {
    document.getElementById("contentTitle").innerHTML = "Adattípusok";
    document.getElementsByClassName("Variables")[0].style.display = "none";
    document.getElementsByClassName("Datatypes")[0].style.display = "block";
    document.getElementById("practice").style.display = "none";
}

function variables() {
    document.getElementById("contentTitle").innerHTML = "Változók";
    document.getElementsByClassName("Variables")[0].style.display = "block";
    document.getElementsByClassName("Datatypes")[0].style.display = "none";
    document.getElementById("practice").style.display = "inline";
}

function practice() {
    counter++;
    if (counter%2 == 1){
    document.getElementById("practiceList").innerHTML = d;
    } 
    else if (counter%2 == 0){
        document.getElementById("practiceList").innerHTML = "let szam = 0;"
        
    }
}

/* Gyulolom a JavaScriptet - A kod iroja, 2022.03.03 0:48*/