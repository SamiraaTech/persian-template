
const navToggle = document.querySelector('.nav-toggle')
const body = document.querySelector('body')

navToggle.addEventListener('click', function(e) {
    e.preventDefault()
    body.classList.toggle('show-menu')
})