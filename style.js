const mobileDropDown = document.querySelectorAll('.features');
 mobileDropDown.forEach(function(drop){
    const btn = drop.querySelector('.menus');
    const imgs = drop.querySelector('.imgs')

    drop.addEventListener('click', function(){
        mobileDropDown.forEach(function(item){
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

