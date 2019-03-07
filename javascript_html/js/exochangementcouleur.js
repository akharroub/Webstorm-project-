let bleubtn = document.getElementById("bleu");
bleubtn.onclick = function(){
    console.log("bleu");
    let paraph =
        document.querySelector("#paraph");
    paraph.className = "bleu";

};
let vertbtn =  document.getElementById("vert");
vertbtn.onclick = function(){
    console.log("vert");
    let paraph = document.querySelector("#paraph");
    paraph.className= "vert";
}

let rougebtn =  document.getElementById("rouge");
rougebtn.onclick = function(){
    console.log("rouge");
    let paraph = document.querySelector("#paraph");
    paraph.className= "rouge";
}

let orangebtn =  document.getElementById("orange");
orangebtn.onclick = function(){
    console.log("orange");
    let paraph = document.querySelector("#paraph");
    paraph.className= "orange";
}


