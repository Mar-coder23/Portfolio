let hamburger = document.getElementById('hamburger');
let menu = document.getElementById('menu');
let hiddenText = document.querySelector('.helloText2Hidden');

// function for when hamburger is clicked to open and close menu
function hamburgerClick(){
    if (menu.classList.contains('open')) {
        menu.classList.remove('open'); // Close the menu
    } else {
        menu.classList.add('open'); // Open the menu
    }
};

// function to have hamburger stay on X when menu is opened and vise versa
function hamburgerIcon(){
    hamburger.classList.toggle('active');
}


