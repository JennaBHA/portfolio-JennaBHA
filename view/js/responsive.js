const menuHamburger = document.querySelector(".menu-hamburger")
const navBar = document.querySelector(".navbar")

menuHamburger.addEventListener('click',()=>{
navBar.classList.toggle('mobile-menu')
})