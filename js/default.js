

window.onload = function(){
    const preload = document.getElementsByClassName('preload');
    preload[0].classList.remove('preload');
}


function responsive_nav() {
    let button = document.getElementById('button');
    let responsive_nav = document.getElementById('responsive_nav');
  
    button.addEventListener('click', function() { 
      responsive_nav.classList.toggle('show');
      button.firstElementChild.classList.toggle('active')
    });
  }
  responsive_nav();