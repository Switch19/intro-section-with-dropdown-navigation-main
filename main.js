// const myDropDown = document.querySelectorAll('.menu');
// const imgs = document.querySelectorAll('.img')

// dropDown.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         console.log(e.currentTarget.lastChild)
//     })
// })
const dropDown = document.querySelectorAll('.header-features');
dropDown.forEach(function(drop){
    const btn = drop.querySelector('.menu');
    const imgs = drop.querySelector('.img')

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
    // console.log(imgs);
})

