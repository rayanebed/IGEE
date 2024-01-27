window.onload = function(){
  window.scrollTo(0,0);
};


window.addEventListener('scroll', function(){
  let y = window.scrollY;
  var toop = document.querySelector('.top');
if (y >= 800){
  toop.style.display = 'flex';
}else{
  toop.style.display = 'none';
}

})

var buttontop = document.getElementById('top');
buttontop.addEventListener('click', function(){
  window.scrollTo({
    top:'0',
    left:'0',
     behavior:'smooth'});
})

var loogo = document.getElementById('mainlogo');
    loogo.addEventListener('click', function() {
      window.location.href = 'index.html';
    });

let menu = document.getElementById('menu');

  window.addEventListener('scroll', function(){
    if(this.innerWidth<= 700){
      if(this.scrollY >= 40){
        if(this.scrollY<= 7042){
          menu.style.position = 'fixed';
          menu.style.width = '100%';
          menu.style.top = '0px';
          menu.style.transform = 'translate(0%,-16px)';
          menu.style.borderBottom = 'solid 3px #f4bb33';
          menu.style.zIndex = '10';
          }
          else{
            menu.style.transform= '';
            menu.style.position = '';
            menu.style.width = 'auto';
            menu.style.borderBottom = 'solid 2px darkblue';
          }
      }
      else{
        menu.style.transform= '';
        menu.style.position = '';
        menu.style.width = 'auto';
        menu.style.borderBottom = 'solid 2px darkblue';
      }
    }
    else{
      menu.style.transform= '';
        menu.style.position = '';
        menu.style.width = 'auto';
        menu.style.borderBottom = 'solid 2px darkblue';
    }})

    let betabutton = document.getElementById('buttonbeta');
    betabutton.addEventListener('click', function(){
      let beta = document.getElementById('beta');
      beta.style.display = 'none';
    })


// ATTACHING LINKS TO THE MENU LIST ITEMS
var Home = document.getElementById('home');
var News = document.getElementById('news');
var Students = document.getElementById('students');
var Contact = document.getElementById('contact');
var About = document.getElementById('about');

Home.addEventListener('click', function(){
  window.location.href = 'index.html';
})

Students.addEventListener('click', function(){
  window.location.href = 'students/students.html';
})

News.addEventListener('click', function(){
  window.location.href = 'error.html';
})

Contact.addEventListener('click', function(){
  window.location.href = 'contact/contact.html';
})

About.addEventListener('click', function(){
  window.location.href = 'about/about.html';
})


let searchbar = document.getElementById('searchnew');
if(window.innerWidth>= 700 && window.innerWidth<= 1000){
  let srchbtn = document.getElementById('sbtn');
  srchbtn.addEventListener('click', function(){
    if(searchbar.style.display === 'flex'){
      searchbar.style.display ='none';
      searchbar.style.animation = 'disappear 1s forwards';
    }else{
      searchbar.style.display ='flex';
      searchbar.style.animation = 'appear 1s forwards';
    }
  })
}

var news1 = document.getElementById('news1');
var news2 = document.getElementById('news2');
var news3 = document.getElementById('news3');

news1.addEventListener('click', function(){
  window.location.href = 'news/L3-demands.html';
})

news2.addEventListener('click', function(){
  window.location.href = 'error.html';
})

news3.addEventListener('click', function(){
  window.location.href = 'error.html';
})

let certificate = document.getElementById('cert');
let guide = document.getElementById('guiide');
let elearning = document.getElementById('elearning');

certificate.addEventListener('click', function(){
  window.location.href = 'error.html';
})

guide.addEventListener('click', function(){
  window.open('error.html');
})

elearning.addEventListener('click', function(){
  window.open('https://elearning.univ-boumerdes.dz/course/index.php?categoryid=9');
})

// Swiper
const swiper = new Swiper('.swiper', {
  spaceBetween: 15,
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // breakpoints (responsive silder)
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
  }
});

// Swiper end
// script




