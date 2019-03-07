let plusBtn =
    document.getElementById("plus");
plusBtn.onclick = function(){
    console.log("PLUS");
    let image =
        document.querySelector("#image");
    image.className = "grande";

};

let moinsBtn =
    document.getElementById("moins");
moinsBtn.onclick = function () {
    console.log("MOINS");
    let image =
        document.querySelector("#image");
    image.className = "petite";
}

let initBtn =
    document.querySelector("#init");
initBtn.onclick = function(){
    console.log("INIT");
    let image =
        document.querySelector("#image");
    image.className = "";
}
let img =
    document.getElementById("image");
img.onmousemove = function () {
    console.log("MouseOver sur l'image");
    let th1 =
        document.getElementById("titre_1");
    th1.className = "centrer";
}
img.onmouseout = function () {
    console.log("MLouseOut image");
    let th1 =
        document.getElementById("titre_1");
    th1.className = "";
}