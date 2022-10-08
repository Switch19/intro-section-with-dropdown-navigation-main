const dropDown = document.querySelectorAll('.header-features');
dropDown.forEach(function(drop){
    const btn = drop.querySelector('.menu');
    const imgs = drop.querySelector('.img');
     drop.addEventListener('click', function(){
        dropDown.forEach(function(item){
            if (item !== drop) {
                item.classList.remove("dropdown")
                item.classList.remove("rotate")
            }
        })
        btn.classList.toggle("dropdown");
        imgs.classList.toggle("rotate");    
    })
})
// mobile layout

const mobileDropDown = document.querySelectorAll('.features');
 mobileDropDown.forEach(function(drops){
    const btn = drops.querySelector('.menus');
    const imgs = drops.querySelector('.imgs')

    drops.addEventListener('click', function(){
        mobileDropDown.forEach(function(item){
            if (item !== drops) {
                item.classList.remove("show-link")
                item.classList.remove("rotate")
            }
        })
        imgs.classList.toggle("rotate");

        btn.classList.toggle("show-link");
    })
})
// navbar-toggle
const navToggle = document.querySelector('.nav-btn');
const links = document.querySelector('.side-bar');
const menuOpen = document.querySelector('.hamburger')
const menuClose = document.querySelector('.cross')

navToggle.addEventListener('click', function () {
    menuOpen.classList.toggle('open')
    links.classList.toggle('hide')
    if (menuOpen.classList.contains('open')) {
       menuClose.classList.remove('close') 
    }else{
        menuClose.classList.add('close') 
    }
});

// menu toggle
// console.log(navButton)



