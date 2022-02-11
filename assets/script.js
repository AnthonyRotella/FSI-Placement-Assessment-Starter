let yourName = "Anthony Rotella"
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

const credit = document.querySelector('#credit')
credit.textContent = `created by ${yourName}`

const gbQuantity = document.querySelector('#qty-gb')
const ccQuantity = document.querySelector('#qty-cc')
const sugarQuantity = document.querySelector('#qty-sugar')
const totalQuantity = document.querySelector('#qty-total')

const gbPlusBtn = document.querySelector('#add-gb')
gbPlusBtn.addEventListener('click', function() {
   
   console.log('Gingerbread + button was clicked!')
   gb++
   gbQuantity.innerHTML=gb
   totalQuantity.innerHTML=gb+cc+sugar

})

const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function() {
   
   console.log('Gingerbread - button was clicked!')
     
   if (gb > 0){
      gb--
   }
   gbQuantity.innerHTML=gb
   totalQuantity.innerHTML=gb+cc+sugar
})
   
const ccPlusBtn = document.querySelector('#add-cc')
ccPlusBtn.addEventListener('click', function() {
   
   console.log('Chocolate Chip + button was clicked!')
   cc++
   ccQuantity.innerHTML=cc
   totalQuantity.innerHTML=gb+cc+sugar

})

const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function() {
   
   console.log('Chocolate Chip - button was clicked!')
   
   if (cc > 0){
      cc--
   }
   ccQuantity.innerHTML=cc
   totalQuantity.innerHTML=gb+cc+sugar

})

const sugarPlusBtn = document.querySelector('#add-sugar')
sugarPlusBtn.addEventListener('click', function() {
   
   console.log('Sugar + button was clicked!')
   sugar++
   sugarQuantity.innerHTML=sugar
   totalQuantity.innerHTML=gb+cc+sugar

})

const sugarMinusBtn = document.querySelector('#minus-sugar')
sugarMinusBtn.addEventListener('click', function() {
   
   console.log('Sugar - button was clicked!')
   if (sugar > 0){
      sugar--   
   }
   sugarQuantity.innerHTML=sugar
   totalQuantity.innerHTML=gb+cc+sugar

})     