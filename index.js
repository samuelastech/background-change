/**
 * Catching page's elements 
*/
 const body = document.querySelector('body')
 const button = document.querySelector('button')

 /**
  * Array with colors
 */
 const colors = 'pink black blue red yellow gray'.split(' ')

 /**
  * 'Listening' to the button's click
 */
 button.addEventListener('click', () => {
     const randomIndex = Math.floor(Math.random() * colors.length)
     const color = colors[randomIndex]
     body.style.backgroundColor = color
 })