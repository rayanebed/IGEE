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
        window.location.href = '../index.html';
      });
  
  let menu = document.getElementById('menu');
  
    window.addEventListener('scroll', function(){
      if(this.innerWidth<= 700){
        if(this.scrollY >= 40){
          if(this.scrollY<= 7042){
            menu.style.position = 'fixed';
            menu.style.width = '100%';
            menu.style.top = '0px';
            menu.style.transform = 'translate(-7%,-16px)';
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
    window.location.href = '../index.html';
  })
  
  Students.addEventListener('click', function(){
    window.location.href = 'students.html';
  })
  
  News.addEventListener('click', function(){
    window.location.href = 'https://google.com';
  })
  
  Contact.addEventListener('click', function(){
    window.location.href = 'https://google.com';
  })
  
  About.addEventListener('click', function(){
    window.location.href = 'https://google.com';
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

let m1 = document.getElementById('master1');
let m1options = document.getElementById('m1options');
let transp = document.getElementById('transp');
m1.addEventListener('click', function(){
    m1options.style.display = 'block';
    transp.style.display = 'block';
})
transp.addEventListener('click', function(){
    m1options.style.display = 'none';
    transp.style.display = 'none';
})

let m2 = document.getElementById('master2');
let m2options = document.getElementById('m2options');
m2.addEventListener('click', function(){
    m2options.style.display = 'block';
    transp.style.display = 'block';
})
transp.addEventListener('click', function(){
    m2options.style.display = 'none';
    transp.style.display = 'none';
})
