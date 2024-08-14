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

  let dropdown1 = document.getElementById('dropbtn1');
  let dropdown2 = document.getElementById('dropbtn2');
  let dropdown3 = document.getElementById('dropbtn3');
  let dropdown4 = document.getElementById('dropbtn4');
  let dropdown5 = document.getElementById('dropbtn5');
  let lst = document.querySelectorAll('.dropdown-content');

    dropdown1.addEventListener('click', function(){
        if(lst[0].style.display == 'block'){
            lst[0].style.display = 'none';
        }
        else{
            lst[0].style.display = 'block';
        }
    });
    dropdown2.addEventListener('click', function(){
        if(lst[1].style.display == 'block'){
            lst[1].style.display = 'none';
        }
        else{
            lst[1].style.display = 'block';
        }
    });
    dropdown3.addEventListener('click', function(){
        if(lst[2].style.display == 'block'){
            lst[2].style.display = 'none';
        }
        else{
            lst[2].style.display = 'block';
        }
    });
    dropdown4.addEventListener('click', function(){
        if(lst[3].style.display == 'block'){
            lst[3].style.display = 'none';
        }
        else{
            lst[3].style.display = 'block';
        }
    });
    dropdown5.addEventListener('click', function(){
        if(lst[4].style.display == 'block'){
            lst[4].style.display = 'none';
        }
        else{
            lst[4].style.display = 'block';
        }
    });

    let dropfaq1 = document.getElementById('dropbtnfaq1');
    let droplistfaq = document.querySelectorAll('.dropdown-contentfaq');

    dropfaq1.addEventListener('click', function(){
        if(droplistfaq[0].style.height == '0px'){
            droplistfaq[0].style.height = 'auto';
        }
        else{
            droplistfaq[0].style.height = '0px';
        }
    });
  
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