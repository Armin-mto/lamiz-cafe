var menuBtn = document.getElementById('menuBtn')
var menu = document.getElementById('menu')
var sideNav = document.getElementById('sideNav')


sideNav.style.right = "-200px"
menuBtn.onclick = function(){
    if(sideNav.style.right == "-200px"){
        sideNav.style.right = "0"
        menu.src = "./image/close menu.png";
    }
    else {
        sideNav.style.right = "-200px"
        menu.src = "./image/icons8-menu-50.png";
    }
}