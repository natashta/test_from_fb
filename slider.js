'use strict'

var slides = ['img/шапка.jpg',
 'img/шапка2.jpg',
  'img/шапка3.jpg'];
var slidesProcess = ['img/процесс.jpg',
 'img/процесс1.jpg',
 'img/процесс.jpg'];
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

