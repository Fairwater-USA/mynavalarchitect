const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
if(burger){
  burger.addEventListener("click", ()=>{
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.background = "rgba(7,11,21,.95)";
    navLinks.style.position = "absolute";
    navLinks.style.top = "56px";
    navLinks.style.right = "4%";
    navLinks.style.padding = "12px";
    navLinks.style.border = "1px solid rgba(255,255,255,.08)";
    navLinks.style.borderRadius = "12px";
  });
}
