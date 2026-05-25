// Função reutilizável para animar barras circulares
function animateProgress(selector, valueSelector, endValue, color) {
  let el = document.querySelector(selector);
  let val = document.querySelector(valueSelector);
  if (!el || !val) return;

  let current = 0;
  let speed = 25;

  let interval = setInterval(() => {
    current++;
    val.textContent = `${current}%`;
    el.style.background = `conic-gradient(${color} ${current * 3.6}deg, #ededed 0deg)`;
    if (current >= endValue) clearInterval(interval);
  }, speed);
}

// Dispara as animações quando a secção fica visível
const skillSection = document.querySelector('.skill');
let animated = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !animated) {
      animated = true;

      // Business Central / AL — 70%
      animateProgress('.bc-al', '.bc-al-progress', 70, '#6f34fe');

      // Python — 65%
      animateProgress('.python-skill', '.python-progress', 65, '#fca61f');

      // SQL — 75%
      animateProgress('.sql-skill', '.sql-progress', 75, '#20c997');

      // Flutter — 55%
      animateProgress('.flutter-skill', '.flutter-progress', 55, '#3f396d');
    }
  });
}, { threshold: 0.3 });

if (skillSection) observer.observe(skillSection);
// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});