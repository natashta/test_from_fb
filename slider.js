'use strict'

var slides = ['https://github.com/natashta/testfb/blob/master/img/%D1%88%D0%B0%D0%BF%D0%BA%D0%B0.jpg?raw=true',
 'https://github.com/natashta/testfb/blob/master/img/%D1%88%D0%B0%D0%BF%D0%BA%D0%B02.jpg?raw=true',
  'https://github.com/natashta/testfb/blob/master/img/%D1%88%D0%B0%D0%BF%D0%BA%D0%B03.jpg?raw=true'];
var slidesProcess = ['https://github.com/natashta/testfb/blob/master/img/%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81.jpg?raw=true',
 'https://github.com/natashta/testfb/blob/master/img/%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%812.jpg?raw=true',
 'https://github.com/natashta/testfb/blob/master/img/%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81.jpg?raw=true'];
//let slider = document.getElementsByTagName('header');
let slider = document.getElementById('slider');
let sliderProc = document.querySelector('.process');
let dots = document.querySelectorAll('.dot');

let index = 0;

function showImg() {
  slider.style.backgroundImage = "url("+ slides[index] +")"; 
  for(var i = 0 ; i < slides.length ; i++ ){
        dots[i].classList.remove('active-dot');
    } 
  dots[index].classList.add('active-dot');
  index++;
  if (index === slides.length) {
    index = 0;
  }
}
setInterval(showImg, 5000);

function showImgProc() {
  sliderProc.style.backgroundImage = "url("+ slidesProcess[index] +")"; 
  for(var i = 0 ; i < slidesProcess.length ; i++ ){
        dots[i].classList.remove('active-dot');
    } 
  dots[index].classList.add('active-dot');
  index++;
  if (index === slidesProcess.length) {
    index = 0;
  }
}
setInterval(showImgProc, 5000);

