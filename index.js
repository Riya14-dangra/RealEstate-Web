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
  }
  function lightMode() {
    var element = document.body;
    element.className = "light-mode";
  }
