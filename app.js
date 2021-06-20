const menuBarras = document.querySelector('.nav__toogle');
const menuLista = document.querySelector('.nav__ul');

const body = document.querySelector('body')

menuBarras.addEventListener('click', () =>{

  if (menuLista.style.display === 'flex'){
    menuLista.style.display = 'none'
  } else
  menuLista.style.display = 'flex' 

  menuLista.classList.toggle('nav__ul--responsive');

  if(body.style.overflow === 'hidden'){
    body.style.overflow = 'visible'    
  } else{
    body.style.overflow = 'hidden'
  }

})