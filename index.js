// Catching page's elements 
const body = document.querySelector('body')
const ranButton = document.querySelector('.random_button')
const selColor = document.querySelector('.select_color')


// Array with colors
const colors = 'pink black blue red yellow gray'.split(' ')


// 'Listening' to the button's click
ranButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    const color = colors[randomIndex]
    body.style.backgroundColor = color
    ranButton.style.color = color
})


// Changing color by selector
function changeColor() {
    body.style.backgroundColor = selColor.value
    ranButton.style.color = selColor.value
}
