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
      let s22 = document.getElementById('s22');
      s22.style.display = 'none';
      
      s1.style.display = 'none';
      s1select.addEventListener('click',function(){
        if((s1.style.display) === 'none'){
          s1.style.display = '';
          invalid.style.display = '';
          if(s2.style.display != 'none'){
            s2.style.display = 'none';
            s22.style.display = 'none';
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
          s22.style.display = 'flex';
          invalid.style.display = '';
          if(s1.style.display != 'none'){
            s1.style.display = 'none';
          }
        }
        else{
          s2.style.display = 'none';
          s22.style.display = 'none';
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

var phy3control = document.getElementById('phy3c');
var phy3exam = document.getElementById('phy3e');
var phy3avg = document.getElementById('phy3avg');
var phy3coeff = document.getElementById('phy3coeff');
var ad1control = document.getElementById('ad1c');
var ad1exam = document.getElementById('ad1e');
var ad1avg = document.getElementById('ad1avg');
var ad1coeff = document.getElementById('ad1coeff');
var ds1control = document.getElementById('ds1c');
var ds1exam = document.getElementById('ds1e');
var ds1avg = document.getElementById('ds1avg');
var ds1coeff = document.getElementById('ds1coeff');
var ee2control = document.getElementById('ee2c');
var ee2exam = document.getElementById('ee2e');
var ee2avg = document.getElementById('ee2avg');
var ee2coeff = document.getElementById('ee2coeff');
var lacontrol = document.getElementById('lac');
var laexam = document.getElementById('lae');
var laavg = document.getElementById('laavg');
var lacoeff = document.getElementById('lacoeff');
var ad1lab = document.getElementById('ad1lab');
var ad1labavg = document.getElementById('ad1labavg');
var ad1labcoeff = document.getElementById('ad1labcoeff');
var ee2lab = document.getElementById('ee2lab');
var ee2labavg = document.getElementById('ee2labavg');
var ee2labcoeff = document.getElementById('ee2labcoeff');
var ds1lab = document.getElementById('ds1lab');
var ds1labavg = document.getElementById('ds1labavg');
var ds1labcoeff = document.getElementById('ds1labcoeff');
var phy3lab= document.getElementById('phy3lab');
var phy3labavg = document.getElementById('phy3labavg');
var phy3labcoeff = document.getElementById('phy3labcoeff');
var s1average = document.getElementById('s1avg');

if (isNaN(Number(s1average.innerText)) || s1average.innerText ==''){
  s1average.innerHTML = '0.00';
}


let invalid = document.getElementById('invalid');


let s1coeffs = parseInt(Number(phy3coeff.innerText) + Number(ad1coeff.innerText) + Number(ds1coeff.innerText) + Number(ee2coeff.innerText) + Number(lacoeff.innerText) + Number(ad1labcoeff.innerText) + Number(ds1labcoeff.innerText) + Number(phy3labcoeff.innerText) + Number(ee2labcoeff.innerText)) ;
let s1sum = Number(Number(phy3avg.innerText * phy3coeff.innerText) + Number(ad1avg.innerText * ad1coeff.innerText) + Number(ds1avg.innerText * ds1coeff.innerText) + Number(ee2avg.innerText * ee2coeff.innerText) + Number(laavg.innerText * lacoeff.innerText) + Number(ad1labavg.innerText * ad1labcoeff.innerText) + Number(ds1labavg.innerText * ds1labcoeff.innerText) + Number(ee2labavg.innerText * ee2labcoeff.innerText)+ Number(phy3labavg.innerText * phy3labcoeff.innerText));
phy3control.addEventListener('input', function(){
  phy3avg.innerHTML = Number(calcAvg(phy3control.value,phy3exam.value));
  ad1avg.innerHTML = Number(calcAvg(ad1control.value,ad1exam.value));
  ds1avg.innerHTML = Number(calcAvg(ds1control.value,ds1exam.value));
  ee2avg.innerHTML = Number(calcAvg(ee2control.value,ee2exam.value));
  ad1labavg.innerHTML = Number(ad1lab.value);
  ds1labavg.innerHTML = Number(ds1lab.value);
  ee2labavg.innerHTML = Number(ee2lab.value);
  phy3labavg.innerHTML = Number(phy3lab.value);
  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  if(Number(phy3control.value) < 0 || Number(phy3control.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  s1sum = Number(Number(phy3avg.innerText * phy3coeff.innerText) + Number(ad1avg.innerText * ad1coeff.innerText) + Number(ds1avg.innerText * ds1coeff.innerText) + Number(ee2avg.innerText * ee2coeff.innerText) + Number(laavg.innerText * lacoeff.innerText) + Number(ad1labavg.innerText * ad1labcoeff.innerText) + Number(ds1labavg.innerText * ds1labcoeff.innerText) + Number(ee2labavg.innerText * ee2labcoeff.innerText)+ Number(phy3labavg.innerText * phy3labcoeff.innerText));

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

phy3exam.addEventListener('input', function(){
  phy3avg.innerHTML = Number(calcAvg(phy3control.value,phy3exam.value));
  ad1avg.innerHTML = Number(calcAvg(ad1control.value,ad1exam.value));
  ds1avg.innerHTML = Number(calcAvg(ds1control.value,ds1exam.value));
  ee2avg.innerHTML = Number(calcAvg(ee2control.value,ee2exam.value));
  ad1labavg.innerHTML = Number(ad1lab.value);
  ds1labavg.innerHTML = Number(ds1lab.value);
  ee2labavg.innerHTML = Number(ee2lab.value);
  phy3labavg.innerHTML = Number(phy3lab.value);
  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  if(Number(phy3exam.value) < 0 || Number(phy3exam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy3avg.innerText * phy3coeff.innerText) + Number(ad1avg.innerText * ad1coeff.innerText) + Number(ds1avg.innerText * ds1coeff.innerText) + Number(ee2avg.innerText * ee2coeff.innerText) + Number(laavg.innerText * lacoeff.innerText) + Number(ad1labavg.innerText * ad1labcoeff.innerText) + Number(ds1labavg.innerText * ds1labcoeff.innerText) + Number(ee2labavg.innerText * ee2labcoeff.innerText)+ Number(phy3labavg.innerText * phy3labcoeff.innerText));


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

ad1control.addEventListener('input', function(){
  phy3avg.innerHTML = Number(calcAvg(phy3control.value,phy3exam.value));
  ad1avg.innerHTML = Number(calcAvg(ad1control.value,ad1exam.value));
  ds1avg.innerHTML = Number(calcAvg(ds1control.value,ds1exam.value));
  ee2avg.innerHTML = Number(calcAvg(ee2control.value,ee2exam.value));
  ad1labavg.innerHTML = Number(ad1lab.value);
  ds1labavg.innerHTML = Number(ds1lab.value);
  ee2labavg.innerHTML = Number(ee2lab.value);
  phy3labavg.innerHTML = Number(phy3lab.value);
  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  if(Number(ad1control.value) < 0 || Number(ad1control.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy3avg.innerText * phy3coeff.innerText) + Number(ad1avg.innerText * ad1coeff.innerText) + Number(ds1avg.innerText * ds1coeff.innerText) + Number(ee2avg.innerText * ee2coeff.innerText) + Number(laavg.innerText * lacoeff.innerText) + Number(ad1labavg.innerText * ad1labcoeff.innerText) + Number(ds1labavg.innerText * ds1labcoeff.innerText) + Number(ee2labavg.innerText * ee2labcoeff.innerText)+ Number(phy3labavg.innerText * phy3labcoeff.innerText));


  if(Number(avg(s1sum,s1coeffs))<10){
    s1average.style.color = 'red';
  }
  if(Number(avg(s1sum,s1coeffs))>=10){
    s1average.style.color = 'green';
  }
  if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
    s1average.style.color = 'black';
  }

  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  
  s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

ad1exam.addEventListener('input', function(){
  phy3avg.innerHTML = Number(calcAvg(phy3control.value,phy3exam.value));
  ad1avg.innerHTML = Number(calcAvg(ad1control.value,ad1exam.value));
  ds1avg.innerHTML = Number(calcAvg(ds1control.value,ds1exam.value));
  ee2avg.innerHTML = Number(calcAvg(ee2control.value,ee2exam.value));
  ad1labavg.innerHTML = Number(ad1lab.value);
  ds1labavg.innerHTML = Number(ds1lab.value);
  ee2labavg.innerHTML = Number(ee2lab.value);
  phy3labavg.innerHTML = Number(phy3lab.value);
  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  if(Number(ad1exam.value) < 0 || Number(ad1exam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy3avg.innerText * phy3coeff.innerText) + Number(ad1avg.innerText * ad1coeff.innerText) + Number(ds1avg.innerText * ds1coeff.innerText) + Number(ee2avg.innerText * ee2coeff.innerText) + Number(laavg.innerText * lacoeff.innerText) + Number(ad1labavg.innerText * ad1labcoeff.innerText) + Number(ds1labavg.innerText * ds1labcoeff.innerText) + Number(ee2labavg.innerText * ee2labcoeff.innerText)+ Number(phy3labavg.innerText * phy3labcoeff.innerText));


  if(Number(avg(s1sum,s1coeffs))<10){
    s1average.style.color = 'red';
  }
  if(Number(avg(s1sum,s1coeffs))>=10){
    s1average.style.color = 'green';
  }
  if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
    s1average.style.color = 'black';
  }

  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  
  s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

ds1control.addEventListener('input', function(){
  phy3avg.innerHTML = Number(calcAvg(phy3control.value,phy3exam.value));
  ad1avg.innerHTML = Number(calcAvg(ad1control.value,ad1exam.value));
  ds1avg.innerHTML = Number(calcAvg(ds1control.value,ds1exam.value));
  ee2avg.innerHTML = Number(calcAvg(ee2control.value,ee2exam.value));
  ad1labavg.innerHTML = Number(ad1lab.value);
  ds1labavg.innerHTML = Number(ds1lab.value);
  ee2labavg.innerHTML = Number(ee2lab.value);
  phy3labavg.innerHTML = Number(phy3lab.value);
  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  if(Number(ds1control.value) < 0 || Number(ds1control.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy3avg.innerText * phy3coeff.innerText) + Number(ad1avg.innerText * ad1coeff.innerText) + Number(ds1avg.innerText * ds1coeff.innerText) + Number(ee2avg.innerText * ee2coeff.innerText) + Number(laavg.innerText * lacoeff.innerText) + Number(ad1labavg.innerText * ad1labcoeff.innerText) + Number(ds1labavg.innerText * ds1labcoeff.innerText) + Number(ee2labavg.innerText * ee2labcoeff.innerText)+ Number(phy3labavg.innerText * phy3labcoeff.innerText));


  if(Number(avg(s1sum,s1coeffs))<10){
    s1average.style.color = 'red';
  }
  if(Number(avg(s1sum,s1coeffs))>=10){
    s1average.style.color = 'green';
  }
  if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
    s1average.style.color = 'black';
  }

  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  
  s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

ds1exam.addEventListener('input', function(){
  phy3avg.innerHTML = Number(calcAvg(phy3control.value,phy3exam.value));
  ad1avg.innerHTML = Number(calcAvg(ad1control.value,ad1exam.value));
  ds1avg.innerHTML = Number(calcAvg(ds1control.value,ds1exam.value));
  ee2avg.innerHTML = Number(calcAvg(ee2control.value,ee2exam.value));
  ad1labavg.innerHTML = Number(ad1lab.value);
  ds1labavg.innerHTML = Number(ds1lab.value);
  ee2labavg.innerHTML = Number(ee2lab.value);
  phy3labavg.innerHTML = Number(phy3lab.value);
  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  if(Number(ds1exam.value) < 0 || Number(ds1exam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy3avg.innerText * phy3coeff.innerText) + Number(ad1avg.innerText * ad1coeff.innerText) + Number(ds1avg.innerText * ds1coeff.innerText) + Number(ee2avg.innerText * ee2coeff.innerText) + Number(laavg.innerText * lacoeff.innerText) + Number(ad1labavg.innerText * ad1labcoeff.innerText) + Number(ds1labavg.innerText * ds1labcoeff.innerText) + Number(ee2labavg.innerText * ee2labcoeff.innerText)+ Number(phy3labavg.innerText * phy3labcoeff.innerText));


  if(Number(avg(s1sum,s1coeffs))<10){
    s1average.style.color = 'red';
  }
  if(Number(avg(s1sum,s1coeffs))>=10){
    s1average.style.color = 'green';
  }
  if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
    s1average.style.color = 'black';
  }

  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  
  s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

ee2control.addEventListener('input', function(){
  ee2avg.innerHTML = Number(calcAvg(ee2control.value,ee2exam.value));

  if(Number(ee2control.value) < 0 || Number(ee2control.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy3avg.innerText * phy3coeff.innerText) + Number(ad1avg.innerText * ad1coeff.innerText) + Number(ds1avg.innerText * ds1coeff.innerText) + Number(ee2avg.innerText * ee2coeff.innerText) + Number(laavg.innerText * lacoeff.innerText) + Number(ad1labavg.innerText * ad1labcoeff.innerText) + Number(ds1labavg.innerText * ds1labcoeff.innerText) + Number(ee2labavg.innerText * ee2labcoeff.innerText)+ Number(phy3labavg.innerText * phy3labcoeff.innerText));


  if(Number(avg(s1sum,s1coeffs))<10){
    s1average.style.color = 'red';
  }
  if(Number(avg(s1sum,s1coeffs))>=10){
    s1average.style.color = 'green';
  }
  if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
    s1average.style.color = 'black';
  }


  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  
  s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

ee2exam.addEventListener('input', function(){
  phy3avg.innerHTML = Number(calcAvg(phy3control.value,phy3exam.value));
  ad1avg.innerHTML = Number(calcAvg(ad1control.value,ad1exam.value));
  ds1avg.innerHTML = Number(calcAvg(ds1control.value,ds1exam.value));
  ee2avg.innerHTML = Number(calcAvg(ee2control.value,ee2exam.value));
  ad1labavg.innerHTML = Number(ad1lab.value);
  ds1labavg.innerHTML = Number(ds1lab.value);
  ee2labavg.innerHTML = Number(ee2lab.value);
  phy3labavg.innerHTML = Number(phy3lab.value);
  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  if(Number(ee2exam.value) < 0 || Number(ee2exam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy3avg.innerText * phy3coeff.innerText) + Number(ad1avg.innerText * ad1coeff.innerText) + Number(ds1avg.innerText * ds1coeff.innerText) + Number(ee2avg.innerText * ee2coeff.innerText) + Number(laavg.innerText * lacoeff.innerText) + Number(ad1labavg.innerText * ad1labcoeff.innerText) + Number(ds1labavg.innerText * ds1labcoeff.innerText) + Number(ee2labavg.innerText * ee2labcoeff.innerText)+ Number(phy3labavg.innerText * phy3labcoeff.innerText));


  if(Number(avg(s1sum,s1coeffs))<10){
    s1average.style.color = 'red';
  }
  if(Number(avg(s1sum,s1coeffs))>=10){
    s1average.style.color = 'green';
  }
  if(Number(avg(s1sum,s1coeffs))>20 || Number(avg(s1sum,s1coeffs))<=0){
    s1average.style.color = 'black';
  }

  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));


  s1average.innerHTML = Number(avg(s1sum,s1coeffs));

})

lacontrol.addEventListener('input', function(){
  phy3avg.innerHTML = Number(calcAvg(phy3control.value,phy3exam.value));
  ad1avg.innerHTML = Number(calcAvg(ad1control.value,ad1exam.value));
  ds1avg.innerHTML = Number(calcAvg(ds1control.value,ds1exam.value));
  ee2avg.innerHTML = Number(calcAvg(ee2control.value,ee2exam.value));
  ad1labavg.innerHTML = Number(ad1lab.value);
  ds1labavg.innerHTML = Number(ds1lab.value);
  ee2labavg.innerHTML = Number(ee2lab.value);
  phy3labavg.innerHTML = Number(phy3lab.value);
  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  if(Number(lacontrol.value) < 0 || Number(lacontrol.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy3avg.innerText * phy3coeff.innerText) + Number(ad1avg.innerText * ad1coeff.innerText) + Number(ds1avg.innerText * ds1coeff.innerText) + Number(ee2avg.innerText * ee2coeff.innerText) + Number(laavg.innerText * lacoeff.innerText) + Number(ad1labavg.innerText * ad1labcoeff.innerText) + Number(ds1labavg.innerText * ds1labcoeff.innerText) + Number(ee2labavg.innerText * ee2labcoeff.innerText)+ Number(phy3labavg.innerText * phy3labcoeff.innerText));


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

laexam.addEventListener('input', function(){
  phy3avg.innerHTML = Number(calcAvg(phy3control.value,phy3exam.value));
  ad1avg.innerHTML = Number(calcAvg(ad1control.value,ad1exam.value));
  ds1avg.innerHTML = Number(calcAvg(ds1control.value,ds1exam.value));
  ee2avg.innerHTML = Number(calcAvg(ee2control.value,ee2exam.value));
  ad1labavg.innerHTML = Number(ad1lab.value);
  ds1labavg.innerHTML = Number(ds1lab.value);
  ee2labavg.innerHTML = Number(ee2lab.value);
  phy3labavg.innerHTML = Number(phy3lab.value);
  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  if(Number(laexam.value) < 0 || Number(laexam.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy3avg.innerText * phy3coeff.innerText) + Number(ad1avg.innerText * ad1coeff.innerText) + Number(ds1avg.innerText * ds1coeff.innerText) + Number(ee2avg.innerText * ee2coeff.innerText) + Number(laavg.innerText * lacoeff.innerText) + Number(ad1labavg.innerText * ad1labcoeff.innerText) + Number(ds1labavg.innerText * ds1labcoeff.innerText) + Number(ee2labavg.innerText * ee2labcoeff.innerText)+ Number(phy3labavg.innerText * phy3labcoeff.innerText));


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

ad1lab.addEventListener('input', function(){
  phy3avg.innerHTML = Number(calcAvg(phy3control.value,phy3exam.value));
  ad1avg.innerHTML = Number(calcAvg(ad1control.value,ad1exam.value));
  ds1avg.innerHTML = Number(calcAvg(ds1control.value,ds1exam.value));
  ee2avg.innerHTML = Number(calcAvg(ee2control.value,ee2exam.value));
  ad1labavg.innerHTML = Number(ad1lab.value);
  ds1labavg.innerHTML = Number(ds1lab.value);
  ee2labavg.innerHTML = Number(ee2lab.value);
  phy3labavg.innerHTML = Number(phy3lab.value);

  if(Number(ad1lab.value) < 0 || Number(ad1lab.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy3avg.innerText * phy3coeff.innerText) + Number(ad1avg.innerText * ad1coeff.innerText) + Number(ds1avg.innerText * ds1coeff.innerText) + Number(ee2avg.innerText * ee2coeff.innerText) + Number(laavg.innerText * lacoeff.innerText) + Number(ad1labavg.innerText * ad1labcoeff.innerText) + Number(ds1labavg.innerText * ds1labcoeff.innerText) + Number(ee2labavg.innerText * ee2labcoeff.innerText)+ Number(phy3labavg.innerText * phy3labcoeff.innerText));


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

ds1lab.addEventListener('input', function(){
  phy3avg.innerHTML = Number(calcAvg(phy3control.value,phy3exam.value));
  ad1avg.innerHTML = Number(calcAvg(ad1control.value,ad1exam.value));
  ds1avg.innerHTML = Number(calcAvg(ds1control.value,ds1exam.value));
  ee2avg.innerHTML = Number(calcAvg(ee2control.value,ee2exam.value));
  ad1labavg.innerHTML = Number(ad1lab.value);
  ds1labavg.innerHTML = Number(ds1lab.value);
  ee2labavg.innerHTML = Number(ee2lab.value);
  phy3labavg.innerHTML = Number(phy3lab.value);
  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  if(Number(ds1lab.value) < 0 || Number(ds1lab.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy3avg.innerText * phy3coeff.innerText) + Number(ad1avg.innerText * ad1coeff.innerText) + Number(ds1avg.innerText * ds1coeff.innerText) + Number(ee2avg.innerText * ee2coeff.innerText) + Number(laavg.innerText * lacoeff.innerText) + Number(ad1labavg.innerText * ad1labcoeff.innerText) + Number(ds1labavg.innerText * ds1labcoeff.innerText) + Number(ee2labavg.innerText * ee2labcoeff.innerText)+ Number(phy3labavg.innerText * phy3labcoeff.innerText));


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

phy3lab.addEventListener('input', function(){
  phy3avg.innerHTML = Number(calcAvg(phy3control.value,phy3exam.value));
  ad1avg.innerHTML = Number(calcAvg(ad1control.value,ad1exam.value));
  ds1avg.innerHTML = Number(calcAvg(ds1control.value,ds1exam.value));
  ee2avg.innerHTML = Number(calcAvg(ee2control.value,ee2exam.value));
  ad1labavg.innerHTML = Number(ad1lab.value);
  ds1labavg.innerHTML = Number(ds1lab.value);
  ee2labavg.innerHTML = Number(ee2lab.value);
  phy3labavg.innerHTML = Number(phy3lab.value);
  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  if(Number(phy3lab.value) < 0 || Number(phy3lab.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy3avg.innerText * phy3coeff.innerText) + Number(ad1avg.innerText * ad1coeff.innerText) + Number(ds1avg.innerText * ds1coeff.innerText) + Number(ee2avg.innerText * ee2coeff.innerText) + Number(laavg.innerText * lacoeff.innerText) + Number(ad1labavg.innerText * ad1labcoeff.innerText) + Number(ds1labavg.innerText * ds1labcoeff.innerText) + Number(ee2labavg.innerText * ee2labcoeff.innerText)+ Number(phy3labavg.innerText * phy3labcoeff.innerText));


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

ee2lab.addEventListener('input', function(){
  phy3avg.innerHTML = Number(calcAvg(phy3control.value,phy3exam.value));
  ad1avg.innerHTML = Number(calcAvg(ad1control.value,ad1exam.value));
  ds1avg.innerHTML = Number(calcAvg(ds1control.value,ds1exam.value));
  ee2avg.innerHTML = Number(calcAvg(ee2control.value,ee2exam.value));
  ad1labavg.innerHTML = Number(ad1lab.value);
  ds1labavg.innerHTML = Number(ds1lab.value);
  ee2labavg.innerHTML = Number(ee2lab.value);
  phy3labavg.innerHTML = Number(phy3lab.value);
  laavg.innerHTML = Number(calcAvg(lacontrol.value,laexam.value));

  if(Number(ee2lab.value) < 0 || Number(ee2lab.value)>20){
    invalid.style.opacity = '1';
  }
  else{
    invalid.style.opacity = '0';
  }

  s1sum = Number(Number(phy3avg.innerText * phy3coeff.innerText) + Number(ad1avg.innerText * ad1coeff.innerText) + Number(ds1avg.innerText * ds1coeff.innerText) + Number(ee2avg.innerText * ee2coeff.innerText) + Number(laavg.innerText * lacoeff.innerText) + Number(ad1labavg.innerText * ad1labcoeff.innerText) + Number(ds1labavg.innerText * ds1labcoeff.innerText) + Number(ee2labavg.innerText * ee2labcoeff.innerText)+ Number(phy3labavg.innerText * phy3labcoeff.innerText));


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

let ad2 = document.querySelectorAll('.ad2');
let proba = document.querySelectorAll('.prob');
let ds2 = document.querySelectorAll('.ds2');
let em = document.querySelectorAll('.em');
let ls1 = document.querySelectorAll('.ls1');
let com = document.querySelectorAll('.com');
let ad2lab = document.querySelectorAll('.ad2lab');
let ds2lab = document.querySelectorAll('.ds2lab');
let emlab = document.querySelectorAll('.emlab');
let sum = 0;
let s2avg = document.getElementById('s2avg');
let finalavg = document.querySelector('.finalavg');
let s1manual = document.getElementById('s1manual');
let s2manual = document.getElementById('s2manual');
let checks2 = document.getElementById('checks2');
let coeffs2 = Number(ad2[3].innerText)+Number(proba[3].innerText)+Number(ds2[3].innerText)+Number(em[3].innerText)+Number(ls1[3].innerText)+Number(com[2].innerText)+Number(ad2lab[2].innerText)+Number(emlab[2].innerText)+Number(ds2lab[2].innerText);
let modavg = document.querySelectorAll('.modavg');

for(let i = 0; i<modavg.length; i++){
  modavg[i].innerHTML = '0.00';
}



checks2.addEventListener('change', function(){
  if(checks2.checked){
    s2manual.value = s2avg.innerText;
    finalavg.innerHTML = Number(Number(s1manual.value)+Number(s2manual.value))/2;
  }else{
    s2manual.value = '0.00';
    finalavg.innerHTML = Number(Number(s1manual.value)+Number(s2manual.value)/2).toFixed(2);
  }
}
)

s1manual.addEventListener('input', function(){
  finalavg.innerHTML = Number(s1manual.value * 0.5 + s2manual.value *0.5);
})
s2manual.addEventListener('input', function(){
  finalavg.innerHTML = Number(s1manual.value * 0.5 + s2manual.value *0.5);
})


ad2[0].addEventListener("input", function(){
  if(this.value < 0 || this.value > 20){
    invalid.style.opacity = '1';
  }else{
    invalid.style.opacity = '0';
  }
  ad2[2].innerHTML = calcAvg(ad2[0].value,ad2[1].value);
  sum = Number(Number(ad2[2].innerText * ad2[3].innerText)+ Number(ds2[2].innerText * ds2[3].innerText) + Number(em[2].innerText)*Number(em[3].innerText) + Number(ls1[2].innerText)*Number(ls1[3].innerText) + Number(com[1].innerText)*Number(com[2].innerText) + Number(ad2lab[1].innerText)*Number(ad2lab[2].innerText) + Number(ds2lab[1].innerText)*Number(ds2lab[2].innerText) + Number(emlab[1].innerText)*Number(emlab[2].innerText));
  if(isNaN(sum)){
    s2avg.innerHTML = '0.00';
  }else{
    s2avg.innerHTML = avg(sum,coeffs2);
    if(Number(avg(sum,coeffs2))<10){
      s2avg.style.color = 'red';
    }else{
      if(Number(avg(sum,coeffs2))>=10  && Number(avg(sum,coeffs2))<=20 ){
        s2avg.style.color = 'green';
      }else{
        s2avg.style.color = 'black';
      }
    }
    checks2.addEventListener('change', function(){
      if(checks2.checked){
        s2manual.value = s2avg.innerText;
        finalavg.innerHTML = Number(Number(s1manual.value)+Number(s2manual.value)/2).toFixed(2);
      }else{
        s2manual.value = '0.00';
      }
    }
    )


  }
});
ad2[1].addEventListener("input", function(){
  if(this.value < 0 || this.value > 20){
    invalid.style.opacity = '1';
  }else{
    invalid.style.opacity = '0';
  }
  ad2[2].innerHTML = calcAvg(ad2[0].value,ad2[1].value);
  sum = Number(Number(ad2[2].innerText)*Number(ad2[3].innerText)+ Number(ds2[2].innerText)*Number(ds2[3].innerText) + Number(proba[2].innerText)*Number(proba[3].innerText)+ Number(em[2].innerText)*Number(em[3].innerText) + Number(ls1[2].innerText)*Number(ls1[3].innerText) + Number(com[1].innerText)*Number(com[ 2].innerText) + Number(ad2lab[1].innerText)*Number(ad2lab[2].innerText) + Number(ds2lab[1].innerText)*Number(ds2lab[2].innerText) + Number(emlab[1].innerText)*Number(emlab[2].innerText));
  if(isNaN(sum)){
    s2avg.innerHTML = '0.00';
  }else{
    s2avg.innerHTML = avg(sum,coeffs2);
    if(Number(avg(sum,coeffs2))<10){
      s2avg.style.color = 'red';
    }else{
      if(Number(avg(sum,coeffs2))>=10  && Number(avg(sum,coeffs2))<=20  ){
        s2avg.style.color = 'green';
      }else{
        s2avg.style.color = 'black';
      }
    }
  }
});
proba[0].addEventListener("input", function(){
  if(this.value < 0 || this.value > 20){
    invalid.style.opacity = '1';
  }else{
    invalid.style.opacity = '0';
  }
  proba[2].innerHTML = calcAvg(proba[0].value,proba[1].value);
  sum = Number(Number(ad2[2].innerText)*Number(ad2[3].innerText)+ Number(ds2[2].innerText)*Number(ds2[3].innerText) + Number(proba[2].innerText)*Number(proba[3].innerText)+ Number(em[2].innerText)*Number(em[3].innerText) + Number(ls1[2].innerText)*Number(ls1[3].innerText) + Number(com[1].innerText)*Number(com[ 2].innerText) + Number(ad2lab[1].innerText)*Number(ad2lab[2].innerText) + Number(ds2lab[1].innerText)*Number(ds2lab[2].innerText) + Number(emlab[1].innerText)*Number(emlab[2].innerText));
  if(isNaN(sum)){
    s2avg.innerHTML = '0.00';
  }else{
    s2avg.innerHTML = avg(sum,coeffs2);
    if(Number(avg(sum,coeffs2))<10){
      s2avg.style.color = 'red';
    }else{
      if(Number(avg(sum,coeffs2))>=10  && Number(avg(sum,coeffs2))<=20  ){
        s2avg.style.color = 'green';
      }else{
        s2avg.style.color = 'black';
      }
    }
  }
});
proba[1].addEventListener("input", function(){
  if(this.value < 0 || this.value > 20){
    invalid.style.opacity = '1';
  }else{
    invalid.style.opacity = '0';
  }
  proba[2].innerHTML = calcAvg(proba[0].value,proba[1].value);
  sum = Number(Number(ad2[2].innerText)*Number(ad2[3].innerText)+ Number(ds2[2].innerText)*Number(ds2[3].innerText) + Number(proba[2].innerText)*Number(proba[3].innerText)+ Number(em[2].innerText)*Number(em[3].innerText) + Number(ls1[2].innerText)*Number(ls1[3].innerText) + Number(com[1].innerText)*Number(com[ 2].innerText) + Number(ad2lab[1].innerText)*Number(ad2lab[2].innerText) + Number(ds2lab[1].innerText)*Number(ds2lab[2].innerText) + Number(emlab[1].innerText)*Number(emlab[2].innerText));
  if(isNaN(sum)){
    s2avg.innerHTML = '0.00';
  }else{
    s2avg.innerHTML = avg(sum,coeffs2);
    if(Number(avg(sum,coeffs2))<10){
      s2avg.style.color = 'red';
    }else{
      if(Number(avg(sum,coeffs2))>=10  && Number(avg(sum,coeffs2))<=20  ){
        s2avg.style.color = 'green';
      }else{
        s2avg.style.color = 'black';
      }
    }
  }
});
ds2[0].addEventListener("input", function(){
  if(this.value < 0 || this.value > 20){
    invalid.style.opacity = '1';
  }else{
    invalid.style.opacity = '0';
  }
  ds2[2].innerHTML = calcAvg(ds2[0].value,ds2[1].value);
  sum = Number(Number(ad2[2].innerText)*Number(ad2[3].innerText)+ Number(ds2[2].innerText)*Number(ds2[3].innerText) + Number(proba[2].innerText)*Number(proba[3].innerText)+ Number(em[2].innerText)*Number(em[3].innerText) + Number(ls1[2].innerText)*Number(ls1[3].innerText) + Number(com[1].innerText)*Number(com[ 2].innerText) + Number(ad2lab[1].innerText)*Number(ad2lab[2].innerText) + Number(ds2lab[1].innerText)*Number(ds2lab[2].innerText) + Number(emlab[1].innerText)*Number(emlab[2].innerText));
  if(isNaN(sum)){
    s2avg.innerHTML = '0.00';
  }else{
    s2avg.innerHTML = avg(sum,coeffs2);
    if(Number(avg(sum,coeffs2))<10){
      s2avg.style.color = 'red';
    }else{
      if(Number(avg(sum,coeffs2))>=10  && Number(avg(sum,coeffs2))<=20  ){
        s2avg.style.color = 'green';
      }else{
        s2avg.style.color = 'black';
      }
    }
  }
});
ds2[1].addEventListener("input",function(){
  if(this.value < 0 || this.value > 20){
    invalid.style.opacity = '1';
  }else{
    invalid.style.opacity = '0';
  }
  ds2[2].innerHTML = calcAvg(ds2[0].value,ds2[1].value);
  sum = Number(Number(ad2[2].innerText)*Number(ad2[3].innerText)+ Number(ds2[2].innerText)*Number(ds2[3].innerText) + Number(proba[2].innerText)*Number(proba[3].innerText)+ Number(em[2].innerText)*Number(em[3].innerText) + Number(ls1[2].innerText)*Number(ls1[3].innerText) + Number(com[1].innerText)*Number(com[ 2].innerText) + Number(ad2lab[1].innerText)*Number(ad2lab[2].innerText) + Number(ds2lab[1].innerText)*Number(ds2lab[2].innerText) + Number(emlab[1].innerText)*Number(emlab[2].innerText));
  if(isNaN(sum)){
    s2avg.innerHTML = '0.00';
  }else{
    s2avg.innerHTML = avg(sum,coeffs2);
    if(Number(avg(sum,coeffs2))<10){
      s2avg.style.color = 'red';
    }else{
      if(Number(avg(sum,coeffs2))>=10  && Number(avg(sum,coeffs2))<=20  ){
        s2avg.style.color = 'green';
      }else{
        s2avg.style.color = 'black';
      }
    }
  }
});
em[0].addEventListener("input", function(){
  if(this.value < 0 || this.value > 20){
    invalid.style.opacity = '1';
  }else{
    invalid.style.opacity = '0';
  }
  em[2].innerHTML = calcAvg(em[0].value,em[1].value);
  sum = Number(Number(ad2[2].innerText)*Number(ad2[3].innerText)+ Number(ds2[2].innerText)*Number(ds2[3].innerText) + Number(proba[2].innerText)*Number(proba[3].innerText)+ Number(em[2].innerText)*Number(em[3].innerText) + Number(ls1[2].innerText)*Number(ls1[3].innerText) + Number(com[1].innerText)*Number(com[ 2].innerText) + Number(ad2lab[1].innerText)*Number(ad2lab[2].innerText) + Number(ds2lab[1].innerText)*Number(ds2lab[2].innerText) + Number(emlab[1].innerText)*Number(emlab[2].innerText));
  if(isNaN(sum)){
    s2avg.innerHTML = '0.00';
  }else{
    s2avg.innerHTML = avg(sum,coeffs2);
    if(Number(avg(sum,coeffs2))<10){
      s2avg.style.color = 'red';
    }else{
      if(Number(avg(sum,coeffs2))>=10  && Number(avg(sum,coeffs2))<=20  ){
        s2avg.style.color = 'green';
      }else{
        s2avg.style.color = 'black';
      }
    }
  }
});
em[1].addEventListener("input", function(){
  if(this.value < 0 || this.value > 20){
    invalid.style.opacity = '1';
  }else{
    invalid.style.opacity = '0';
  }
  em[2].innerHTML = calcAvg(em[0].value,em[1].value);
  sum = Number(Number(ad2[2].innerText)*Number(ad2[3].innerText)+ Number(ds2[2].innerText)*Number(ds2[3].innerText) + Number(proba[2].innerText)*Number(proba[3].innerText)+ Number(em[2].innerText)*Number(em[3].innerText) + Number(ls1[2].innerText)*Number(ls1[3].innerText) + Number(com[1].innerText)*Number(com[ 2].innerText) + Number(ad2lab[1].innerText)*Number(ad2lab[2].innerText) + Number(ds2lab[1].innerText)*Number(ds2lab[2].innerText) + Number(emlab[1].innerText)*Number(emlab[2].innerText));
  if(isNaN(sum)){
    s2avg.innerHTML = '0.00';
  }else{
    s2avg.innerHTML = avg(sum,coeffs2);
    if(Number(avg(sum,coeffs2))<10){
      s2avg.style.color = 'red';
    }else{
      if(Number(avg(sum,coeffs2))>=10  && Number(avg(sum,coeffs2))<=20  ){
        s2avg.style.color = 'green';
      }else{
        s2avg.style.color = 'black';
      }
    }
  }
});
ls1[0].addEventListener("input", function(){
  if(this.value < 0 || this.value > 20){
    invalid.style.opacity = '1';
  }else{
    invalid.style.opacity = '0';
  }
  ls1[2].innerHTML = calcAvg(ls1[0].value,ls1[1].value);
  sum = Number(Number(ad2[2].innerText)*Number(ad2[3].innerText)+ Number(ds2[2].innerText)*Number(ds2[3].innerText) + Number(proba[2].innerText)*Number(proba[3].innerText)+ Number(em[2].innerText)*Number(em[3].innerText) + Number(ls1[2].innerText)*Number(ls1[3].innerText) + Number(com[1].innerText)*Number(com[ 2].innerText) + Number(ad2lab[1].innerText)*Number(ad2lab[2].innerText) + Number(ds2lab[1].innerText)*Number(ds2lab[2].innerText) + Number(emlab[1].innerText)*Number(emlab[2].innerText));
  if(isNaN(sum)){
    s2avg.innerHTML = '0.00';
  }else{
    s2avg.innerHTML = avg(sum,coeffs2);
    if(Number(avg(sum,coeffs2))<10){
      s2avg.style.color = 'red';
    }else{
      if(Number(avg(sum,coeffs2))>=10  && Number(avg(sum,coeffs2))<=20  ){
        s2avg.style.color = 'green';
      }else{
        s2avg.style.color = 'black';
      }
    }
  }
});
ls1[1].addEventListener("input", function(){
  if(this.value < 0 || this.value > 20){
    invalid.style.opacity = '1';
  }else{
    invalid.style.opacity = '0';
  }
  ls1[2].innerHTML = calcAvg(ls1[0].value,ls1[1].value);
  sum = Number(Number(ad2[2].innerText)*Number(ad2[3].innerText)+ Number(ds2[2].innerText)*Number(ds2[3].innerText) + Number(proba[2].innerText)*Number(proba[3].innerText)+ Number(em[2].innerText)*Number(em[3].innerText) + Number(ls1[2].innerText)*Number(ls1[3].innerText) + Number(com[1].innerText)*Number(com[ 2].innerText) + Number(ad2lab[1].innerText)*Number(ad2lab[2].innerText) + Number(ds2lab[1].innerText)*Number(ds2lab[2].innerText) + Number(emlab[1].innerText)*Number(emlab[2].innerText));
  if(isNaN(sum)){
    s2avg.innerHTML = '0.00';
  }else{
    s2avg.innerHTML = avg(sum,coeffs2);
    if(Number(avg(sum,coeffs2))<10){
      s2avg.style.color = 'red';
    }else{
      if(Number(avg(sum,coeffs2))>=10  && Number(avg(sum,coeffs2))<=20  ){
        s2avg.style.color = 'green';
      }else{
        s2avg.style.color = 'black';
      }
    }
  }
});
com[0].addEventListener("input", function(){
  if(this.value < 0 || this.value > 20){
    invalid.style.opacity = '1';
  }else{
    invalid.style.opacity = '0';
  }
  com[1].innerHTML = com[0].value;
  sum = Number(Number(ad2[2].innerText)*Number(ad2[3].innerText)+ Number(ds2[2].innerText)*Number(ds2[3].innerText) + Number(proba[2].innerText)*Number(proba[3].innerText)+ Number(em[2].innerText)*Number(em[3].innerText) + Number(ls1[2].innerText)*Number(ls1[3].innerText) + Number(com[1].innerText)*Number(com[ 2].innerText) + Number(ad2lab[1].innerText)*Number(ad2lab[2].innerText) + Number(ds2lab[1].innerText)*Number(ds2lab[2].innerText) + Number(emlab[1].innerText)*Number(emlab[2].innerText));
  if(isNaN(sum)){
    s2avg.innerHTML = '0.00';
  }else{
    s2avg.innerHTML = avg(sum,coeffs2);
    if(Number(avg(sum,coeffs2))<10){
      s2avg.style.color = 'red';
    }else{
      if(Number(avg(sum,coeffs2))>=10  && Number(avg(sum,coeffs2))<=20  ){
        s2avg.style.color = 'green';
      }else{
        s2avg.style.color = 'black';
      }
    }
  }
});
ad2lab[0].addEventListener("input", function(){
  if(this.value < 0 || this.value > 20){
    invalid.style.opacity = '1';
  }else{
    invalid.style.opacity = '0';
  }
  ad2lab[1].innerHTML = ad2lab[0].value;
  sum = Number(Number(ad2[2].innerText)*Number(ad2[3].innerText)+ Number(ds2[2].innerText)*Number(ds2[3].innerText) + Number(proba[2].innerText)*Number(proba[3].innerText)+ Number(em[2].innerText)*Number(em[3].innerText) + Number(ls1[2].innerText)*Number(ls1[3].innerText) + Number(com[1].innerText)*Number(com[ 2].innerText) + Number(ad2lab[1].innerText)*Number(ad2lab[2].innerText) + Number(ds2lab[1].innerText)*Number(ds2lab[2].innerText) + Number(emlab[1].innerText)*Number(emlab[2].innerText));
  if(isNaN(sum)){
    s2avg.innerHTML = '0.00';
  }else{
    s2avg.innerHTML = avg(sum,coeffs2);
    if(Number(avg(sum,coeffs2))<10){
      s2avg.style.color = 'red';
    }else{
      if(Number(avg(sum,coeffs2))>=10  && Number(avg(sum,coeffs2))<=20  ){
        s2avg.style.color = 'green';
      }else{
        s2avg.style.color = 'black';
      }
    }
  }
});
ds2lab[0].addEventListener("input", function(){
  if(this.value < 0 || this.value > 20){
    invalid.style.opacity = '1';
  }else{
    invalid.style.opacity = '0';
  }
  ds2lab[1].innerHTML = ds2lab[0].value;
  sum = Number(Number(ad2[2].innerText)*Number(ad2[3].innerText)+ Number(ds2[2].innerText)*Number(ds2[3].innerText) + Number(proba[2].innerText)*Number(proba[3].innerText)+ Number(em[2].innerText)*Number(em[3].innerText) + Number(ls1[2].innerText)*Number(ls1[3].innerText) + Number(com[1].innerText)*Number(com[ 2].innerText) + Number(ad2lab[1].innerText)*Number(ad2lab[2].innerText) + Number(ds2lab[1].innerText)*Number(ds2lab[2].innerText) + Number(emlab[1].innerText)*Number(emlab[2].innerText));
  if(isNaN(sum)){
    s2avg.innerHTML = '0.00';
  }else{
    s2avg.innerHTML = avg(sum,coeffs2);
    if(Number(avg(sum,coeffs2))<10){
      s2avg.style.color = 'red';
    }else{
      if(Number(avg(sum,coeffs2))>=10  && Number(avg(sum,coeffs2))<=20  ){
        s2avg.style.color = 'green';
      }else{
        s2avg.style.color = 'black';
      }
    }
  }
});
emlab[0].addEventListener("input", function(){
  if(this.value < 0 || this.value > 20){
    invalid.style.opacity = '1';
  }else{
    invalid.style.opacity = '0';
  }
  emlab[1].innerHTML = emlab[0].value;
  sum = Number(Number(ad2[2].innerText)*Number(ad2[3].innerText)+ Number(ds2[2].innerText)*Number(ds2[3].innerText) + Number(proba[2].innerText)*Number(proba[3].innerText)+ Number(em[2].innerText)*Number(em[3].innerText) + Number(ls1[2].innerText)*Number(ls1[3].innerText) + Number(com[1].innerText)*Number(com[ 2].innerText) + Number(ad2lab[1].innerText)*Number(ad2lab[2].innerText) + Number(ds2lab[1].innerText)*Number(ds2lab[2].innerText) + Number(emlab[1].innerText)*Number(emlab[2].innerText));
  if(isNaN(sum)){
    s2avg.innerHTML = '0.00';
  }else{
    s2avg.innerHTML = avg(sum,coeffs2);
    if(Number(avg(sum,coeffs2))<10){
      s2avg.style.color = 'red';
    }else{
      if(Number(avg(sum,coeffs2))>=10  && Number(avg(sum,coeffs2))<=20  ){
        s2avg.style.color = 'green';
      }else{
        s2avg.style.color = 'black';
      }
    }
  }
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



