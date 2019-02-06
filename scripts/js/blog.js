var navCollapseToggle = document.querySelector(".v-sidebar__list");

var navCollapseToggle = document.querySelector("#nav-collapse-button");
var navLinks = document.querySelector("#nav-links");
var navBarHeight = document.querySelector("#navbar").style.height;
navBarHeight = document.querySelector("#content-box").style.height;


navCollapseToggle.addEventListener("click", function(){
    if(navLinks.style.display === "flex"){
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
});