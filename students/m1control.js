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

    let betabutton = document.getElementById('buttonbeta');
    betabutton.addEventListener('click', function(){
      let beta = document.getElementById('beta');
      beta.style.display = 'none';
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
var pelab = document.getElementById('pelab');
var pelabavg = document.getElementById('pelabavg');
var pelabcoeff = document.getElementById('pelabcoeff');
var prolab= document.getElementById('prolab');
var prolabavg = document.getElementById('prolabavg');
var prolabcoeff = document.getElementById('prolabcoeff');
var dsplab = document.getElementById('dsplab');
var dsplabavg = document.getElementById('dsplabavg');
var dsplabcoeff = document.getElementById('dsplabcoeff');
var mplabcontrol = document.getElementById('mplabc');
var mplab = document.getElementById('mplab');
var mplabavg = document.getElementById('mplabavg');
var mplabcoeff = document.getElementById('mplabcoeff');
var s1average = document.getElementById('s1avg');

if (isNaN(Number(s1average.innerText)) || s1average.innerText ==''){
s1average.innerHTML = '0.00';
}


let invalid = document.getElementById('invalid');


let s1coeffs = parseInt(Number(ls2coeff.innerText) + Number(emcoeff.innerText) + Number(cacoeff.innerText) + Number(dspcoeff.innerText) + Number(pecoeff.innerText) + Number(pelabcoeff.innerText) + Number(prolabcoeff.innerText) + Number(dsplabcoeff.innerText) + Number(mplabcoeff.innerText)) ;
let s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
ls2control.addEventListener('input', function(){

ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(calcAvg(mplabcontrol.value,mplab.value));
pelabavg.innerHTML = Number(pelab.value);

if(Number(ls2control.value) < 0 || Number(ls2control.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));if(Number(avg(s1sum,s1coeffs))<10){
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
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(calcAvg(mplabcontrol.value,mplab.value));
pelabavg.innerHTML = Number(pelab.value);



if(Number(ls2exam.value) < 0 || Number(ls2exam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));
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

mplabavg.innerHTML = Number(calcAvg(mplabcontrol.value,mplab.value));
pelabavg.innerHTML = Number(pelab.value);


if(Number(emcontrol.value) < 0 || Number(emcontrol.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));

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
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(calcAvg(mplabcontrol.value,mplab.value));
pelabavg.innerHTML = Number(pelab.value);


if(Number(emexam.value) < 0 || Number(emexam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));

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
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(calcAvg(mplabcontrol.value,mplab.value));
pelabavg.innerHTML = Number(pelab.value);


s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));

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
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(calcAvg(mplabcontrol.value,mplab.value));
pelabavg.innerHTML = Number(pelab.value);


if(Number(caexam.value) < 0 || Number(caexam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));

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
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(calcAvg(mplabcontrol.value,mplab.value));
pelabavg.innerHTML = Number(pelab.value);

if(Number(dspcontrol.value) < 0 || Number(dspcontrol.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));if(Number(avg(s1sum,s1coeffs))<10){
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
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(calcAvg(mplabcontrol.value,mplab.value));
pelabavg.innerHTML = Number(pelab.value);

if(Number(dspexam.value) < 0 || Number(dspexam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));if(Number(avg(s1sum,s1coeffs))<10){
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
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(calcAvg(mplabcontrol.value,mplab.value));
pelabavg.innerHTML = Number(pelab.value);


if(Number(pecontrol.value) < 0 || Number(pecontrol.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));

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
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(calcAvg(mplabcontrol.value,mplab.value));
pelabavg.innerHTML = Number(pelab.value);


if(Number(peexam.value) < 0 || Number(peexam.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));

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
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(calcAvg(mplabcontrol.value,mplab.value));
pelabavg.innerHTML = Number(pelab.value);


if(Number(pelab.value) < 0 || Number(pelab.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));

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
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(calcAvg(mplabcontrol.value,mplab.value));
pelabavg.innerHTML = Number(pelab.value);

if(Number(dsplab.value) < 0 || Number(dsplab.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));if(Number(avg(s1sum,s1coeffs))<10){
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
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(calcAvg(mplabcontrol.value,mplab.value));
pelabavg.innerHTML = Number(pelab.value);

if(Number(prolab.value) < 0 || Number(prolab.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));if(Number(avg(s1sum,s1coeffs))<10){
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

mplabcontrol.addEventListener('input', function(){
ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(calcAvg(mplabcontrol.value,mplab.value));
pelabavg.innerHTML = Number(pelab.value);


if(Number(mplabcontrol.value) < 0 || Number(mplabcontrol.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));

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
dspavg.innerHTML = Number(calcAvg(dspcontrol.value,dspexam.value));
dsplabavg.innerHTML = Number(dsplab.value);
prolabavg.innerHTML = Number(prolab.value);
mplabavg.innerHTML = Number(calcAvg(mplabcontrol.value,mplab.value));
pelabavg.innerHTML = Number(pelab.value);


if(Number(mplab.value) < 0 || Number(mplab.value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(dspavg.innerText * dspcoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(prolabavg.innerText * prolabcoeff.innerText) + Number(dsplabavg.innerText * dsplabcoeff.innerText) + Number(mplabavg.innerText));

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

// ── S2 Module Definitions ──────────────────────────────────────────────────────
// controlId: null means the module has no control mark (exam only)
const s2modules = [
  { controlId: 'dcsc',    examId: 'dcse',    avgId: 'dcsavg',    coeffId: 'dcscoeff'    },
  { controlId: 'ncsc',    examId: 'ncse',    avgId: 'ncsavg',    coeffId: 'ncscoeff'    },
  { controlId: 'actc',    examId: 'acte',    avgId: 'actavg',    coeffId: 'actcoeff'    },
  { controlId: 'aic',     examId: 'aie',     avgId: 'aiavg',     coeffId: 'aicoeff'     },
  { controlId: 'iac',     examId: 'iae',     avgId: 'iaavg',     coeffId: 'iacoeff'     },
  { controlId: null,      examId: 'ree',     avgId: 'reavg',     coeffId: 'recoeff'     },
  { controlId: null,      examId: 'dcslabe', avgId: 'dcslabavg', coeffId: 'dcslabcoeff' },
  { controlId: null,      examId: 'ailabe',  avgId: 'ailabavg',  coeffId: 'ailabcoeff'  },
  { controlId: null,      examId: 'ialabe',  avgId: 'ialabavg',  coeffId: 'ialabcoeff'  },
  { controlId: null,      examId: 'actlabe', avgId: 'actlabavg', coeffId: 'actlabcoeff' },
];

// ── Resolve all DOM elements once at page load ─────────────────────────────────
// Instead of calling getElementById() every time a key is pressed,
// we do it once here and store the results in the s2els array.
// Each item in s2els corresponds to the same index in s2modules.
const s2els = s2modules.map(m => ({
  control : m.controlId ? document.getElementById(m.controlId) : null,
  exam    : document.getElementById(m.examId),
  avg     : document.getElementById(m.avgId),
  coeff   : document.getElementById(m.coeffId),
}));

const s2average = document.getElementById('s2avg');

// Sum all coefficients once (3+3+3+2+2+1+1+1+1+1 = 18)
const s2coeffsTotal = s2els.reduce((sum, m) => sum + Number(m.coeff.innerText), 0);


// ── Main recalculation function ────────────────────────────────────────────────
// This runs every time ANY input in the S2 table changes.
function recalcS2() {
  let s2sum = 0;
  let inputError = false;

  s2els.forEach(m => {
    const examVal    = m.exam.value !== '' ? Number(m.exam.value) : null;
    const controlVal = (m.control && m.control.value !== '') ? Number(m.control.value) : null;

    // ── Validation: flag values outside 0–20 ──
    if (examVal !== null && (examVal < 0 || examVal > 20))       inputError = true;
    if (controlVal !== null && (controlVal < 0 || controlVal > 20)) inputError = true;

    // ── Calculate module average ───────────────────────────────────────────────
    // Rule 1: module has both control and exam filled → control*0.4 + exam*0.6
    // Rule 2: module has only control filled          → control*0.4 (exam missing, partial)
    // Rule 3: module has only exam filled             → exam*0.6 (control missing, partial)
    //         OR module is exam-only (no control cell) → average = exam grade directly
    // Rule 4: nothing filled yet                      → show nothing
    let moduleAvg = null;

    if (m.control === null) {
      // Exam-only module (labs + elective): average is simply the exam grade
      if (examVal !== null) moduleAvg = examVal;

    } else {
      // Module has a control cell
      if (controlVal !== null && examVal !== null) {
        // Both filled: full formula
        moduleAvg = controlVal * 0.4 + examVal * 0.6;
      } else if (controlVal !== null && examVal === null) {
        // Only control filled: show partial (control contribution only)
        moduleAvg = controlVal * 0.4;
      } else if (controlVal === null && examVal !== null) {
        // Only exam filled: show partial (exam contribution only)
        moduleAvg = examVal * 0.6;
      }
      // Both empty: moduleAvg stays null → show nothing
    }

    // Display the module average in its table cell, or clear it if nothing entered
    m.avg.innerHTML = moduleAvg !== null ? moduleAvg.toFixed(2) : '';

    // Add this module's weighted contribution to the semester sum
    // If moduleAvg is null (nothing entered), treat it as 0
    s2sum += (moduleAvg ?? 0) * Number(m.coeff.innerText);
  });

  // ── Show or hide the validation warning ───────────────────────────────────────
  invalid.style.opacity = inputError ? '1' : '0';

  // ── Compute and display the final semester average ────────────────────────────
  const semAvg = s2coeffsTotal > 0 ? s2sum / s2coeffsTotal : 0;

  // Color: red if failing, green if passing, black if out of range / empty
  if (semAvg <= 0 || semAvg > 20) {
    s2average.style.color = 'black';
  } else if (semAvg < 10) {
    s2average.style.color = 'red';
  } else {
    s2average.style.color = 'green';
  }

  s2average.innerHTML = semAvg > 0 ? semAvg.toFixed(2) : '0.00';
}


// ── Attach event listeners ─────────────────────────────────────────────────────
// Instead of writing addEventListener for every single input manually (like S1),
// we loop through s2els and attach the same recalcS2 function to each input.
// This means any input change — in any field — triggers a full recalculation.
s2els.forEach(m => {
  if (m.control) m.control.addEventListener('input', recalcS2);
  m.exam.addEventListener('input', recalcS2);
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