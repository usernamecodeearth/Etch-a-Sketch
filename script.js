const squares = document.querySelectorAll('.squares');
// const eightBtn = document.querySelector('.eightBtn');

squares.forEach(square => {
    square.addEventListener('mouseover', e => {
       square.setAttribute('id', 'colorChange')
    })
})

// eightBtn.addEventListener('submit', e => {
//    e.preventDefault()
//     alert('yep');
    
// })

function eight(){
    var element = document.getElementsById("eightBoard")
    element.classList.toggle("eightBoard")
}