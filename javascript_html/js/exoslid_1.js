console.log("OK.");

let toutesLesImages =
    document.getElementsByClassName("image");

console.log(toutesLesImages);
toutesLesImages[0].style.display = "inline";

let compteur = 0;

let suivantBtn = document.getElementById("suivant");
suivantBtn.onclick = function () {
    if (compteur < 4){
        compteur++;
    }else{
        compteur = 0 ;
    }
    console.log("Suivant " + compteur);
    for (let i = 0; i <toutesLesImages.length ; i++) {
        if(i === compteur){
            toutesLesImages[i]
                .style
                .display =
                "inline";
        }else{
            toutesLesImages[i]
                .style
                .display = "none";
        }

    }

}

let precedantBtn = document.getElementById("precedant");
precedantBtn.onclick = function () {
    if (compteur >= 1){
        compteur--;
    }else{
        compteur = 4;
    }
    console.log("Precedant " + compteur);
    for (let i = 0; i <toutesLesImages.length ; i++) {
        if(i === compteur){
            toutesLesImages[i]
                .style
                .display =
                "inline";
        }else{
            toutesLesImages[i]
                .style
                .display = "none";
        }

    }

}