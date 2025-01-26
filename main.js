const hamb = document.getElementById("ham");
const navlinks = document.getElementById("navlinks");

hamb.addEventListener("click", ()=>{
    
    navlinks.classList.toggle("navlinks-active");
})