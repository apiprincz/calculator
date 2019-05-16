// Algo
// 1. show one image first;
// 2. when button is clicked, display new Image;
// 3. if right button is clicked, show the next image
// 4. if the left button is clicked; show the previous image;

let sliderBtn = document.querySelectorAll("button");

let sliderImages = document.querySelectorAll(".slider__Img");

let sliderContainer = document.querySelector(".slider__container");

sliderImages[0].style.display= "block";

for (let x = 0; x < sliderBtn.length; x++) {
   
    sliderBtn[x].addEventListener("click", function(){

        if(sliderBtn[0]){

            $(".slider__container")                       

        }

    })
    
}