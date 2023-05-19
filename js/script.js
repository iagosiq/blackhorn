var menuButton = document.getElementsByClassName('menu')
var menuOptions = document.getElementById('menu-options')

menuButton.addEventListener('click', function() {
    menuOptions.style.display = (menuOptions.style.display === 'block')
})