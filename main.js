const dropDown = document.querySelector('.drop')
const myDropDown = document.querySelectorAll('ul')
dropDown.forEach(element => {
    dropDown.innerHTML = "hello world"
});
function hideShow() {
    for (let i = 1; i < 3; i++) {
        myDropDown[i].classList.toggle('dropdown')
        
            
    }
    
}
console.log(dropDown)