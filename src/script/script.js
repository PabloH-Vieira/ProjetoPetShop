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