$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 500;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});

function darkMode() {
    var element = document.body;
    element.className = "dark-mode";
    let bg = document.querySelector('.nav-list');
    bg.style. background = 'linear-gradient(45deg, #efdbdb, #00838f)';

   
  }
  function lightMode() {
    var element = document.body;
    element.className = "light-mode";
    let bg = document.querySelector('.nav-list');
    bg.style. background = 'linear-gradient(45deg, #efdbdb, #f97a7a)';

   
  }

<<<<<<< HEAD

=======
>>>>>>> bab1f0d5f23c281dc82484a076ea70fa2fa87b0d
  window.addEventListener('resize', function(){
    addRequiredClass();
})


function addRequiredClass() {
    if (window.innerWidth < 1210) {
        document.body.classList.add('mobile')
    } else {
        document.body.classList.remove('mobile') 
    }
}

window.onload = addRequiredClass
let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')

let bars = document.querySelectorAll('.hamburger div')

let isActive = false

hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('open')
    if(!isActive) {
        bars[0].style.transform = 'rotate(45deg)'
        bars[1].style.opacity = '0'
        bars[2].style.transform = 'rotate(-45deg)'
        isActive = true
    } else {
        bars[0].style.transform = 'rotate(0deg)'
        bars[1].style.opacity = '1'
        bars[2].style.transform = 'rotate(0deg)'
        isActive = false
    }
    

})