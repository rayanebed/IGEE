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
var dspcontrol = document.getElementById('dspc');
var dspexam = document.getElementById('dspe');
var dspavg = document.getElementById('dspavg');
var dspcoeff = document.getElementById('dspcoeff');
var pecontrol = document.getElementById('pec');
var peexam = document.getElementById('pee');
var peavg = document.getElementById('peavg');
var pecoeff = document.getElementById('pecoeff');
var procontrol = document.getElementById('proc');
var netcontrol = document.getElementById('netc');
var netexam = document.getElementById('nete');
var netavg = document.getElementById('netavg');
var netcoeff = document.getElementById('netcoeff');
var pelab = document.getElementById('pelab');
var pelabavg = document.getElementById('pelabavg');
var pelabcoeff = document.getElementById('pelabcoeff');
var prolab= document.getElementById('prolab');
var prolabavg = document.getElementById('prolabavg');
var prolabcoeff = document.getElementById('prolabcoeff');
var dsplab = document.getElementById('dsplab');
var dsplabavg = document.getElementById('dsplabavg');
var dsplabcoeff = document.getElementById('dsplabcoeff');
var mplab = document.getElementById('mplab');
var mplabavg = document.getElementById('mplabavg');
var mplabcoeff = document.getElementById('mplabcoeff');
var s1average = document.getElementById('s1avg');

if (isNaN(Number(s1average.innerText)) || s1average.innerText ==''){
s1average.innerHTML = '0.00';
}


let invalid = document.getElementById('invalid');


let s1coeffs = parseInt(Number(ls2coeff.innerText) + Number(emcoeff.innerText) + Number(cacoeff.innerText) + Number(dspcoeff.innerText) + Number(netcoeff.innerText) + Number(pecoeff.innerText) + Number(pelabcoeff.innerText) + Number(prolabcoeff.innerText) + Number(dsplabcoeff.innerText) + Number(mplabcoeff.innerText)) ;
let s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
ls2control.addEventListener('input', function(){

ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(ls2control.value) < 0 || Number(ls2control.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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

ls2exam.addEventListener('input', function(){
ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);




if(Number(ls2exam.value) < 0 || Number(ls2exam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(emexam.value) < 0 || Number(emexam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(cacontrol.value) < 0 || Number(cacontrol.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(caexam.value) < 0 || Number(caexam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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


dspcontrol.addEventListener('input', function(){

ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(dspcontrol.value) < 0 || Number(dspcontrol.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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

dspexam.addEventListener('input', function(){

ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(dspexam.value) < 0 || Number(dspexam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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

netcontrol.addEventListener('input', function(){
ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(netcontrol.value) < 0 || Number(netcontrol.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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

netexam.addEventListener('input', function(){
ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(netexam.value) < 0 || Number(netexam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);



if(Number(peexam.value) < 0 || Number(peexam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(pecontrol.value) < 0 || Number(pecontrol.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(peexam.value) < 0 || Number(peexam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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



pelab.addEventListener('input', function(){
ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(pelab.value) < 0 || Number(pelab.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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

dsplab.addEventListener('input', function(){

ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(dsplab.value) < 0 || Number(dsplab.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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

prolab.addEventListener('input', function(){

ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(prolab.value) < 0 || Number(prolab.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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
netavg.innerHTML = Number(calcAvg(netcontrol.value,netexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(mplab.value) < 0 || Number(mplab.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) + Number(netavg.innerText * netcoeff.innerText) + Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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

// S2 Calculator

// GRADE CALCULATOR FOR S2


var antcontrol = document.getElementById('antc');
var antexam = document.getElementById('ante');
var antavg = document.getElementById('antavg');
var antcoeff = document.getElementById('antcoeff');

var enadcontrol = document.getElementById('enadc');
var enadexam = document.getElementById('enade');
var enadavg = document.getElementById('enadavg');
var enadcoeff = document.getElementById('enadcoeff');

var ipcontrol = document.getElementById('ipc');
var ipexam = document.getElementById('ipe');
var ipavg = document.getElementById('ipavg');
var ipcoeff = document.getElementById('ipcoeff');

var dtspcontrol = document.getElementById('dtspс'); // note: Cyrillic 'с' used as workaround — change to 'dtspc' if you rename the id above
var dtspexam = document.getElementById('dtspe');
var dtspavg = document.getElementById('dtspavg');
var dtspcoeff = document.getElementById('dtspcoeff');

var itccontrol = document.getElementById('itcc');
var itcexam = document.getElementById('itce');
var itcavg = document.getElementById('itcavg');
var itccoeff = document.getElementById('itccoeff');

var antlab = document.getElementById('antlab');
var antlabavg = document.getElementById('antlabavg');
var antlabcoeff = document.getElementById('antlabcoeff');

var enadlab = document.getElementById('enadlab');
var enadlabavg = document.getElementById('enadlabavg');
var enadlabcoeff = document.getElementById('enadlabcoeff');

var iplab = document.getElementById('iplab');
var iplabavg = document.getElementById('iplabavg');
var iplabcoeff = document.getElementById('iplabcoeff');

var dtsplab = document.getElementById('dtsplab');
var dtsplabavg = document.getElementById('dtsplabavg');
var dtsplabcoeff = document.getElementById('dtsplabcoeff');

var emcexam = document.getElementById('emce');
var emcavg = document.getElementById('emcavg');
var emccoeff = document.getElementById('emccoeff');

var s2average = document.getElementById('s2avg');

if (isNaN(Number(s2average.innerText)) || s2average.innerText === '') {
    s2average.innerHTML = '0.00';
}

// Total coefficient: 2+2+2+3+3+1+1+1+1+1 = 17
let s2coeffs = parseInt(
    Number(antcoeff.innerText) + Number(enadcoeff.innerText) +
    Number(ipcoeff.innerText) + Number(dtspcoeff.innerText) +
    Number(itccoeff.innerText) + Number(antlabcoeff.innerText) +
    Number(enadlabcoeff.innerText) + Number(iplabcoeff.innerText) +
    Number(dtsplabcoeff.innerText) + Number(emccoeff.innerText)
);

function recalcS2Averages() {
    antavg.innerHTML = Number(calcAvg(antcontrol.value, antexam.value));
    enadavg.innerHTML = Number(calcAvg(enadcontrol.value, enadexam.value));
    ipavg.innerHTML = Number(calcAvg(ipcontrol.value, ipexam.value));
    dtspavg.innerHTML = Number(calcAvg(dtspcontrol.value, dtspexam.value));
    itcavg.innerHTML = Number(calcAvg(itccontrol.value, itcexam.value));
    antlabavg.innerHTML = Number(antlab.value) || 0;
    enadlabavg.innerHTML = Number(enadlab.value) || 0;
    iplabavg.innerHTML = Number(iplab.value) || 0;
    dtsplabavg.innerHTML = Number(dtsplab.value) || 0;
    emcavg.innerHTML = Number(emcexam.value) || 0;
}

function recalcS2Sum() {
    return Number(
        Number(antavg.innerText) * Number(antcoeff.innerText) +
        Number(enadavg.innerText) * Number(enadcoeff.innerText) +
        Number(ipavg.innerText) * Number(ipcoeff.innerText) +
        Number(dtspavg.innerText) * Number(dtspcoeff.innerText) +
        Number(itcavg.innerText) * Number(itccoeff.innerText) +
        Number(antlabavg.innerText) * Number(antlabcoeff.innerText) +
        Number(enadlabavg.innerText) * Number(enadlabcoeff.innerText) +
        Number(iplabavg.innerText) * Number(iplabcoeff.innerText) +
        Number(dtsplabavg.innerText) * Number(dtsplabcoeff.innerText) +
        Number(emcavg.innerText) * Number(emccoeff.innerText)
    );
}

function updateS2Color(value) {
    let v = Number(value);
    if (v < 10) s2average.style.color = 'red';
    else if (v >= 10) s2average.style.color = 'green';
    if (v > 20 || v <= 0) s2average.style.color = 'black';
}

function validateAndUpdate(inputElement) {
    let val = Number(inputElement.value);
    if (val < 0 || val > 20) {
        invalid.style.opacity = '1';
    } else {
        invalid.style.opacity = '0';
    }
    recalcS2Averages();
    let s2sum = recalcS2Sum();
    let result = avg(s2sum, s2coeffs);
    updateS2Color(result);
    s2average.innerHTML = result;
}

// Attach listeners to all S2 inputs
[antcontrol, antexam, enadcontrol, enadexam, ipcontrol, ipexam,
 dtspcontrol, dtspexam, itccontrol, itcexam,
 antlab, enadlab, iplab, dtsplab, emcexam].forEach(function(input) {
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