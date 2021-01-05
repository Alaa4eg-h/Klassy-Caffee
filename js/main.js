// BANNER SLIDER

let sliderImg = document.querySelector('.slider-img');
let images = ['slide-01.jpg', 'slide-02.jpg', 'slide-03.jpg'];
let counter = 0;


function prev() {
    if (counter <= 0) {
        counter = images.length;
    }
    counter--;
    setImg();
}


function next() {
    if (counter >= images.length - 1) {
        counter = -1;
    }
    counter++;
    console.log(images.length);
    setImg();
}

function setImg() {
    return sliderImg.setAttribute('src', "images/" + images[counter]);
}