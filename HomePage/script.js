// menu Hamburger
const ulList = document.querySelector('.menu__items-list')
const menuHamburger = document.querySelector('.menu__burgers')
const barsIco = document.querySelector('.fa-bars')
const xIco = document.querySelector('.fa-times')

const changeIcon = () => {
    barsIco.classList.toggle('menu__btn--hide')
    xIco.classList.toggle('menu__btn--hide')
}
const handleNavToggle = () => {
    ulList.classList.toggle('menu__items-list--activ')
    menuHamburger.classList.toggle('menu__burgers--activ')
}

menuHamburger.addEventListener('click', changeIcon)
menuHamburger.addEventListener('click', handleNavToggle)