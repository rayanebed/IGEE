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



// GRADE CALCULATOR FOR S1

var phy1control = document.getElementById('phy1c');
var phy1exam = document.getElementById('phy1e');
var phy1avg = document.getElementById('phy1avg');
var phy1coeff = document.getElementById('phy1coeff');
var calc1control = document.getElementById('calc1c');
var calc1exam = document.getElementById('calc1e');
var calc1avg = document.getElementById('calc1avg');
var calc1coeff = document.getElementById('calc1coeff');
var chem1control = document.getElementById('chem1c');
var chem1exam = document.getElementById('chem1e');
var chem1avg = document.getElementById('chem1avg');
var chem1coeff = document.getElementById('chem1coeff');
var algocontrol = document.getElementById('algoc');
var algoexam = document.getElementById('algoe');
var algoavg = document.getElementById('algoavg');
var algocoeff = document.getElementById('algocoeff');
var lscontrol = document.getElementById('lsc');
var lsexam = document.getElementById('lse');
var lsavg = document.getElementById('lsavg');
var lscoeff = document.getElementById('lscoeff');
var rwcontrol = document.getElementById('rwc');
var rwexam = document.getElementById('rwe');
var rwavg = document.getElementById('rwavg');
var rwcoeff = document.getElementById('rwcoeff');
var estcontrol = document.getElementById('estc');
var estexam = document.getElementById('este');
var estavg = document.getElementById('estavg');
var estcoeff = document.getElementById('estcoeff');
var ethicsexam = document.getElementById('ethicse');
var ethicsavg = document.getElementById('ethicsavg');
var ethicscoeff = document.getElementById('ethicscoeff');
var phy1lab= document.getElementById('phy1lab');
var phy1labavg = document.getElementById('phy1labavg');
var phy1labcoeff = document.getElementById('phy1labcoeff');
var s1average = document.getElementById('s1avg');

if (isNaN(Number(s1average.innerText)) || s1average.innerText ==''){
  s1average.innerHTML = '0.00';
}


let invalid = document.getElementById('invalid');


let s1coeffs = parseInt(Number(phy1coeff.innerText) + Number(calc1coeff.innerText) + Number(chem1coeff.innerText) + Number(algocoeff.innerText) + Number(lscoeff.innerText) + Number(rwcoeff.innerText) + Number(estcoeff.innerText) + Number(ethicscoeff.innerText) + Number(phy1labcoeff.innerText)) ;
let s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));
phy1control.addEventListener('keyup', function(){
  phy1avg.innerHTML = Number(calcAvg(phy1control.value,phy1exam.value));
  calc1avg.innerHTML = Number(calcAvg(calc1control.value,calc1exam.value));
  chem1avg.innerHTML = Number(calcAvg(chem1control.value,chem1exam.value));
  algoavg.innerHTML = Number(calcAvg(algocontrol.value,algoexam.value));
  ethicsavg.innerHTML = Number(ethicsexam.value);
  lsavg.innerHTML = Number(calcAvg(lscontrol.value,lsexam.value));
  estavg.innerHTML = Number(calcAvg(estcontrol.value,estexam.value));
  rwavg.innerHTML = Number(calcAvg(rwcontrol.value,rwexam.value));
  phy1labavg.innerHTML = Number(phy1lab.value);

  if(Number(phy1control.value) < 0 || Number(phy1control.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }


  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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

phy1exam.addEventListener('keyup', function(){
    phy1avg.innerHTML = Number(calcAvg(phy1control.value,phy1exam.value));
    calc1avg.innerHTML = Number(calcAvg(calc1control.value,calc1exam.value));
    chem1avg.innerHTML = Number(calcAvg(chem1control.value,chem1exam.value));
    algoavg.innerHTML = Number(calcAvg(algocontrol.value,algoexam.value));
    ethicsavg.innerHTML = Number(ethicsexam.value);
    lsavg.innerHTML = Number(calcAvg(lscontrol.value,lsexam.value));
    estavg.innerHTML = Number(calcAvg(estcontrol.value,estexam.value));
    rwavg.innerHTML = Number(calcAvg(rwcontrol.value,rwexam.value));
    phy1labavg.innerHTML = Number(phy1lab.value);

  if(Number(phy1exam.value) < 0 || Number(phy1exam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }


  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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

calc1control.addEventListener('keyup', function(){
    phy1avg.innerHTML = Number(calcAvg(phy1control.value,phy1exam.value));
    calc1avg.innerHTML = Number(calcAvg(calc1control.value,calc1exam.value));
    chem1avg.innerHTML = Number(calcAvg(chem1control.value,chem1exam.value));
    algoavg.innerHTML = Number(calcAvg(algocontrol.value,algoexam.value));
    ethicsavg.innerHTML = Number(ethicsexam.value);
    lsavg.innerHTML = Number(calcAvg(lscontrol.value,lsexam.value));
    estavg.innerHTML = Number(calcAvg(estcontrol.value,estexam.value));
    rwavg.innerHTML = Number(calcAvg(rwcontrol.value,rwexam.value));
    phy1labavg.innerHTML = Number(phy1lab.value);

  if(Number(calc1control.value) < 0 || Number(calc1control.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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

calc1exam.addEventListener('keyup', function(){
    phy1avg.innerHTML = Number(calcAvg(phy1control.value,phy1exam.value));
    calc1avg.innerHTML = Number(calcAvg(calc1control.value,calc1exam.value));
    chem1avg.innerHTML = Number(calcAvg(chem1control.value,chem1exam.value));
    algoavg.innerHTML = Number(calcAvg(algocontrol.value,algoexam.value));
    ethicsavg.innerHTML = Number(ethicsexam.value);
    lsavg.innerHTML = Number(calcAvg(lscontrol.value,lsexam.value));
    estavg.innerHTML = Number(calcAvg(estcontrol.value,estexam.value));
    rwavg.innerHTML = Number(calcAvg(rwcontrol.value,rwexam.value));
    phy1labavg.innerHTML = Number(phy1lab.value);

  if(Number(calc1exam.value) < 0 || Number(calc1exam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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

chem1control.addEventListener('keyup', function(){

    chem1avg.innerHTML = Number(calcAvg(chem1control.value,chem1exam.value));
    

  if(Number(chem1control.value) < 0 || Number(chem1control.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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

chem1exam.addEventListener('keyup', function(){
   
    chem1avg.innerHTML = Number(calcAvg(chem1control.value,chem1exam.value));

  if(Number(chem1exam.value) < 0 || Number(chem1exam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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

algocontrol.addEventListener('keyup', function(){
   
    algoavg.innerHTML = Number(calcAvg(algocontrol.value,algoexam.value));

  if(Number(algocontrol.value) < 0 || Number(algocontrol.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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

algoexam.addEventListener('keyup', function(){
   
    algoavg.innerHTML = Number(calcAvg(algocontrol.value,algoexam.value));

  if(Number(algoexam.value) < 0 || Number(algoexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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



estcontrol.addEventListener('keyup', function(){
  estavg.innerHTML = Number(calcAvg(estcontrol.value,estexam.value));

  if(Number(estcontrol.value) < 0 || Number(estcontrol.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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

estexam.addEventListener('keyup', function(){

    estavg.innerHTML = Number(calcAvg(estcontrol.value,estexam.value));
    

  if(Number(estexam.value) < 0 || Number(estexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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

lscontrol.addEventListener('keyup', function(){

    lsavg.innerHTML = Number(calcAvg(lscontrol.value,lsexam.value));
    
  if(Number(lscontrol.value) < 0 || Number(lscontrol.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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

lsexam.addEventListener('keyup', function(){
    phy1avg.innerHTML = Number(calcAvg(phy1control.value,phy1exam.value));
    calc1avg.innerHTML = Number(calcAvg(calc1control.value,calc1exam.value));
    chem1avg.innerHTML = Number(calcAvg(chem1control.value,chem1exam.value));
    algoavg.innerHTML = Number(calcAvg(algocontrol.value,algoexam.value));
    ethicsavg.innerHTML = Number(ethicsexam.value);
    lsavg.innerHTML = Number(calcAvg(lscontrol.value,lsexam.value));
    estavg.innerHTML = Number(calcAvg(estcontrol.value,estexam.value));
    rwavg.innerHTML = Number(calcAvg(rwcontrol.value,rwexam.value));
    phy1labavg.innerHTML = Number(phy1lab.value);

  if(Number(lsexam.value) < 0 || Number(lsexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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

rwcontrol.addEventListener('input', function(){
    phy1avg.innerHTML = Number(calcAvg(phy1control.value,phy1exam.value));
    calc1avg.innerHTML = Number(calcAvg(calc1control.value,calc1exam.value));
    chem1avg.innerHTML = Number(calcAvg(chem1control.value,chem1exam.value));
    algoavg.innerHTML = Number(calcAvg(algocontrol.value,algoexam.value));
    ethicsavg.innerHTML = Number(ethicsexam.value);
    lsavg.innerHTML = Number(calcAvg(lscontrol.value,lsexam.value));
    estavg.innerHTML = Number(calcAvg(estcontrol.value,estexam.value));
    rwavg.innerHTML = Number(calcAvg(rwcontrol.value,rwexam.value));
    phy1labavg.innerHTML = Number(phy1lab.value);

  if(Number(rwcontrol.value) < 0 || Number(rwcontrol.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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

rwexam.addEventListener('input', function(){
    phy1avg.innerHTML = Number(calcAvg(phy1control.value,phy1exam.value));
    calc1avg.innerHTML = Number(calcAvg(calc1control.value,calc1exam.value));
    chem1avg.innerHTML = Number(calcAvg(chem1control.value,chem1exam.value));
    algoavg.innerHTML = Number(calcAvg(algocontrol.value,algoexam.value));
    ethicsavg.innerHTML = Number(ethicsexam.value);
    lsavg.innerHTML = Number(calcAvg(lscontrol.value,lsexam.value));
    estavg.innerHTML = Number(calcAvg(estcontrol.value,estexam.value));
    rwavg.innerHTML = Number(calcAvg(rwcontrol.value,rwexam.value));
    phy1labavg.innerHTML = Number(phy1lab.value);

  if(Number(rwexam.value) < 0 || Number(rwexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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



phy1lab.addEventListener('input', function(){
    phy1avg.innerHTML = Number(calcAvg(phy1control.value,phy1exam.value));
    calc1avg.innerHTML = Number(calcAvg(calc1control.value,calc1exam.value));
    chem1avg.innerHTML = Number(calcAvg(chem1control.value,chem1exam.value));
    algoavg.innerHTML = Number(calcAvg(algocontrol.value,algoexam.value));
    ethicsavg.innerHTML = Number(ethicsexam.value);
    lsavg.innerHTML = Number(calcAvg(lscontrol.value,lsexam.value));
    estavg.innerHTML = Number(calcAvg(estcontrol.value,estexam.value));
    rwavg.innerHTML = Number(calcAvg(rwcontrol.value,rwexam.value));
    phy1labavg.innerHTML = Number(phy1lab.value);

  if(Number(phy1lab.value) < 0 || Number(phy1lab.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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

ethicsexam.addEventListener('input', function(){
    phy1avg.innerHTML = Number(calcAvg(phy1control.value,phy1exam.value));
    calc1avg.innerHTML = Number(calcAvg(calc1control.value,calc1exam.value));
    chem1avg.innerHTML = Number(calcAvg(chem1control.value,chem1exam.value));
    algoavg.innerHTML = Number(calcAvg(algocontrol.value,algoexam.value));
    ethicsavg.innerHTML = Number(ethicsexam.value);
    lsavg.innerHTML = Number(calcAvg(lscontrol.value,lsexam.value));
    estavg.innerHTML = Number(calcAvg(estcontrol.value,estexam.value));
    rwavg.innerHTML = Number(calcAvg(rwcontrol.value,rwexam.value));
    phy1labavg.innerHTML = Number(phy1lab.value);

  if(Number(ethicsexam.value) < 0 || Number(ethicsexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy1avg.innerText * phy1coeff.innerText) + Number(calc1avg.innerText * calc1coeff.innerText) + Number(chem1avg.innerText * chem1coeff.innerText) + Number(algoavg.innerText * algocoeff.innerText) + Number(lsavg.innerText * lscoeff.innerText) + Number(rwavg.innerText * rwcoeff.innerText) + Number(estavg.innerText * estcoeff.innerText) + Number(ethicsavg.innerText * ethicscoeff.innerText)+ Number(phy1labavg.innerText * phy1labcoeff.innerText));

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


// S2 Grade calculator

let phy2 = document.querySelectorAll('.phy2');
let chem2 = document.querySelectorAll('.chem2');
let calc2 = document.querySelectorAll('.calc2');
let alg = document.querySelectorAll('.alg');
let ee = document.querySelectorAll('.ee');
let c = document.querySelectorAll('.c');
let ls = document.querySelectorAll('.ls');
let rw = document.querySelectorAll('.rw');
let ee1lab = document.querySelectorAll('.ee1lab');
let phy2lab = document.querySelectorAll('.phy2lab');
let s2sum = 0;
let s2average = document.getElementById('s2avg');

let s2coeffs = parseInt(Number(phy2[3].innerText) + Number(calc2[3].innerText) + Number(chem2[3].innerText) + Number(c[3].innerText) + Number(ee[3].innerText) + Number(ls[3].innerText) + Number(rw[3].innerText) + Number(ee1lab[2].innerText) + Number(phy2lab[2].innerText)+ Number(alg[3].innerText));


rw[0].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
  ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

rw[1].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
  ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

phy2[0].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
  ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

phy2[1].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
  ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

calc2[0].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
  ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

calc2[1].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
  ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

chem2[0].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
  ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

chem2[1].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
  ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

alg[0].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
  ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

alg[1].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
  ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

ee[0].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
  ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

ee[1].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
  ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

ls[0].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
  ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

ls[1].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

c[0].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

c[1].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

ee1lab[0].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

})

phy2lab[0].addEventListener('input', function(){
  phy2[2].innerHTML = Number(calcAvg(phy2[0].value,phy2[1].value));
  calc2[2].innerHTML = Number(calcAvg(calc2[0].value,calc2[1].value));
  chem2[2].innerHTML = Number(calcAvg(chem2[0].value,chem2[1].value));
  c[2].innerHTML = Number(calcAvg(c[0].value,c[1].value));
  phy2lab[1].innerHTML = Number(phy2lab[0].value);
  ls[2].innerHTML = Number(calcAvg(ls[0].value,ls[1].value));
  alg[2].innerHTML = Number(calcAvg(alg[0].value,alg[1].value));
  rw[2].innerHTML = Number(calcAvg(rw[0].value,rw[1].value));
  ee1lab[1].innerHTML = Number(ee1lab[0].value);
ee[2].innerHTML = Number(calcAvg(ee[0].value,ee[1].value));

if(Number(rw[1].value) < 0 || Number(rw[1].value)>20){
  invalid.style.opacity = '1';
}
else{
  invalid.style.opacity = '0';
}

s2sum = Number(Number(phy2[2].innerText * phy2[3].innerText) + Number(calc2[2].innerText * calc2[3].innerText) + Number(chem2[2].innerText * chem2[3].innerText) + Number(c[2].innerText * c[3].innerText) + Number(ls[2].innerText * ls[3].innerText) + Number(ee[2].innerText * ee[3].innerText) + Number(rw[2].innerText * rw[3].innerText) + Number(ee1lab[1].innerText * ee1lab[2].innerText) + Number(phy2lab[1].innerText * phy2lab[2].innerText)+ Number(alg[2].innerText * alg[3].innerText));

if(Number(avg(s2sum,s2coeffs))<10){
  s2average.style.color = 'red';
}
if(Number(avg(s2sum,s2coeffs))>=10){
  s2average.style.color = 'green';
}
if(Number(avg(s2sum,s2coeffs))>20 || Number(avg(s2sum,s2coeffs))<=0){
  s2average.style.color = 'black';
}
s2average.innerHTML = Number(avg(s2sum,s2coeffs));

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