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
    let dropfaq2 = document.getElementById('dropbtnfaq2');
    let dropfaq3 = document.getElementById('dropbtnfaq3');
    let dropfaq4 = document.getElementById('dropbtnfaq4');
    let dropfaq5 = document.getElementById('dropbtnfaq5');
    let dropfaq6 = document.getElementById('dropbtnfaq6');
    let dropfaq7 = document.getElementById('dropbtnfaq7');
    let dropfaq8 = document.getElementById('dropbtnfaq8');
    let dropfaq9 = document.getElementById('dropbtnfaq9');
    let dropfaq10 = document.getElementById('dropbtnfaq10');
    let droplistfaq = document.querySelectorAll('.dropdown-contentfaq');
    
    
    dropfaq1.addEventListener('click', function(){
        if(droplistfaq[0].style.height == '0px'){
            droplistfaq[0].style.height = '260px';
        }
        else{
            droplistfaq[0].style.height = '0px';
        }
    });

    dropfaq2.addEventListener('click', function(){
        if(droplistfaq[1].style.height == '0px'){
            droplistfaq[1].style.height = '140px';
        }
        else{
            droplistfaq[1].style.height = '0px';
        }
    });
    dropfaq3.addEventListener('click', function(){
      if(droplistfaq[2].style.height == '0px'){
          droplistfaq[2].style.height = '100px';
      }
      else{
          droplistfaq[2].style.height = '0px';
      }
  });
  dropfaq4.addEventListener('click', function(){
    if(droplistfaq[3].style.height == '0px'){
        droplistfaq[3].style.height = '160px';
    }
    else{
        droplistfaq[3].style.height = '0px';
    }
});
  dropfaq5.addEventListener('click', function(){
    if(droplistfaq[4].style.height == '0px'){
        droplistfaq[4].style.height = '100px';
    }
    else{
        droplistfaq[4].style.height = '0px';
    }
  });
  dropfaq6.addEventListener('click', function(){
    if(droplistfaq[5].style.height == '0px'){
        droplistfaq[5].style.height = '150px';
    }
    else{
        droplistfaq[5].style.height = '0px';
    }
  });
  dropfaq7.addEventListener('click', function(){
    if(droplistfaq[6].style.height == '0px'){
        droplistfaq[6].style.height = '180px';
    }
    else{
        droplistfaq[6].style.height = '0px';
    }
  });
  dropfaq8.addEventListener('click', function(){
    if(droplistfaq[7].style.height == '0px'){
        droplistfaq[7].style.height = '140px';
    }
    else{
        droplistfaq[7].style.height = '0px';
    }
  });
  dropfaq9.addEventListener('click', function(){
    if(droplistfaq[8].style.height == '0px'){
        droplistfaq[8].style.height = '120px';
    }
    else{
        droplistfaq[8].style.height = '0px';
    }
  });
  dropfaq10.addEventListener('click', function(){
    if(droplistfaq[9].style.height == '0px'){
        droplistfaq[9].style.height = '180px';
    }
    else{
        droplistfaq[9].style.height = '0px';
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


