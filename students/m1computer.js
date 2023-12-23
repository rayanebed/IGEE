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
          // invalid.style.display = 'none';
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
          // invalid.style.display = 'none';
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


let s1coeffs = parseInt(Number(ls2coeff.innerText) + Number(emcoeff.innerText) + Number(cacoeff.innerText) + Number(pecoeff.innerText) + Number(pelabcoeff.innerText) + Number(mplabcoeff.innerText)) ;
let s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText) +  Number(pelabavg.innerText * pelabcoeff.innerText) + Number(mplabavg.innerText));
ls2control.addEventListener('input', function(){

ls2avg.innerHTML = Number(calcAvg(ls2control.value,ls2exam.value));
emavg.innerHTML = Number(calcAvg(emcontrol.value,emexam.value));
caavg.innerHTML = Number(calcAvg(cacontrol.value,caexam.value));
peavg.innerHTML = Number(calcAvg(pecontrol.value,peexam.value));


mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);

if(Number(ls2control.value) < 0 || Number(ls2control.value)>20){
  invalid.style.display = 'block';
}
else{
  invalid.style.display = 'none';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(mplabavg.innerText * mplabcoeff.innerText));
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


mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);



if(Number(ls2exam.value) < 0 || Number(ls2exam.value)>20){
  invalid.style.display = 'block';
}
else{
  invalid.style.display = 'none';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(mplabavg.innerText * mplabcoeff.innerText));

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
  invalid.style.display = 'block';
}
else{
  invalid.style.display = 'none';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(mplabavg.innerText * mplabcoeff.innerText));


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


mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(emexam.value) < 0 || Number(emexam.value)>20){
  invalid.style.display = 'block';
}
else{
  invalid.style.display = 'none';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(mplabavg.innerText * mplabcoeff.innerText));


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


mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(mplabavg.innerText * mplabcoeff.innerText));


if(Number(cacontrol.value) < 0 || Number(cacontrol.value)>20){
  invalid.style.display = 'block';
}
else{
  invalid.style.display = 'none';
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


mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(caexam.value) < 0 || Number(caexam.value)>20){
  invalid.style.display = 'block';
}
else{
  invalid.style.display = 'none';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(mplabavg.innerText * mplabcoeff.innerText));


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


mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(pecontrol.value) < 0 || Number(pecontrol.value)>20){
  invalid.style.display = 'block';
}
else{
  invalid.style.display = 'none';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(mplabavg.innerText * mplabcoeff.innerText));


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


mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(peexam.value) < 0 || Number(peexam.value)>20){
  invalid.style.display = 'block';
}
else{
  invalid.style.display = 'none';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(mplabavg.innerText * mplabcoeff.innerText));


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


mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(pelab.value) < 0 || Number(pelab.value)>20){
  invalid.style.display = 'block';
}
else{
  invalid.style.display = 'none';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(mplabavg.innerText * mplabcoeff.innerText));


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


mplabavg.innerHTML = Number(mplab.value);
pelabavg.innerHTML = Number(pelab.value);


if(Number(mplab.value) < 0 || Number(mplab.value)>20){
  invalid.style.display = 'block';
}
else{
  invalid.style.display = 'none';
}

s1sum = Number(Number(ls2avg.innerText * ls2coeff.innerText) + Number(emavg.innerText * emcoeff.innerText) + Number(caavg.innerText * cacoeff.innerText) + Number(peavg.innerText * pecoeff.innerText)  +  Number(pelabavg.innerText * pelabcoeff.innerText)+ Number(mplabavg.innerText * mplabcoeff.innerText));


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








// functions

function calcAvg(control,exam){
    result = parseFloat(control*0.4 + exam*0.6);
    return result.toFixed(2);
}
function avg(a,b){
    average = a/b;
    return Number(average.toFixed(2));
}