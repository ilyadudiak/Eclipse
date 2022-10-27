const menu = document.querySelector(".menu");
const menuItems = document.querySelector(".menuItem")
const hamburger = document.querySelector(".hamburger")
const closeIcon = document.querySelector(".closeIcon")
const menuIcon = document.querySelector(".menuIcon")

function toggleMenu(){
    if(menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
        
    } else{
        menu.classList.add("showMenu");
    }
}

hamburger.addEventListener("click", toggleMenu);

const details = document.querySelector(".answers__details");

if(details.classList.contains("open")){
    details.classList.add("answers__opened");
} else{
    details.classList.remove("answers__opened")
}