const home=document.getElementById("home");
const about=document.getElementById("about");
const projects=document.getElementById("projects");
const contact=document.getElementById("contact-us");

const download=document.getElementById("Download");



home.addEventListener('click',()=>{
  location.reload();
});

download.addEventListener('click',()=>{
    window.open("Himani Zambare (ML).pdf");
})