// adjusment collapse navbar
document.querySelector(".navbar-toggler").addEventListener("click",()=>{
    document.querySelector(".navbar-collapse").classList.toggle("show")
})



const navMain = $(".navbar");
const links = $(".navbar .nav-link");
const activeLink = $(".navbar-dark .navbar-nav .active>.nav-link")
const navbar_brand = $(".navbar-dark .navbar-brand");

let collapse  = document.getElementById("navbarSupportedContent1")
let brand = document.querySelector(".navbar-brand")

const mediaBg = (x)=>{
    if (x.matches) {
        $(window).scroll(function(){
            if($(window).scrollTop() > 20){
                navMain.addClass("bg-dark");
                activeLink.css("color"," black")
                navbar_brand.addClass("text-dark")
            }else{
                navMain.removeClass("bg-dark");
                 navbar_brand.removeClass("text-dark")
            }
        })
    }


}

let x = window.matchMedia("(min-width: 768px)")
mediaBg(x)
x.addListener(mediaBg) 

 $(window).scroll((e)=>{
    if ($(window).scrollTop() > 20) {
         navMain.css("padding","1rem 0")
         $(".navbar-brand img").css("width"," 8rem",)
        
    }else{
        navMain.css("padding","2rem 0")
         $(".navbar-brand img").css("width"," 11rem",)
    }
 })

;
 document.querySelectorAll(".navbar-nav .nav-link").forEach((link)=>{
     link.addEventListener("click",()=>{
        collapse.classList.remove("show")
     })
 })

 brand.addEventListener("click",()=>{
    collapse.classList.remove("show")
 })

