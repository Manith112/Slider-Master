document.addEventListener("DOMContentLoaded", function() {
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const nextBtnMobile = document.querySelector(".next-mobile");
const prevBtnMobile = document.querySelector(".prev-mobile");
// next and previous 
let slideIndex = 0;

nextBtn.addEventListener("click", function() {
    slideIndex += 1;
    showImg(slideIndex);
    showSlides(slideIndex);
    showImgMobile(slideIndex)
});

prevBtn.addEventListener("click", function() {
    slideIndex -= 1;
    showImg(slideIndex);
    showSlides(slideIndex);
    showImgMobile(slideIndex)
});
// next and previous mobile 
    // mobile 
    nextBtnMobile.addEventListener("click", function() {
        slideIndex += 1;
        showImg(slideIndex);
        showSlides(slideIndex);
        showImgMobile(slideIndex)
    });
  
    prevBtnMobile.addEventListener("click", function() {
        slideIndex -= 1;
        showImg(slideIndex);
        showSlides(slideIndex);
        showImgMobile(slideIndex)
    });
    // Display the first slide when the page loads
    showImg(slideIndex);
    showSlides(slideIndex);
    showImgMobile(slideIndex)
// display content 

function showSlides(n) {
    const slides = document.querySelectorAll(".left");
   
    if (n >= slides.length) {
      slideIndex = 0;

    }
    if (n < 0) {
      slideIndex = slides.length - 1;
      
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active'); // Remove active class from all slides
  }
  slides[slideIndex].classList.add('active'); // Add active class to current slide
  }
// display image 
function showImg(n) {
    const imgSlide = document.querySelectorAll(".img-slide")
   
    if (n >= imgSlide.length) {
      slideIndex = 0;

    }
    if (n < 0) {
      slideIndex = imgSlide.length - 1;
      
    }
    for (let i = 0; i < imgSlide.length; i++) {
      imgSlide[i].style.display = "none";
    }
    imgSlide[slideIndex].style.display = "block";
  }
//   display image mobile 
function showImgMobile(n) {
    const imgSlideMobile = document.querySelectorAll(".img-slide-mobile")
   
    if (n >= imgSlideMobile.length) {
      slideIndex = 0;

    }
    if (n < 0) {
      slideIndex = imgSlideMobile.length - 1;
      
    }
    for (let i = 0; i < imgSlideMobile.length; i++) {
      imgSlideMobile[i].style.display = "none";
    }
    imgSlideMobile[slideIndex].style.display = "block";
  }
});