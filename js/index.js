const elBox = document.querySelector('.site-header')
const elBtn = document.querySelector('.site-header__button')

elBtn.addEventListener('click', () => {
    elBox.classList.toggle("site-header--active")
})