// var collapseToggles = document.querySelectorAll(".collapsible-nav-toggle");

// for(var i=0 ; i<collapseToggles.length ; i++) {
//     collapseToggles[i].addEventListener("click", function(){
//         this.classList.toggle("active");
//         var item = this.nextElementSibling;
//         if(item.style.display === "block"){
//             item.style.display = "none";
//         } else {
//             item.style.display = "block";
//         }
//     });
// }

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


