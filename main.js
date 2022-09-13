const dropDown = document.querySelector('.header-features')
const myDrop = document.querySelector('#head')
const myDropDown = document.querySelectorAll('ul')
dropDown.addEventListener("click", hideShow)
function hideShow() {
    for (let i = 1; i < 3; i++) {
        myDropDown[i].classList.toggle('dropdown')       
            
    }
    
}
console.log(dropDown)