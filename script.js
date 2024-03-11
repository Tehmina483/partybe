let hamburger = document.querySelector(".hamburger");
let header = document.querySelector("header");
let closeMenu = document.querySelector(".fa-xmark");
hamburger.addEventListener("click",()=>{
    header.classList.toggle("active-navbar");
});
closeMenu.addEventListener("click",()=>{
    header.classList.remove("active-navbar")
})