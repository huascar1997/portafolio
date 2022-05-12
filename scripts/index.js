 const buton = document.querySelector('.contact-me')
 const form = document.querySelector('.form')
 const list = document.querySelector('.redes')

 buton.addEventListener('click',function(){
     form.classList.add('animate__bounceInDown')
     form.classList.add('animacion')

     list.classList.add('animacion-redes')
     list.classList.add('animate__bounceInLeft')

 })