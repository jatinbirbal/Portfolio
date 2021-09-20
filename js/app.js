let ham=document.querySelector(".hamburger");
let lnks=document.querySelector(".myshow");
let l1=document.getElementById("l1");
let l2=document.getElementById("l2");
let l3=document.getElementById("l3");

ham.addEventListener("click",()=>{
    lnks.classList.toggle("show");    
    l1.classList.toggle("l1demo");
    l2.classList.toggle("l3demo");
    l3.classList.toggle("l2demo");
});