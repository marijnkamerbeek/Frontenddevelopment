var buttonMenu = document.querySelector("#menuicoon");
var menu = document.querySelector(".menulinks");


buttonMenu.addEventListener("click", uitklappen);

function uitklappen(){
    menu.classList.toggle("open")
}


