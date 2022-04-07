let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-given");
let checkBtn = document.querySelector("#check-btn")
let validityMsg = document.querySelector(".validity-msg")

checkBtn.addEventListener("click", function validateBillandCashAmount() {
   validityMsg.style.display = "none"
   if (billAmount.value > 0 ) {
       if (cashGiven.value >= billAmount.value) {
         let amoutToBeReturned = cashGiven.value - billAmount;
         calculateChange(amoutToBeReturned)
       }
      
   }
})