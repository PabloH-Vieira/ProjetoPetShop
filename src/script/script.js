let slides = ['./src/img/slide1.png','src/img/slide2.png','src/img/slide3.png'];
let index= 0;
let intervalo= 6000;

function slideshow(){
    document.getElementById("imgBanner").src=slides[index];
    index++;

    if (index == slides.length){
        index = 0;
    }
    setTimeout('slideshow()', intervalo);
}

slideshow();

const btnMobile = document.querySelector("#btnMob")
function Menu(){
    //Declarando a variavel e pegando o id
    const navbar=document.querySelector("nav")
    navbar.classList.toggle("active")
}
/*evento que ao clicar vai chamar a função menu */
btnMobile.addEventListener("click", Menu)