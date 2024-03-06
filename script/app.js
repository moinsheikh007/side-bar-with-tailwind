const menuBar = document.getElementById('menuBar');
const navbar = document.querySelector('.hidden');
menuBar.onclick = () => {
    navbar.classList.toggle('hidden');
    menuBar.classList.toggle('bx-x')
}
window.onscroll = () => {
    navbar.classList.add('hidden')
    menuBar.classList.remove('bx-x')
}