const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// initializeslider();
document.addEventListener("DOMContentLoaded",initializeslider);
function initializeslider()
{
    if(slides.length>0){
    slides[slideIndex].classList.add("displaySlide");
    intervalId=setInterval(nextSlide,3000);
    }


}

function showSlides(index){
    if(index>=slides.length){
        slideIndex = 0;
    }
    else if (index<0){
        slideIndex = slides.length-1;
    }

    slides.forEach(slide=>{
        slide.classList.remove("displaySlide")
    })
    slides[slideIndex].classList.add("displaySlide");
}

function prevslide(){
   clearInterval(intervalId);
   slideIndex--;
   showSlides(slideIndex);
}
function nextslide(){
    slideIndex++;
    showSlides(slideIndex);

}
