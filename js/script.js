var menuButton = document.getElementById('menu-button')
var menuOptions = document.getElementById('menu-options')

menuButton.addEventListener('click', function() {
    menuOptions.style.display = (menuOptions.style.display === 'block')
})