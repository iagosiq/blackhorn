// var menuButton = document.getElementsByClassName('menu')
// var menuOptions = document.getElementById('menu-options')

// menuButton.addEventListener('click', function() {
//     menuOptions.style.display = (menuOptions.style.display === 'block')
// })

function abrir_menu(){
    var options = document.getElementById('menu-options')
    // options.style.display = (options.style.display === 'block')
    if (options.style.display === 'none') {
        options.style.display = (options.style.display === 'block')
    }
    else if (options.style.display === 'block') {
        options.style.display = (options.style.display === 'none')
    }
}