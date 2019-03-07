console.log("OK");

function validerLeFormulaire() {
    let emailElement =
        document.getElementById("email");
    let email = emailElement.value;

    if(email === ""
        || !email.includes("@")
        || !email.endsWith(".fr")
    ){
        console.log("Adresse mail non valide");
        emailElement.classList.add("erreur");
    }else{
        emailElement.classList.remove("erreur");
    }

}

function validerLeFormulaire() {
    let teleElement =
        document.getElementById("tele");
    let tele = teleElement.value;

    if(tele === ""
        || !tele.startsWith("+33")
        || !tele.startsWith("0")
        || !tele.length >= 12
    ){
        console.log("numero tele est valide");
        teleElement.classList.add("erreur");
    }else{
        teleElement.classList.remove("erreur");
    }
console.log("fin");
}

let nomElement = document.getElementById("nom");
let nom = nomElement.value;
if(nom === ""){
    nomElement.classList.add("erreur");
}else{
    nomElement.classList.remove("erreur");
}