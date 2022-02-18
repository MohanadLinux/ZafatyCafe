
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const toggle2 = document.getElementById('toggle2');
const navbar = document.getElementById('navbar');
const ulnavbar = document.getElementById('ulnavbar');
  
document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle'
    && e.target.id !== 'toggle2' 
    && e.target.id !== 'navbar'  
    && e.target.id !== 'ulnavbar'){
        toggle.classList.remove('active');
        toggle2.classList.remove('active');
        navbar.classList.remove('active');
        ulnavbar.classList.remove('active');
    }
}
  
toggle.onclick = function(){
    toggle.classList.toggle('active');
    toggle2.classList.toggle('active');
    navbar.classList.toggle('active');
    ulnavbar.classList.toggle('active');
}
window.onscroll = function() {scrollFunction()};
var fontSize = document.getElementById("logo").style.fontSize;
function scrollFunction() {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("logo").style.fontSize = "3rem";
      document.getElementById("header").style.background = "#eeeeeef0";
      document.getElementById("header").style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 3px 12px";
    } else {
      document.getElementById("logo").style.fontSize = fontSize;
      document.getElementById("header").style.background = "none";
      document.getElementById("header").style.boxShadow = "none";
    }
  }

