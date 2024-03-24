const menu = document.querySelector('.nav-menu');
const navbar = document.querySelector('#nav-menu');
const closee = document.querySelector('.nav-close');
const headerr = document.querySelector('header');


window.addEventListener("scroll", function(){
    if(this.scrollY >=10 ) headerr.classList.add("header-active"); else headerr.classList.remove("header-active");
})


menu.addEventListener('click', function(){
    navbar.classList.toggle('hidden');
    navbar.classList.add('active')
})


