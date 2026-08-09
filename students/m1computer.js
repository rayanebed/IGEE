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
      s2.style.display = 'none';
      s1select.addEventListener('click',function(){
        if((s1.style.display) === 'none'){
          s1.style.display = '';
          // invalid.style.display = '';
          if(s2.style.display != 'none'){
            s2.style.display = 'none';
          }
        }
        else{
          s1.style.display = 'none';
          // invalid.style.opacity = '0';
        }
      })

      s2select.addEventListener('click', function(){
        if(s2.style.display === 'none'){
          s2.style.display = 'block';
          // invalid.style.display = '';
          if(s1.style.display != 'none'){
            s1.style.display = 'none';
          }
        }
        else{
          s2.style.display = 'none';
          // invalid.style.opacity = '0';
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
var pelab = document.getElementById('pelab');
var pelabavg = document.getElementById('pelabavg');
var pelabcoeff = document.getElementById('pelabcoeff');
var dbcontrol = document.getElementById('db');
var dbavg = document.getElementById('dbavg');
var dbcoeff = document.getElementById('dbcoeff');
var ailab = document.getElementById('ailab');
var ailabavg = document.getElementById('ailabavg');
var ailabcoeff = document.getElementById('ailabcoeff');
var optlab = document.getElementById('optlab');
var optlabavg = document.getElementById('optlabavg');
var optlabcoeff = document.getElementById('optlabcoeff');
var prolab= document.getElementById('prolab');
var prolabavg = document.getElementById('prolabavg');
var prolabcoeff = document.getElementById('prolabcoeff');
var mplab = document.getElementById('mplab');
var mplabavg = document.getElementById('mplabavg');
var mplabcoeff = document.getElementById('mplabcoeff');
var s1average = document.getElementById('s1avg');

if (isNaN(Number(s1average.innerText)) || s1average.innerText ==''){
s1average.innerHTML = '0.00';
}


let invalid = document.getElementById('invalid');


let s1coeffs = parseInt(Number(ls2coeff.innerText) + Number(emcoeff.innerText) + Number(cacoeff.innerText) + Number(pecoeff.innerText) + Number(ailabcoeff.innerText) + Number(optlabcoeff.innerText) + Number(mplabcoeff.innerText) + Number(dbcoeff.innerText) + Number(pelabcoeff.innerText)); ;
let s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(ailabavg.innerText * ailabcoeff.innerText) + Number(optlabavg.innerText * optlabcoeff.innerText) + Number(mplabavg.innerText * mplabcoeff.innerText) + Number(dbavg.innerText * dbcoeff.innerText));
ls2control.addEventListener('input', function(){

ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
dbavg.innerHTML = Number(dbcontrol.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);
ailabavg.innerHTML = Number(ailab.value);
optlabavg.innerHTML = Number(optlab.value);

if(Number(ls2control.value) < 0 || Number(ls2control.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(ailabavg.innerText * ailabcoeff.innerText) + Number(optlabavg.innerText * optlabcoeff.innerText) + Number(mplabavg.innerText * mplabcoeff.innerText) + Number(dbavg.innerText * dbcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText));if(Number(avg(s1sum,s1coeffs))<10){
  s1average.style.color = 'red';
}
if(Number(avg(s1sum,s1coeffs))>=10){
  s1average.style.color = 'green';
}
if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
  s1average.style.color = 'black';
}
s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

ls2exam.addEventListener('input', function(){
ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
dbavg.innerHTML = Number(dbcontrol.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);
ailabavg.innerHTML = Number(ailab.value);
optlabavg.innerHTML = Number(optlab.value);



if(Number(ls2exam.value) < 0 || Number(ls2exam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(ailabavg.innerText * ailabcoeff.innerText) + Number(optlabavg.innerText * optlabcoeff.innerText) + Number(mplabavg.innerText * mplabcoeff.innerText) + Number(dbavg.innerText * dbcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText));
if(Number(avg(s1sum,s1coeffs))<10){
  s1average.style.color = 'red';
}
if(Number(avg(s1sum,s1coeffs))>=10){
  s1average.style.color = 'green';
}
if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
  s1average.style.color = 'black';
}

 s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

emcontrol.addEventListener('input', function(){
ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));

mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(emcontrol.value) < 0 || Number(emcontrol.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(ailabavg.innerText * ailabcoeff.innerText) + Number(optlabavg.innerText * optlabcoeff.innerText) + Number(mplabavg.innerText * mplabcoeff.innerText) + Number(dbavg.innerText * dbcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText));
if(Number(avg(s1sum,s1coeffs))<10){
  s1average.style.color = 'red';
 
}
if(Number(avg(s1sum,s1coeffs))>=10){
  s1average.style.color = 'green';
}
if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
  s1average.style.color = 'black';
}


s1average.innerHTML = Number(avg(s1sum,s1coeffs));


})

emexam.addEventListener('input', function(){
ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
dbavg.innerHTML = Number(dbcontrol.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);
ailabavg.innerHTML = Number(ailab.value);
optlabavg.innerHTML = Number(optlab.value);


if(Number(emexam.value) < 0 || Number(emexam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(ailabavg.innerText * ailabcoeff.innerText) + Number(optlabavg.innerText * optlabcoeff.innerText) + Number(mplabavg.innerText * mplabcoeff.innerText) + Number(dbavg.innerText * dbcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText));
if(Number(avg(s1sum,s1coeffs))<10){
  s1average.style.color = 'red';
}
if(Number(avg(s1sum,s1coeffs))>=10){
  s1average.style.color = 'green';
}
if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
  s1average.style.color = 'black';
}


s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

cacontrol.addEventListener('input', function(){
ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
dbavg.innerHTML = Number(dbcontrol.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);
ailabavg.innerHTML = Number(ailab.value);
optlabavg.innerHTML = Number(optlab.value);


s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(ailabavg.innerText * ailabcoeff.innerText) + Number(optlabavg.innerText * optlabcoeff.innerText) + Number(mplabavg.innerText * mplabcoeff.innerText) + Number(dbavg.innerText * dbcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText));
if(Number(cacontrol.value) < 0 || Number(cacontrol.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

if(Number(avg(s1sum,s1coeffs))<10){
  s1average.style.color = 'red';
}
if(Number(avg(s1sum,s1coeffs))>=10){
  s1average.style.color = 'green';
}
if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
  s1average.style.color = 'black';
}


s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

caexam.addEventListener('input', function(){
ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
dbavg.innerHTML = Number(dbcontrol.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);
ailabavg.innerHTML = Number(ailab.value);
optlabavg.innerHTML = Number(optlab.value);


if(Number(caexam.value) < 0 || Number(caexam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(ailabavg.innerText * ailabcoeff.innerText) + Number(optlabavg.innerText * optlabcoeff.innerText) + Number(mplabavg.innerText * mplabcoeff.innerText) + Number(dbavg.innerText * dbcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText));
if(Number(avg(s1sum,s1coeffs))<10){
  s1average.style.color = 'red';
}
if(Number(avg(s1sum,s1coeffs))>=10){
  s1average.style.color = 'green';
}
if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
  s1average.style.color = 'black';
}



s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

pecontrol.addEventListener('input', function(){
ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
dbavg.innerHTML = Number(dbcontrol.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);
ailabavg.innerHTML = Number(ailab.value);
optlabavg.innerHTML = Number(optlab.value);


if(Number(pecontrol.value) < 0 || Number(pecontrol.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(ailabavg.innerText * ailabcoeff.innerText) + Number(optlabavg.innerText * optlabcoeff.innerText) + Number(mplabavg.innerText * mplabcoeff.innerText) + Number(dbavg.innerText * dbcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText));
if(Number(avg(s1sum,s1coeffs))<10){
  s1average.style.color = 'red';
}
if(Number(avg(s1sum,s1coeffs))>=10){
  s1average.style.color = 'green';
}
if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
  s1average.style.color = 'black';
}




s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

peexam.addEventListener('input', function(){
ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
dbavg.innerHTML = Number(dbcontrol.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);
ailabavg.innerHTML = Number(ailab.value);
optlabavg.innerHTML = Number(optlab.value);


if(Number(peexam.value) < 0 || Number(peexam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(ailabavg.innerText * ailabcoeff.innerText) + Number(optlabavg.innerText * optlabcoeff.innerText) + Number(mplabavg.innerText * mplabcoeff.innerText) + Number(dbavg.innerText * dbcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText));
if(Number(avg(s1sum,s1coeffs))<10){
  s1average.style.color = 'red';
}
if(Number(avg(s1sum,s1coeffs))>=10){
  s1average.style.color = 'green';
}
if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
  s1average.style.color = 'black';
}



s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

dbcontrol.addEventListener('input', function(){
  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
dbavg.innerHTML = Number(dbcontrol.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);
ailabavg.innerHTML = Number(ailab.value);
optlabavg.innerHTML = Number(optlab.value);



if(Number(dbcontrol.value) < 0 || Number(dbcontrol.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(ailabavg.innerText * ailabcoeff.innerText) + Number(optlabavg.innerText * optlabcoeff.innerText) + Number(mplabavg.innerText * mplabcoeff.innerText) + Number(dbavg.innerText * dbcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText));if(Number(avg(s1sum,s1coeffs))<10){
  s1average.style.color = 'red';
}
if(Number(avg(s1sum,s1coeffs))>=10){
  s1average.style.color = 'green';
}
if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
  s1average.style.color = 'black';
}

 s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

pelab.addEventListener('input', function(){
ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
dbavg.innerHTML = Number(dbcontrol.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);
ailabavg.innerHTML = Number(ailab.value);
optlabavg.innerHTML = Number(optlab.value);


if(Number(pelab.value) < 0 || Number(pelab.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(ailabavg.innerText * ailabcoeff.innerText) + Number(optlabavg.innerText * optlabcoeff.innerText) + Number(mplabavg.innerText * mplabcoeff.innerText) + Number(dbavg.innerText * dbcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText));
if(Number(avg(s1sum,s1coeffs))<10){
  s1average.style.color = 'red';
}
if(Number(avg(s1sum,s1coeffs))>=10){
  s1average.style.color = 'green';
}
if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
  s1average.style.color = 'black';
}


s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

ailab.addEventListener('input', function(){
  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
  emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
  caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
  peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
  dbavg.innerHTML = Number(dbcontrol.value);
  mplabavg.innerHTML = Number(mplab.value);
  pelabavg.innerHTML = Number(pelab.value);
  ailabavg.innerHTML = Number(ailab.value);
  optlabavg.innerHTML = Number(optlab.value);


  if(Number(ailab.value) < 0 || Number(ailab.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(ailabavg.innerText * ailabcoeff.innerText) + Number(optlabavg.innerText * optlabcoeff.innerText) + Number(mplabavg.innerText * mplabcoeff.innerText) + Number(dbavg.innerText * dbcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText));

  if(Number(avg(s1sum,s1coeffs))<10){
    s1average.style.color = 'red';
  }
  if(Number(avg(s1sum,s1coeffs))>=10){
    s1average.style.color = 'green';
  }
  if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
    s1average.style.color = 'black';
  }

  s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

mplab.addEventListener('input', function(){
ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
dbavg.innerHTML = Number(dbcontrol.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);
ailabavg.innerHTML = Number(ailab.value);
optlabavg.innerHTML = Number(optlab.value);


if(Number(mplab.value) < 0 || Number(mplab.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(ailabavg.innerText * ailabcoeff.innerText) + Number(optlabavg.innerText * optlabcoeff.innerText) + Number(mplabavg.innerText * mplabcoeff.innerText) + Number(dbavg.innerText * dbcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText));

if(Number(avg(s1sum,s1coeffs))<10){
  s1average.style.color = 'red';
}
if(Number(avg(s1sum,s1coeffs))>=10){
  s1average.style.color = 'green';
}
if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
  s1average.style.color = 'black';
}

s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

optlab.addEventListener('input', function(){
  ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
  emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
  caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
  peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
  dbavg.innerHTML = Number(dbcontrol.value);
  mplabavg.innerHTML = Number(mplab.value);
  pelabavg.innerHTML = Number(pelab.value);
  ailabavg.innerHTML = Number(ailab.value);
  optlabavg.innerHTML = Number(optlab.value);


  if(Number(optlab.value) < 0 || Number(optlab.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(ailabavg.innerText * ailabcoeff.innerText) + Number(optlabavg.innerText * optlabcoeff.innerText) + Number(mplabavg.innerText * mplabcoeff.innerText) + Number(dbavg.innerText * dbcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText));

  if(Number(avg(s1sum,s1coeffs))<10){
    s1average.style.color = 'red';
  }
  if(Number(avg(s1sum,s1coeffs))>=10){
    s1average.style.color = 'green';
  }
  if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
    s1average.style.color = 'black';
  }

  s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

// S2 Calcualtor


var oscontrol      = document.getElementById('osc');
var osexam         = document.getElementById('ose');
var osavg          = document.getElementById('osavg');
var oscoeff        = document.getElementById('oscoeff');

var sopccontrol    = document.getElementById('sopcc');
var sopcexam       = document.getElementById('sopce');
var sopcavg        = document.getElementById('sopcavg');
var sopccoeff      = document.getElementById('sopccoeff');

var dcscontrol     = document.getElementById('dcsc');
var dcsexam        = document.getElementById('dcse');
var dcsavg         = document.getElementById('dcsavg');
var dcscoeff       = document.getElementById('dcscoeff');

var bencontrol     = document.getElementById('benc');
var benexam        = document.getElementById('bene');
var benavg         = document.getElementById('benavg');
var bencoeff       = document.getElementById('bencoeff');

var elecexam       = document.getElementById('elece');
var elecavg        = document.getElementById('elecavg');
var eleccoeff      = document.getElementById('eleccoeff');

var sopclab        = document.getElementById('sopclab');
var sopclabavg     = document.getElementById('sopclabavg');
var sopclabcoeff   = document.getElementById('sopclabcoeff');

var dcslab         = document.getElementById('dcslab');
var dcslabavg      = document.getElementById('dcslabavg');
var dcslabcoeff    = document.getElementById('dcslabcoeff');

var benlab         = document.getElementById('benlab');
var benlabavg      = document.getElementById('benlabavg');
var benlabcoeff    = document.getElementById('benlabcoeff');

var oslab          = document.getElementById('oslab');
var oslabavg       = document.getElementById('oslabavg');
var oslabcoeff     = document.getElementById('oslabcoeff');

var s2average      = document.getElementById('s2avg');

// Init display
if (isNaN(Number(s2average.innerText)) || s2average.innerText === '') {
    s2average.innerHTML = '0.00';
}

// Total coefficients: 3+3+3+3+1+1+1+1+1 = 17
var s2coeffs = parseInt(
    Number(oscoeff.innerText)      + Number(sopccoeff.innerText)    +
    Number(dcscoeff.innerText)     + Number(bencoeff.innerText)     +
    Number(eleccoeff.innerText)    + Number(sopclabcoeff.innerText) +
    Number(dcslabcoeff.innerText)  + Number(benlabcoeff.innerText)  +
    Number(oslabcoeff.innerText)
);

// Recalculate all module averages
function recalcS2Averages() {
    osavg.innerHTML       = Number(calcAvg(oscontrol.value,   osexam.value));
    sopcavg.innerHTML     = Number(calcAvg(sopccontrol.value, sopcexam.value));
    dcsavg.innerHTML      = Number(calcAvg(dcscontrol.value,  dcsexam.value));
    benavg.innerHTML      = Number(calcAvg(bencontrol.value,  benexam.value));
    elecavg.innerHTML     = Number(elecexam.value)  || 0;
    sopclabavg.innerHTML  = Number(sopclab.value)   || 0;
    dcslabavg.innerHTML   = Number(dcslab.value)    || 0;
    benlabavg.innerHTML   = Number(benlab.value)    || 0;
    oslabavg.innerHTML    = Number(oslab.value)     || 0;
}

// Compute weighted sum
function recalcS2Sum() {
    return (
        Number(osavg.innerText)      * Number(oscoeff.innerText)      +
        Number(sopcavg.innerText)    * Number(sopccoeff.innerText)    +
        Number(dcsavg.innerText)     * Number(dcscoeff.innerText)     +
        Number(benavg.innerText)     * Number(bencoeff.innerText)     +
        Number(elecavg.innerText)    * Number(eleccoeff.innerText)    +
        Number(sopclabavg.innerText) * Number(sopclabcoeff.innerText) +
        Number(dcslabavg.innerText)  * Number(dcslabcoeff.innerText)  +
        Number(benlabavg.innerText)  * Number(benlabcoeff.innerText)  +
        Number(oslabavg.innerText)   * Number(oslabcoeff.innerText)
    );
}

// Update final average color
function updateS2Color(value) {
    let v = Number(value);
    if (v > 0 && v < 10)       s2average.style.color = 'red';
    else if (v >= 10 && v <= 20) s2average.style.color = 'green';
    else                         s2average.style.color = 'black';
}

// Validate input range and trigger full recalculation
function validateAndUpdate(inputElement) {
    let val = Number(inputElement.value);
    if (inputElement.value !== '' && (val < 0 || val > 20)) {
        invalid.style.opacity = '1';
    } else {
        invalid.style.opacity = '0';
    }
    recalcS2Averages();
    let result = avg(recalcS2Sum(), s2coeffs);
    updateS2Color(result);
    s2average.innerHTML = result;
}

// Attach listeners to all S2 inputs
[
    oscontrol, osexam,
    sopccontrol, sopcexam,
    dcscontrol, dcsexam,
    bencontrol, benexam,
    elecexam,
    sopclab, dcslab, benlab, oslab
].forEach(function(input) {
    input.addEventListener('input', function() {
        validateAndUpdate(input);
    });
});








// functions

function calcAvg(control,exam){
    result = parseFloat(control*0.4 + exam*0.6);
    return result.toFixed(2);
}
function avg(a,b){
    average = a/b;
    return Number(average.toFixed(2));
}