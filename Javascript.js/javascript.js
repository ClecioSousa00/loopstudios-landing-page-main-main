
let menuIcon = document.querySelector('#menu-icon')
let nav = document.querySelector('#nav')
let menuOpen = document.querySelector('.header__icon-active')
let iconClose = document.querySelector('#icon-close')

menuIcon.addEventListener('click',()=>{
    menuOpen.style.display = 'block'
    nav.style.display = 'none'
})

iconClose.addEventListener('click',()=>{
    menuOpen.style.display = 'none'
    nav.style.display = 'flex'
})