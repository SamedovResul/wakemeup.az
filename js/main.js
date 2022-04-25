

const About = document.querySelectorAll('.About');
const AboutSection = document.getElementById('About-section');


const wakeMeUp = document.querySelectorAll('.WakeMeUp');
const wakeMeUpSection = document.getElementById("wakemeup-section");


const App = document.querySelectorAll('.App');
const AppSection= document.getElementById("app-section");

const Team = document.querySelectorAll('.Team');
const TeamSection = document.getElementById("team-section");

const Support = document.querySelectorAll('.Support');
const SupportSection = document.getElementById("support-section");


const Contact = document.querySelectorAll('.Contact');
const ContactSection = document.getElementById("contact-section");

for (let i = 0; i < About.length; i++) {
  About[i].addEventListener("click", function(){
    AboutSection.scrollIntoView();
  })
}


for (let i = 0; i < wakeMeUp.length; i++) {
  wakeMeUp[0].addEventListener("click", function(){
    wakeMeUpSection.scrollIntoView();
  })
}

for (let i = 0; i < App.length; i++) {
  App[i].addEventListener("click", function(){
    AppSection.scrollIntoView();
  })
}

for (let i = 0; i < Team.length; i++) {
  Team[i].addEventListener("click", function(){
    TeamSection.scrollIntoView();
  })
}

for (let i = 0; i < Support.length; i++) {
  Support[i].addEventListener("click", function(){
    SupportSection.scrollIntoView();
  })
}


for (let i = 0; i < Contact.length; i++) {
  Contact[i].addEventListener("click", function(){
    ContactSection.scrollIntoView();
  })
}



// burger function

const openBurger = document.getElementById('burger-open');
const burgerMenu = document.getElementById('burger-menu');
const closeBurger = document.getElementById('burger-close');


let display = false

$(document).ready(function(){
  $("#burger-open").click(function(){
    if(display){
      display = false
      $(".burger-menu").fadeOut();
    }else{
      display = true
      
      $(".burger-menu").fadeIn();
    }
  });
});


