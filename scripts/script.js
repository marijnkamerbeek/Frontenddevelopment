var buttonMenu = document.querySelector("#menuicoon");
var menu = document.querySelector(".menulinks");
//var foto = document.getElementById("menuicoon");

buttonMenu.addEventListener("click", uitklappen);

function uitklappen(){
    menu.classList.toggle("open")
//    foto.src = "images/menuicoon2.svg";
}
