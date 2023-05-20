// var menuButton = document.getElementsByClassName('menu')
// var menuOptions = document.getElementById('menu-options')

// menuButton.addEventListener('click', function() {
//     menuOptions.style.display = (menuOptions.style.display === 'block')
// })

// 

function abrir_menu() {
    var options = document.getElementById('menu-options');

    if (options.style.display === 'none') {
        options.style.display = 'block';
    } else {
        options.style.display = 'none';
    }
}