console.log("OK");

let image =
    document.getElementById("attributeImage");

console.log(image.src);
// console.log(image.getAttribute("src");
console.log(image.title);
// console.log(image.getAttribute("title");
console.log(image.alt);
//console.log(image.getAttribute("alt");

image.alt= "Image sur les attributs HTML";
// image.setAttribute("alt", "Image sur les attributs HTML");

let lienH1 = document.getElementById("attributeTitle");
console.log(lienH1);

lienH1.className = "test";

let imageAttr =
    document.getElementById("attributeImage");
imageAttr.className = "taille";


let paraph =
    document.querySelector("#attributeParaph");
paraph.className = "textColor";