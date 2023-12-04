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
      window.location.href = 'https://google.com';
    });

let menu = document.getElementById('menu');

  window.addEventListener('scroll', function(){
    if(this.innerWidth<= 800){
      if(this.scrollY >= 40){
        if(this.scrollY<= 7042){
          menu.style.position = 'fixed';
          menu.style.width = '100%';
          menu.style.top = '0px';
          menu.style.transform = 'translate(-7%,-16px)';
          menu.style.borderBottom = 'solid 3px #f4bb33';
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
    }})


