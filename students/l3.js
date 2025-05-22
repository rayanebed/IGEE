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
  
      let betta = document.getElementById('beta');
    if(sessionStorage.getItem('beta')=='done'){
      betta.style.display = 'none';
    }
    let betabutton = document.getElementById('buttonbeta');
    betabutton.addEventListener('click', function(){
      let beta = document.getElementById('beta');
      beta.style.display = 'none';
      sessionStorage.setItem('beta', 'done');
    })


      let s1 = document.getElementById('s1');
      let s1select = document.getElementById('s1choose');
      let s2select = document.getElementById('s2choose');
      let s2 = document.getElementById('s2');
      
      s1.style.display = 'none';
      s1select.addEventListener('click',function(){
        if((s1.style.display) === 'none'){
          s1.style.display = '';
          invalid.style.display = '';
          if(s2.style.display != 'none'){
            s2.style.display = 'none';
          }
        }
        else{
          s1.style.display = 'none';
          invalid.style.display = 'none'
        }
      })

      s2select.addEventListener('click', function(){
        if(s2.style.display === 'none'){
          s2.style.display = 'block';
          invalid.style.display = '';
          if(s1.style.display != 'none'){
            s1.style.display = 'none';
          }
        }
        else{
          s2.style.display = 'none';
          invalid.style.opacity = '0';
        }
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
    window.location.href = '../error.html';
  })
  
  Contact.addEventListener('click', function(){
    window.location.href = '../contact/contact.html';
  })
  
  About.addEventListener('click', function(){
    window.location.href = '../about/about.html';
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


// the ad
const ads = [
  {
      gif: "../assets/gifs/ivolunteer-ad.gif",
      url: "https://instagram.com/i.volunteer.dz/",
      alt: "I Volunteer"
  },
  {
      gif: "../assets/gifs/iscraft-ad.gif",
      url: "https://iscraft.site/",
      alt: "ISCraft"
  },
  {
      gif: "../assets/gifs/onlinebazardz-ad.gif",
      url: "https://instagram.com/online_bazar_dz/",
      alt: "Online Bazar DZ"
  }
]
const ad = document.getElementById("ad");
const adImg = document.getElementById("adimg");
const adText = document.getElementById("adtext");
const adLink = document.getElementById("adlink");

function showGif(){
  const randomIndex = Math.floor(Math.random() * ads.length);
  ad.innerHTML = `<a href="${ads[randomIndex].url}" target="_blank"><img src="${ads[randomIndex].gif}" alt="${ads[randomIndex].alt}"></a>`;
}


window.addEventListener('DOMContentLoaded', showGif());


// GRADE CALCULATOR FOR S1

var ls2control = document.getElementById('ls2c');
var ls2exam = document.getElementById('ls2e');
var ls2avg = document.getElementById('ls2avg');
var ls2coeff = document.getElementById('ls2coeff');
var emcontrol = document.getElementById('emc');
var emexam = document.getElementById('eme');
var emavg = document.getElementById('emavg');
var emcoeff = document.getElementById('emcoeff');
var cacontrol = document.getElementById('cac');
var caexam = document.getElementById('cae');
var caavg = document.getElementById('caavg');
var cacoeff = document.getElementById('cacoeff');
var pecontrol = document.getElementById('pec');
var peexam = document.getElementById('pee');
var peavg = document.getElementById('peavg');
var pecoeff = document.getElementById('pecoeff');
var procontrol = document.getElementById('proc');
var proexam = document.getElementById('proe');
var proavg = document.getElementById('proavg');
var procoeff = document.getElementById('procoeff');
var mpexam = document.getElementById('mpe');
var mpavg = document.getElementById('mpavg');
var mpcoeff = document.getElementById('mpcoeff');
var pelab = document.getElementById('pelab');
var pelabavg = document.getElementById('pelabavg');
var pelabcoeff = document.getElementById('pelabcoeff');
var prolab= document.getElementById('prolab');
var prolabavg = document.getElementById('prolabavg');
var prolabcoeff = document.getElementById('prolabcoeff');

var s1average = document.getElementById('s1avg');
if (isNaN(Number(s1average.innerText)) || s1average.innerText ==''){
  s1average.innerHTML = '0.00';
}


let invalid = document.getElementById('invalid');


let s1coeffs = parseInt(Number(ls2coeff.innerText) + Number(emcoeff.innerText) + Number(cacoeff.innerText) + Number(pecoeff.innerText) + Number(mpcoeff.innerText) + Number(procoeff.innerText) + Number(prolabcoeff.innerText) + Number(pelabcoeff.innerText)) ;
let s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(proavg.innerText * procoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(prolabavg.innerText * prolabcoeff.innerText));
ls2control.addEventListener('input', function(){

  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
  emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
  caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
  peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
  proavg.innerHTML = Number(calcAvg(procontrol.value,proexam.value));
  mpavg.innerHTML = Number(mpexam.value);
  
  pelabavg.innerHTML = Number(pelab.value);
  prolabavg.innerHTML = Number(prolab.value);

  if(Number(ls2control.value) < 0 || Number(ls2control.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }
 
  s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(mpavg.innerText * mpcoeff.innerText) + Number(proavg.innerText * procoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(prolabavg.innerText * prolabcoeff.innerText));

  s1average.innerHTML = (Number(s1sum/s1coeffs).toFixed(2));

  if(Number(s1average.innerHTML) <10){
    s1average.style.color = 'red';
  }
  if(Number(s1average.innerHTML) >=10){
    s1average.style.color = 'green';
  }
  if(Number(s1average.innerHTML)>20 || Number(s1average.innerHTML)<=0){
    s1average.style.color = 'black';
  }

})

ls2exam.addEventListener('input', function(){
  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
  emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
  caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
  peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
  proavg.innerHTML = Number(calcAvg(procontrol.value,proexam.value));
  mpavg.innerHTML = Number(mpexam.value);
  
  pelabavg.innerHTML = Number(pelab.value);
  prolabavg.innerHTML = Number(prolab.value);


  if(Number(ls2exam.value) < 0 || Number(ls2exam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(mpavg.innerText * mpcoeff.innerText) + Number(proavg.innerText * procoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(prolabavg.innerText * prolabcoeff.innerText));
 
  s1average.innerHTML = (Number(s1sum/s1coeffs).toFixed(2));

  if(Number(s1average.innerHTML) <10){
    s1average.style.color = 'red';
  }
  if(Number(s1average.innerHTML) >=10){
    s1average.style.color = 'green';
  }
  if(Number(s1average.innerHTML)>20 || Number(s1average.innerHTML)<=0){
    s1average.style.color = 'black';
  }
})

emcontrol.addEventListener('input', function(){
  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
  emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
  caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
  peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
  proavg.innerHTML = Number(calcAvg(procontrol.value,proexam.value));
  mpavg.innerHTML = Number(mpexam.value);
  
  pelabavg.innerHTML = Number(pelab.value);
  prolabavg.innerHTML = Number(prolab.value);

  if(Number(emcontrol.value) < 0 || Number(emcontrol.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(mpavg.innerText * mpcoeff.innerText) + Number(proavg.innerText * procoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(prolabavg.innerText * prolabcoeff.innerText));
 

  s1average.innerHTML = (Number(s1sum/s1coeffs).toFixed(2));

  if(Number(s1average.innerHTML) <10){
    s1average.style.color = 'red';
  }
  if(Number(s1average.innerHTML) >=10){
    s1average.style.color = 'green';
  }
  if(Number(s1average.innerHTML)>20 || Number(s1average.innerHTML)<=0){
    s1average.style.color = 'black';
  }
  

})

emexam.addEventListener('input', function(){
  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
  emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
  caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
  peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
  proavg.innerHTML = Number(calcAvg(procontrol.value,proexam.value));
  mpavg.innerHTML = Number(mpexam.value);
  
  pelabavg.innerHTML = Number(pelab.value);
  prolabavg.innerHTML = Number(prolab.value);

  if(Number(emexam.value) < 0 || Number(emexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(mpavg.innerText * mpcoeff.innerText) + Number(proavg.innerText * procoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(prolabavg.innerText * prolabcoeff.innerText));
 

  s1average.innerHTML = (Number(s1sum/s1coeffs).toFixed(2));

  if(Number(s1average.innerHTML) <10){
    s1average.style.color = 'red';
  }
  if(Number(s1average.innerHTML) >=10){
    s1average.style.color = 'green';
  }
  if(Number(s1average.innerHTML)>20 || Number(s1average.innerHTML)<=0){
    s1average.style.color = 'black';
  }
})

cacontrol.addEventListener('input', function(){
  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
  emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
  caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
  peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
  proavg.innerHTML = Number(calcAvg(procontrol.value,proexam.value));
  mpavg.innerHTML = Number(mpexam.value);
  
  pelabavg.innerHTML = Number(pelab.value);
  prolabavg.innerHTML = Number(prolab.value);

  s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(mpavg.innerText * mpcoeff.innerText) + Number(proavg.innerText * procoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(prolabavg.innerText * prolabcoeff.innerText));
 

  if(Number(cacontrol.value) < 0 || Number(cacontrol.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1average.innerHTML = (Number(s1sum/s1coeffs).toFixed(2));

  if(Number(s1average.innerHTML) <10){
    s1average.style.color = 'red';
  }
  if(Number(s1average.innerHTML) >=10){
    s1average.style.color = 'green';
  }
  if(Number(s1average.innerHTML)>20 || Number(s1average.innerHTML)<=0){
    s1average.style.color = 'black';
  }
})

caexam.addEventListener('input', function(){
  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
  emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
  caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
  peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
  proavg.innerHTML = Number(calcAvg(procontrol.value,proexam.value));
  mpavg.innerHTML = Number(mpexam.value);
  pelabavg.innerHTML = Number(pelab.value);
  prolabavg.innerHTML = Number(prolab.value);

  if(Number(caexam.value) < 0 || Number(caexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(mpavg.innerText * mpcoeff.innerText) + Number(proavg.innerText * procoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(prolabavg.innerText * prolabcoeff.innerText));
  

  s1average.innerHTML = (Number(s1sum/s1coeffs).toFixed(2));

  if(Number(s1average.innerHTML) <10){
    s1average.style.color = 'red';
  }
  if(Number(s1average.innerHTML) >=10){
    s1average.style.color = 'green';
  }
  if(Number(s1average.innerHTML)>20 || Number(s1average.innerHTML)<=0){
    s1average.style.color = 'black';
  }
})

pecontrol.addEventListener('input', function(){
  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
  emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
  caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
  peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
  proavg.innerHTML = Number(calcAvg(procontrol.value,proexam.value));
  mpavg.innerHTML = Number(mpexam.value);
  
  pelabavg.innerHTML = Number(pelab.value);
  prolabavg.innerHTML = Number(prolab.value);

  if(Number(pecontrol.value) < 0 || Number(pecontrol.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(mpavg.innerText * mpcoeff.innerText) + Number(proavg.innerText * procoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(prolabavg.innerText * prolabcoeff.innerText));
  

  s1average.innerHTML = (Number(s1sum/s1coeffs).toFixed(2));

  if(Number(s1average.innerHTML) <10){
    s1average.style.color = 'red';
  }
  if(Number(s1average.innerHTML) >=10){
    s1average.style.color = 'green';
  }
  if(Number(s1average.innerHTML)>20 || Number(s1average.innerHTML)<=0){
    s1average.style.color = 'black';
  }
})

peexam.addEventListener('input', function(){
  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
  emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
  caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
  peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
  proavg.innerHTML = Number(calcAvg(procontrol.value,proexam.value));
  mpavg.innerHTML = Number(mpexam.value);
  
  pelabavg.innerHTML = Number(pelab.value);
  prolabavg.innerHTML = Number(prolab.value);

  if(Number(peexam.value) < 0 || Number(peexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(mpavg.innerText * mpcoeff.innerText) + Number(proavg.innerText * procoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(prolabavg.innerText * prolabcoeff.innerText));
  

  s1average.innerHTML = (Number(s1sum/s1coeffs).toFixed(2));

  if(Number(s1average.innerHTML) <10){
    s1average.style.color = 'red';
  }
  if(Number(s1average.innerHTML) >=10){
    s1average.style.color = 'green';
  }
  if(Number(s1average.innerHTML)>20 || Number(s1average.innerHTML)<=0){
    s1average.style.color = 'black';
  }

})

procontrol.addEventListener('input', function(){
  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
  emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
  caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
  peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
  proavg.innerHTML = Number(calcAvg(procontrol.value,proexam.value));
  mpavg.innerHTML = Number(mpexam.value);
  
  pelabavg.innerHTML = Number(pelab.value);
  prolabavg.innerHTML = Number(prolab.value);

  if(Number(procontrol.value) < 0 || Number(procontrol.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(mpavg.innerText * mpcoeff.innerText) + Number(proavg.innerText * procoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(prolabavg.innerText * prolabcoeff.innerText));
  
  
  s1average.innerHTML = (Number(s1sum/s1coeffs).toFixed(2));

  if(Number(s1average.innerHTML) <10){
    s1average.style.color = 'red';
  }
  if(Number(s1average.innerHTML) >=10){
    s1average.style.color = 'green';
  }
  if(Number(s1average.innerHTML)>20 || Number(s1average.innerHTML)<=0){
    s1average.style.color = 'black';
  }
})

proexam.addEventListener('input', function(){
  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
  emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
  caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
  peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
  proavg.innerHTML = Number(calcAvg(procontrol.value,proexam.value));
  mpavg.innerHTML = Number(mpexam.value);
  
  pelabavg.innerHTML = Number(pelab.value);
  prolabavg.innerHTML = Number(prolab.value);

  if(Number(proexam.value) < 0 || Number(proexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(mpavg.innerText * mpcoeff.innerText) + Number(proavg.innerText * procoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(prolabavg.innerText * prolabcoeff.innerText));
  

  s1average.innerHTML = (Number(s1sum/s1coeffs).toFixed(2));

  if(Number(s1average.innerHTML) <10){
    s1average.style.color = 'red';
  }
  if(Number(s1average.innerHTML) >=10){
    s1average.style.color = 'green';
  }
  if(Number(s1average.innerHTML)>20 || Number(s1average.innerHTML)<=0){
    s1average.style.color = 'black';
  }
})

mpexam.addEventListener('input', function(){
  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
  emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
  caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
  peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
  proavg.innerHTML = Number(calcAvg(procontrol.value,proexam.value));
  mpavg.innerHTML = Number(mpexam.value);
  
  pelabavg.innerHTML = Number(pelab.value);
  prolabavg.innerHTML = Number(prolab.value);


  if(Number(mpexam.value) < 0 || Number(mpexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }
  s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(mpavg.innerText * mpcoeff.innerText) + Number(proavg.innerText * procoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(prolabavg.innerText * prolabcoeff.innerText));

  

  s1average.innerHTML = (Number(s1sum/s1coeffs).toFixed(2));

  if(Number(s1average.innerHTML) <10){
    s1average.style.color = 'red';
  }
  if(Number(s1average.innerHTML) >=10){
    s1average.style.color = 'green';
  }
  if(Number(s1average.innerHTML)>20 || Number(s1average.innerHTML)<=0){
    s1average.style.color = 'black';
  }
})


prolab.addEventListener('input', function(){
  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
  emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
  caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
  peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
  proavg.innerHTML = Number(calcAvg(procontrol.value,proexam.value));
  mpavg.innerHTML = Number(mpexam.value);
  
  pelabavg.innerHTML = Number(pelab.value);
  prolabavg.innerHTML = Number(prolab.value);

  if(Number(prolab.value) < 0 || Number(prolab.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(mpavg.innerText * mpcoeff.innerText) + Number(proavg.innerText * procoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(prolabavg.innerText * prolabcoeff.innerText));
 

  s1average.innerHTML = (Number(s1sum/s1coeffs).toFixed(2));

  if(Number(s1average.innerHTML) <10){
    s1average.style.color = 'red';
  }
  if(Number(s1average.innerHTML) >=10){
    s1average.style.color = 'green';
  }
  if(Number(s1average.innerHTML)>20 || Number(s1average.innerHTML)<=0){
    s1average.style.color = 'black';
  }
})

pelab.addEventListener('input', function(){
  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
  emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
  caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
  peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
  proavg.innerHTML = Number(calcAvg(procontrol.value,proexam.value));
  mpavg.innerHTML = Number(mpexam.value);
  pelabavg.innerHTML = Number(pelab.value);
  prolabavg.innerHTML = Number(prolab.value);

  if(Number(pelab.value) < 0 || Number(pelab.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(mpavg.innerText * mpcoeff.innerText) + Number(proavg.innerText * procoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(prolabavg.innerText * prolabcoeff.innerText));
 

  s1average.innerHTML = (Number(s1sum/s1coeffs).toFixed(2));

  if(Number(s1average.innerHTML) <10){
    s1average.style.color = 'red';
  }
  if(Number(s1average.innerHTML) >=10){
    s1average.style.color = 'green';
  }
  if(Number(s1average.innerHTML)>20 || Number(s1average.innerHTML)<=0){
    s1average.style.color = 'black';
  }
})



// Grade calculator for S2

let comcontrol = document.getElementById('comc');
let comexam = document.getElementById("come");
let comaverage = document.getElementById("comavg");
let comcoeff = document.getElementById("comcoeff");
let lcscontrol = document.getElementById("lcsc");
let lcsexam = document.getElementById("lcse");
let lcsaverage = document.getElementById("lcsavg");
let lcscoeff = document.getElementById("lcscoeff");
let z80control = document.getElementById("z80c");
let z80exam = document.getElementById("z80e");
let z80average = document.getElementById("z80avg");
let z80coeff = document.getElementById("z80coeff");
let encontrol = document.getElementById("enc");
let enexam = document.getElementById("ene");
let enaverage = document.getElementById("enavg");
let encoeff = document.getElementById("encoeff");
let manexam = document.getElementById("mane");
let manaverage = document.getElementById("manavg");
let mancoeff = document.getElementById("mancoeff");
let z80lab = document.getElementById("z80lab");
let z80labaverage = document.getElementById("z80labavg");
let z80labcoeff = document.getElementById("z80labcoeff");
let lcslab = document.getElementById("lcslab");
let lcslabaverage = document.getElementById("lcslabavg");
let lcslabcoeff = document.getElementById("lcslabcoeff");
let comlab = document.getElementById("comlab");
let comlabaverage = document.getElementById("comlabavg");
let comlabcoeff = document.getElementById("comlabcoeff");
let projectcontrol = document.getElementById("projc");
let projectexam = document.getElementById("proje");
let projectaverage = document.getElementById("projavg");
let projectcoeff = document.getElementById("projcoeff");
let s2sum;
let s2coeffs;

let s2average = document.getElementById("s2avg");
if (isNaN(Number(s2average.innerText)) || s2average.innerText ==''){
  s2average.innerHTML = '0.00';
}

if(!s2average.textContent.trim()){
  s2average.textContent = '0.00';
}

s2coeffs = parseInt(Number(comcoeff.innerText) + Number(lcscoeff.innerText) + Number(z80coeff.innerText) + Number(encoeff.innerText) + Number(mancoeff.innerText) + Number(projectcoeff.innerText) + Number(comlabcoeff.innerText) + Number(lcslabcoeff.innerText) + Number(z80labcoeff.innerText));
comcontrol.addEventListener('input', function(){
  comaverage.innerHTML = Number(calcAvg(comcontrol.value, comexam.value));
  enaverage.innerHTML = Number(calcAvg(encontrol.value, enexam.value));
  lcsaverage.innerHTML = Number(calcAvg(lcscontrol.value, lcsexam.value));
  z80average.innerHTML = Number(calcAvg(z80control.value, z80exam.value));
projectaverage.innerHTML = Number(projectexam.value);
  manaverage.innerHTML = Number(manexam.value);
  z80labaverage.innerHTML = Number(z80lab.value);
  lcslabaverage.innerHTML= Number(lcslab.value);
  comlabaverage.innerHTML = Number(comlab.value);

  if(Number(comcontrol.value) < 0 || Number(comcontrol.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s2sum = Number(Number(comaverage.innerText * comcoeff.innerText) + Number(lcsaverage.innerText * lcscoeff.innerText) + Number(z80average.innerText * z80coeff.innerText) + Number(enaverage.innerText * encoeff.innerText) + Number(manaverage.innerText * mancoeff.innerText) + Number(projectaverage.innerText * projectcoeff.innerText) + Number(comlabaverage.innerText * comlabcoeff.innerText) + Number(lcslabaverage.innerText * lcslabcoeff.innerText) + Number(z80labaverage.innerText * z80labcoeff.innerText));

  s2average.innerHTML = Number(avg(s2sum,s2coeffs));

  if(Number(avg(s2sum,s2coeffs))<10){
    s2average.style.color = 'red';
  }
  if(Number(avg(s2sum,s2coeffs))>=10){
    s2average.style.color = 'green';
  }
  if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
    s2average.style.color = 'black';
  }

})

comexam.addEventListener('input', function(){
  comaverage.innerHTML = Number(calcAvg(comcontrol.value, comexam.value));
  enaverage.innerHTML = Number(calcAvg(encontrol.value, enexam.value));
  lcsaverage.innerHTML = Number(calcAvg(lcscontrol.value, lcsexam.value));
  z80average.innerHTML = Number(calcAvg(z80control.value, z80exam.value));
projectaverage.innerHTML = Number(projectexam.value);
  manaverage.innerHTML = Number(manexam.value);
  z80labaverage.innerHTML = Number(z80lab.value);
  lcslabaverage.innerHTML = Number(lcslab.value);
  comlabaverage.innerHTML = Number(comlab.value);

  if(Number(comexam.value) < 0 || Number(comexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s2sum = Number(Number(comaverage.innerText * comcoeff.innerText) + Number(lcsaverage.innerText * lcscoeff.innerText) + Number(z80average.innerText * z80coeff.innerText) + Number(enaverage.innerText * encoeff.innerText) + Number(manaverage.innerText * mancoeff.innerText) + Number(projectaverage.innerText * projectcoeff.innerText) + Number(comlabaverage.innerText * comlabcoeff.innerText) + Number(lcslabaverage.innerText * lcslabcoeff.innerText) + Number(z80labaverage.innerText * z80labcoeff.innerText));

  s2average.innerHTML = Number(avg(s2sum,s2coeffs));
  if(Number(avg(s2sum,s2coeffs))<10){
    s2average.style.color = 'red';
  }
  if(Number(avg(s2sum,s2coeffs))>=10){
    s2average.style.color = 'green';
  }
  if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
    s2average.style.color = 'black';
  }

})

lcscontrol.addEventListener('input', function(){
  comaverage.innerHTML = Number(calcAvg(comcontrol.value, comexam.value));
  enaverage.innerHTML = Number(calcAvg(encontrol.value, enexam.value));
  lcsaverage.innerHTML = Number(calcAvg(lcscontrol.value, lcsexam.value));
  z80average.innerHTML = Number(calcAvg(z80control.value, z80exam.value));
projectaverage.innerHTML = Number(projectexam.value);
  manaverage.innerHTML = Number(manexam.value);
  z80labaverage.innerHTML = Number(z80lab.value);
  lcslabaverage.innerHTML = Number(lcslab.value);
  comlabaverage.innerHTML = Number(comlab.value);

  if(Number(lcscontrol.value) < 0 || Number(lcscontrol.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s2sum = Number(Number(comaverage.innerText * comcoeff.innerText) + Number(lcsaverage.innerText * lcscoeff.innerText) + Number(z80average.innerText * z80coeff.innerText) + Number(enaverage.innerText * encoeff.innerText) + Number(manaverage.innerText * mancoeff.innerText) + Number(projectaverage.innerText * projectcoeff.innerText) + Number(comlabaverage.innerText * comlabcoeff.innerText) + Number(lcslabaverage.innerText * lcslabcoeff.innerText) + Number(z80labaverage.innerText * z80labcoeff.innerText));

  s2average.innerHTML = avg(s2sum, s2coeffs);

  if(Number(avg(s2sum,s2coeffs))<10){
    s2average.style.color = 'red';
  }
  if(Number(avg(s2sum,s2coeffs))>=10){
    s2average.style.color = 'green';
  }
  if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
    s2average.style.color = 'black';
  }

})

lcsexam.addEventListener('input', function(){
  comaverage.innerHTML = Number(calcAvg(comcontrol.value, comexam.value));
  enaverage.innerHTML = Number(calcAvg(encontrol.value, enexam.value));
  lcsaverage.innerHTML = Number(calcAvg(lcscontrol.value, lcsexam.value));
  z80average.innerHTML = Number(calcAvg(z80control.value, z80exam.value));
projectaverage.innerHTML = Number(projectexam.value);
  manaverage.innerHTML = Number(manexam.value);
  z80labaverage.innerHTML = Number(z80lab.value);
  lcslabaverage.innerHTML = Number(lcslab.value);
  comlabaverage.innerHTML = Number(comlab.value);

  if(Number(lcsexam.value) < 0 || Number(lcsexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s2sum = Number(Number(comaverage.innerText * comcoeff.innerText) + Number(lcsaverage.innerText * lcscoeff.innerText) + Number(z80average.innerText * z80coeff.innerText) + Number(enaverage.innerText * encoeff.innerText) + Number(manaverage.innerText * mancoeff.innerText) + Number(projectaverage.innerText * projectcoeff.innerText) + Number(comlabaverage.innerText * comlabcoeff.innerText) + Number(lcslabaverage.innerText * lcslabcoeff.innerText) + Number(z80labaverage.innerText * z80labcoeff.innerText));

  s2average.innerHTML = avg(s2sum, s2coeffs);

  if(Number(avg(s2sum,s2coeffs))<10){
    s2average.style.color = 'red';
  }
  if(Number(avg(s2sum,s2coeffs))>=10){
    s2average.style.color = 'green';
  }
  if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
    s2average.style.color = 'black';
  }
})

z80control.addEventListener('input', function(){
  comaverage.innerHTML = Number(calcAvg(comcontrol.value, comexam.value));
  enaverage.innerHTML = Number(calcAvg(encontrol.value, enexam.value));
  lcsaverage.innerHTML = Number(calcAvg(lcscontrol.value, lcsexam.value));
  z80average.innerHTML = Number(calcAvg(z80control.value, z80exam.value));
projectaverage.innerHTML = Number(projectexam.value);
  manaverage.innerHTML = Number(manexam.value);
  z80labaverage.innerHTML = Number(z80lab.value);
  lcslabaverage.innerHTML = Number(lcslab.value);
  comlabaverage.innerHTML = Number(comlab.value);

  if(Number(z80control.value) < 0 || Number(z80control.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s2sum = Number(Number(comaverage.innerText * comcoeff.innerText) + Number(lcsaverage.innerText * lcscoeff.innerText) + Number(z80average.innerText * z80coeff.innerText) + Number(enaverage.innerText * encoeff.innerText) + Number(manaverage.innerText * mancoeff.innerText) + Number(projectaverage.innerText * projectcoeff.innerText) + Number(comlabaverage.innerText * comlabcoeff.innerText) + Number(lcslabaverage.innerText * lcslabcoeff.innerText) + Number(z80labaverage.innerText * z80labcoeff.innerText));

  s2average.innerHTML = avg(s2sum, s2coeffs);

  if(Number(avg(s2sum,s2coeffs))<10){
    s2average.style.color = 'red';
  }
  if(Number(avg(s2sum,s2coeffs))>=10){
    s2average.style.color = 'green';
  }
  if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
    s2average.style.color = 'black';
  }
})

z80exam.addEventListener('input', () => {
  comaverage.innerHTML = Number(calcAvg(comcontrol.value, comexam.value));
  enaverage.innerHTML = Number(calcAvg(encontrol.value, enexam.value));
  lcsaverage.innerHTML = Number(calcAvg(lcscontrol.value, lcsexam.value));
  z80average.innerHTML = Number(calcAvg(z80control.value, z80exam.value));
projectaverage.innerHTML = Number(projectexam.value);
  manaverage.innerHTML = Number(manexam.value);
  z80labaverage.innerHTML = Number(z80lab.value);
  lcslabaverage.innerHTML = Number(lcslab.value);
  comlabaverage.innerHTML = Number(comlab.value);

  if(Number(z80exam.value) < 0 || Number(z80exam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s2sum = Number(Number(comaverage.innerText * comcoeff.innerText) + Number(lcsaverage.innerText * lcscoeff.innerText) + Number(z80average.innerText * z80coeff.innerText) + Number(enaverage.innerText * encoeff.innerText) + Number(manaverage.innerText * mancoeff.innerText) + Number(projectaverage.innerText * projectcoeff.innerText) + Number(comlabaverage.innerText * comlabcoeff.innerText) + Number(lcslabaverage.innerText * lcslabcoeff.innerText) + Number(z80labaverage.innerText * z80labcoeff.innerText));

  s2average.innerHTML = avg(s2sum, s2coeffs);

  if(Number(avg(s2sum,s2coeffs))<10){
    s2average.style.color = 'red';
  }
  if(Number(avg(s2sum,s2coeffs))>=10){
    s2average.style.color = 'green';
  }
  if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
    s2average.style.color = 'black';
  }
})

encontrol.addEventListener('input', () => {
  comaverage.innerHTML = Number(calcAvg(comcontrol.value, comexam.value));
  enaverage.innerHTML = Number(calcAvg(encontrol.value, enexam.value));
  lcsaverage.innerHTML = Number(calcAvg(lcscontrol.value, lcsexam.value));
  z80average.innerHTML = Number(calcAvg(z80control.value, z80exam.value));
projectaverage.innerHTML = Number(projectexam.value);
  manaverage.innerHTML = Number(manexam.value);
  z80labaverage.innerHTML = Number(z80lab.value);
  lcslabaverage.innerHTML = Number(lcslab.value);
  comlabaverage.innerHTML = Number(comlab.value);

  if(Number(encontrol.value) < 0 || Number(encontrol.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s2sum = Number(Number(comaverage.innerText * comcoeff.innerText) + Number(lcsaverage.innerText * lcscoeff.innerText) + Number(z80average.innerText * z80coeff.innerText) + Number(enaverage.innerText * encoeff.innerText) + Number(manaverage.innerText * mancoeff.innerText) + Number(projectaverage.innerText * projectcoeff.innerText) + Number(comlabaverage.innerText * comlabcoeff.innerText) + Number(lcslabaverage.innerText * lcslabcoeff.innerText) + Number(z80labaverage.innerText * z80labcoeff.innerText));

  s2average.innerHTML = avg(s2sum, s2coeffs);

  if(Number(avg(s2sum,s2coeffs))<10){
    s2average.style.color = 'red';
  }
  if(Number(avg(s2sum,s2coeffs))>=10){
    s2average.style.color = 'green';
  }
  if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
    s2average.style.color = 'black';
  }
})

enexam.addEventListener('input', () => {
  comaverage.innerHTML = Number(calcAvg(comcontrol.value, comexam.value));
  enaverage.innerHTML = Number(calcAvg(encontrol.value, enexam.value));
  lcsaverage.innerHTML = Number(calcAvg(lcscontrol.value, lcsexam.value));
  z80average.innerHTML = Number(calcAvg(z80control.value, z80exam.value));
projectaverage.innerHTML = Number(projectexam.value);
  manaverage.innerHTML = Number(manexam.value);
  z80labaverage.innerHTML = Number(z80lab.value);
  lcslabaverage.innerHTML = Number(lcslab.value);
  comlabaverage.innerHTML = Number(comlab.value);

  if(Number(enexam.value) < 0 || Number(enexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s2sum = Number(Number(comaverage.innerText * comcoeff.innerText) + Number(lcsaverage.innerText * lcscoeff.innerText) + Number(z80average.innerText * z80coeff.innerText) + Number(enaverage.innerText * encoeff.innerText) + Number(manaverage.innerText * mancoeff.innerText) + Number(projectaverage.innerText * projectcoeff.innerText) + Number(comlabaverage.innerText * comlabcoeff.innerText) + Number(lcslabaverage.innerText * lcslabcoeff.innerText) + Number(z80labaverage.innerText * z80labcoeff.innerText));

  s2average.innerHTML = avg(s2sum, s2coeffs);

  if(Number(avg(s2sum,s2coeffs))<10){
    s2average.style.color = 'red';
  }
  if(Number(avg(s2sum,s2coeffs))>=10){
    s2average.style.color = 'green';
  }
  if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
    s2average.style.color = 'black';
  }
})

manexam.addEventListener('input', () => {
  comaverage.innerHTML = Number(calcAvg(comcontrol.value, comexam.value));
  enaverage.innerHTML = Number(calcAvg(encontrol.value, enexam.value));
  lcsaverage.innerHTML = Number(calcAvg(lcscontrol.value, lcsexam.value));
  z80average.innerHTML = Number(calcAvg(z80control.value, z80exam.value));
projectaverage.innerHTML = Number(projectexam.value);
  manaverage.innerHTML = Number(manexam.value);
  z80labaverage.innerHTML = Number(z80lab.value);
  lcslabaverage.innerHTML = Number(lcslab.value);
  comlabaverage.innerHTML = Number(comlab.value);

  if(Number(manexam.value) < 0 || Number(manexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s2sum = Number(Number(comaverage.innerText * comcoeff.innerText) + Number(lcsaverage.innerText * lcscoeff.innerText) + Number(z80average.innerText * z80coeff.innerText) + Number(enaverage.innerText * encoeff.innerText) + Number(manaverage.innerText * mancoeff.innerText) + Number(projectaverage.innerText * projectcoeff.innerText) + Number(comlabaverage.innerText * comlabcoeff.innerText) + Number(lcslabaverage.innerText * lcslabcoeff.innerText) + Number(z80labaverage.innerText * z80labcoeff.innerText));

  s2average.innerHTML = avg(s2sum, s2coeffs);

  if(Number(avg(s2sum,s2coeffs))<10){
    s2average.style.color = 'red';
  }
  if(Number(avg(s2sum,s2coeffs))>=10){
    s2average.style.color = 'green';
  }
  if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
    s2average.style.color = 'black';
  }
})

z80lab.addEventListener('input', () => {
  comaverage.innerHTML = Number(calcAvg(comcontrol.value, comexam.value));
  enaverage.innerHTML = Number(calcAvg(encontrol.value, enexam.value));
  lcsaverage.innerHTML = Number(calcAvg(lcscontrol.value, lcsexam.value));
  z80average.innerHTML = Number(calcAvg(z80control.value, z80exam.value));
projectaverage.innerHTML = Number(projectexam.value);
  manaverage.innerHTML = Number(manexam.value);
  z80labaverage.innerHTML = Number(z80lab.value);
  lcslabaverage.innerHTML = Number(lcslab.value);
  comlabaverage.innerHTML = Number(comlab.value);

  if(Number(z80lab.value) < 0 || Number(z80lab.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s2sum = Number(Number(comaverage.innerText * comcoeff.innerText) + Number(lcsaverage.innerText * lcscoeff.innerText) + Number(z80average.innerText * z80coeff.innerText) + Number(enaverage.innerText * encoeff.innerText) + Number(manaverage.innerText * mancoeff.innerText) + Number(projectaverage.innerText * projectcoeff.innerText) + Number(comlabaverage.innerText * comlabcoeff.innerText) + Number(lcslabaverage.innerText * lcslabcoeff.innerText) + Number(z80labaverage.innerText * z80labcoeff.innerText));

  s2average.innerHTML = avg(s2sum, s2coeffs);

  if(Number(avg(s2sum,s2coeffs))<10){
    s2average.style.color = 'red';
  }
  if(Number(avg(s2sum,s2coeffs))>=10){
    s2average.style.color = 'green';
  }
  if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
    s2average.style.color = 'black';
  }
})

comlab.addEventListener('input', () => {
  comaverage.innerHTML = Number(calcAvg(comcontrol.value, comexam.value));
  enaverage.innerHTML = Number(calcAvg(encontrol.value, enexam.value));
  lcsaverage.innerHTML = Number(calcAvg(lcscontrol.value, lcsexam.value));
  z80average.innerHTML = Number(calcAvg(z80control.value, z80exam.value));
projectaverage.innerHTML = Number(projectexam.value);
  manaverage.innerHTML = Number(manexam.value);
  z80labaverage.innerHTML = Number(z80lab.value);
  lcslabaverage.innerHTML = Number(lcslab.value);
  comlabaverage.innerHTML = Number(comlab.value);

  if(Number(comlab.value) < 0 || Number(comlab.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s2sum = Number(Number(comaverage.innerText * comcoeff.innerText) + Number(lcsaverage.innerText * lcscoeff.innerText) + Number(z80average.innerText * z80coeff.innerText) + Number(enaverage.innerText * encoeff.innerText) + Number(manaverage.innerText * mancoeff.innerText) + Number(projectaverage.innerText * projectcoeff.innerText) + Number(comlabaverage.innerText * comlabcoeff.innerText) + Number(lcslabaverage.innerText * lcslabcoeff.innerText) + Number(z80labaverage.innerText * z80labcoeff.innerText));

  s2average.innerHTML = avg(s2sum, s2coeffs);

  if(Number(avg(s2sum,s2coeffs))<10){
    s2average.style.color = 'red';
  }
  if(Number(avg(s2sum,s2coeffs))>=10){
    s2average.style.color = 'green';
  }
  if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
    s2average.style.color = 'black';
  }
})

lcslab.addEventListener('input', () => {
  comaverage.innerHTML = Number(calcAvg(comcontrol.value, comexam.value));
  enaverage.innerHTML = Number(calcAvg(encontrol.value, enexam.value));
  lcsaverage.innerHTML = Number(calcAvg(lcscontrol.value, lcsexam.value));
  z80average.innerHTML = Number(calcAvg(z80control.value, z80exam.value));
projectaverage.innerHTML = Number(projectexam.value);
  manaverage.innerHTML = Number(manexam.value);
  z80labaverage.innerHTML = Number(z80lab.value);
  lcslabaverage.innerHTML = Number(lcslab.value);
  comlabaverage.innerHTML = Number(comlab.value);

  if(Number(lcslab.value) < 0 || Number(lcslab.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s2sum = Number(Number(comaverage.innerText * comcoeff.innerText) + Number(lcsaverage.innerText * lcscoeff.innerText) + Number(z80average.innerText * z80coeff.innerText) + Number(enaverage.innerText * encoeff.innerText) + Number(manaverage.innerText * mancoeff.innerText) + Number(projectaverage.innerText * projectcoeff.innerText) + Number(comlabaverage.innerText * comlabcoeff.innerText) + Number(lcslabaverage.innerText * lcslabcoeff.innerText) + Number(z80labaverage.innerText * z80labcoeff.innerText));

  s2average.innerHTML = avg(s2sum, s2coeffs);

  if(Number(avg(s2sum,s2coeffs))<10){
    s2average.style.color = 'red';
  }
  if(Number(avg(s2sum,s2coeffs))>=10){
    s2average.style.color = 'green';
  }
  if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
    s2average.style.color = 'black';
  }
})


projectexam.addEventListener('input', () => {
  comaverage.innerHTML = Number(calcAvg(comcontrol.value, comexam.value));
  enaverage.innerHTML = Number(calcAvg(encontrol.value, enexam.value));
  lcsaverage.innerHTML = Number(calcAvg(lcscontrol.value, lcsexam.value));
  z80average.innerHTML = Number(calcAvg(z80control.value, z80exam.value));
  projectaverage.innerHTML = Number(projectexam.value);
  manaverage.innerHTML = Number(manexam.value);
  z80labaverage.innerHTML = Number(z80lab.value);
  lcslabaverage.innerHTML = Number(lcslab.value);
  comlabaverage.innerHTML = Number(comlab.value);

  if(Number(projectexam.value) < 0 || Number(projectexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s2sum = Number(Number(comaverage.innerText * comcoeff.innerText) + Number(lcsaverage.innerText * lcscoeff.innerText) + Number(z80average.innerText * z80coeff.innerText) + Number(enaverage.innerText * encoeff.innerText) + Number(manaverage.innerText * mancoeff.innerText) + Number(projectaverage.innerText * projectcoeff.innerText) + Number(comlabaverage.innerText * comlabcoeff.innerText) + Number(lcslabaverage.innerText * lcslabcoeff.innerText) + Number(z80labaverage.innerText * z80labcoeff.innerText));

  s2average.innerHTML = avg(s2sum, s2coeffs);

  if(Number(avg(s2sum,s2coeffs))<10){
    s2average.style.color = 'red';
  }
  if(Number(avg(s2sum,s2coeffs))>=10){
    s2average.style.color = 'green';
  }
  if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
    s2average.style.color = 'black';
  }
})




// grade visualization

  // function updateVisualization() {
  //   const container = document.querySelector('.grade-bars');
  //   container.innerHTML = '';
    
  //   const subjects = {
  //     'Communication': Number(comaverage.innerHTML),
  //     'Control Systems': Number(lcsaverage.innerHTML),
  //     'Z80': Number(z80average.innerHTML),
  //     'English': Number(enaverage.innerHTML),
  //     'Project': Number(projectaverage.innerHTML),
  //     'Management': Number(manaverage.innerHTML),

  //   };
    
  //   for (const [subject, grade] of Object.entries(subjects)) {
  //     const bar = document.createElement('div');
  //     bar.className = 'grade-bar';
  //     bar.innerHTML = `
  //       <div class="subject">${subject}</div>
  //       <div class="bar-container">
  //         <div class="bar" style="width: ${grade * 5}%; background: ${grade >= 10 ? '#4CAF50' : '#F44336'}"></div>
  //       </div>
  //       <div class="grade">${grade.toFixed(2)}</div>
  //     `;
  //     container.appendChild(bar);
  //   }
  // }
  
  // updateVisualization();






// functions

function calcAvg(control,exam){
    result = parseFloat(control*0.4 + exam*0.6);
    return result.toFixed(2);
}
function avg(a,b){
    s1average = a/b;
    return Number(s1average.toFixed(2));
}