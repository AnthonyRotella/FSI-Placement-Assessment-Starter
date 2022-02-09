// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle


let minusGingerbread = document.querySelector('#quantity-down')
let addChocolateCookieChip = document.querySelector('#quantity-up')
let minusChocholateChip = document.querySelector('#quantity-down')
let addSugur = document.querySelector('#quantity-up')
let minusSugur = document.querySelector('#quantity-down')
let num = 1


minusGb.addEventListener('click', function() {
    num--
    console.log('minus-gb button clicked')
    console.log(num)
    quantity.textContent = `Quantity: ${num}`
 })
 
 addCc.addEventListener('click', function(){
     num++
     console.log('add-cc button clicked')
     console.log(num)
     quantity.textContent = `Quantity: ${num}`
  })
 
  minusCc.addEventListener('click', function(){
     num--
     console.log('minus-cc button clicked')
     console.log(num)
     quantity.textContent = `Quantity: ${num}`
  })
 
  addSugur.addEventListener('click', function(){
     num++
     console.log('add-sugur button clicked')
     console.log(num)
     quantity.textContent = `Quantity: ${num}`
  })
 minusSugur.addEventListener('click', function(){
     num--
     console.log('minus-sugur button clicked')
     console.log(num)
     quantity.textContent = `Quantity: ${num}`
  })
 

// First, tell us your name
let yourName = "jane Doe" // HINT: Replace this with your own name!



// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')




// Code to update name display
credit.textContent = `Created by ${credit}`




// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {



// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons



