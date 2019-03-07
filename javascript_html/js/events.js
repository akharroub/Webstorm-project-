console.log("OK.");

function gestionClick(){
    console.log("Début de la fonction");
    let image =
        document.getElementById("eventsImage");
    image.className = "";
    console.log("Fin de la fonction");
}

function changerTextColor(){
    console.log
    ("Changement de la couleur du texte");
    let paraph =
        document.getElementById
        ("eventsParaph");
    paraph.className = "texteRose";
}

function agrandir() {
    let image =
        document.getElementById
        ("eventsImage");
    image.className =
        "grandeImage";
}

function agrandirImage(){
    let image =
        document.getElementById("imageEvents");
    image.className = "grandeImage";
}

function retricir(){
    let image =
        document.getElementById("imageEvents");
    image.className = "";
}