const dropDown = document.querySelectorAll('.header-features');
dropDown.forEach(function(drop){
    const btn = drop.querySelector('.menu');
    const imgs = drop.querySelector('.img')

    drop.addEventListener('click', function(){
        dropDown.forEach(function(item){
            if (item !== drop) {
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
console.log(navToggle)

navToggle.addEventListener('click', function () {
    links.classList.toggle('hide')
});

