console.log("OK.");

document.write("Hello with javascript");
document.write("Ceci est un texte ecrit aevc du JS ");
document.write("Mais y'a pas de retour à la ligne !!!!!");
document.write("mais, si il peut mettre des retour à la ligne,\n la preuve!!!!");
document.write("oops, je veux dire <br/>comme ça");

document.write("<h1>Un autre titre avec JS </h1>");

let h1 = document.getElementById("titreH1");
console.log(h1);
console.log(h1.innerText);
h1.innerText = "hello";

let paraph = document.getElementById("paraph");
console.log(paraph);
console.log(paraph.innerHTML);
paraph.innerHTML = "The most common way to access an HTML element is to use the id of the element.";

paraph.innerHTML = "un autre paragraphe";

let paras = document.getElementsByClassName("paragraphes");
console.log(paras);

paras[0].innerHTML = "Je remplace le contenue du premier paragraphe.";
paras[1].innerHTML = "JE remplace aussi celui du paaragraphe 2";

for (let i = 0; i < paras.length; i++) {
    paras[i].innerHTML = "Même texte pour tout le monde";
}

let lienVersGoogle =
    document.getElementById("googleLien");
let href = lienVersGoogle.getAttribute("href");
// affiche le lien
console.log(href);
// changer l'url du lien (href)
lienVersGoogle
    .setAttribute
    ("href", "https://www.apple.com/");

let image =
    document.getElementById("image");

image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png");
image.setAttribute("title", "Image de javascript");
image.setAttribute("alt", "Image du logo JAVASCRIPT");

let mesTitres =
    document.getElementsByTagName("h1");
for (let i = 0; i < mesTitres.length ; i++) {
    mesTitres[i].innerHTML = "Un titre H1";
}

/*
 * document.getElementById("valeur_id");
 *      1
 * document.getElementsByClassName("valeur_class");
 *         Tableau
 * document.getElementsByTagName("nom_balise");
 *        Tableau
 *
 * let element = docuement.getElementById("valeur_id");
 *      element.getAttibute("href");
 *      element.setAttribute("href", "valeur");
 *      element.innerHTML;
 *      element.innerHTML = "nouvelle valeur";
 *
 */