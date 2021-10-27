const burgerMenu = document.querySelector('.burgerMenu')
const choice = document.querySelector('.list')

burgerMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle('open')
    choice.classList.toggle('open')
})