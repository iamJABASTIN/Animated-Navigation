const nav = document.getElementById('nav')
const btn = document.getElementById('toggle')

btn.addEventListener('click', () => {
    nav.classList.toggle('active')
})