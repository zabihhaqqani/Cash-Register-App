let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-given");
let checkBtn = document.querySelector("#check-btn")
let validityMsg = document.querySelector("#validity-msg")
let noOfNotes = document.querySelectorAll(".no-of-notes")
let nextBtn = document.querySelector("#next-btn")
let hideCash = document.querySelector("#hide-cash")
let section = document.querySelector("#section")
let invalidMsg = document.querySelector("#invalid-msg")

let availableNotes = [2000, 500, 100, 20, 10, 5, 1]

//hiding all the sections initially
hideCash.style.display = "none"
section.style.display = "none"


nextBtn.addEventListener("click",function(){
 if(billAmount.value <= 0) { 
    hideCash.style.display = "none"
    section.style.display = "none"
    invalidMsg.innerText = "invalid value"
 }else{
   invalidMsg.innerText = ""

   hideCash.style.display = "block"}
})


checkBtn.addEventListener("click", function (){
  if(cashGiven.value < billAmount.value){
     invalidCashMsg()
      section.style.display = "none"
  }
 })


 //taking input from user
checkBtn.addEventListener("click", function () {
  validityMsg.style.display = "none"
  if (billAmount.value > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
        section.style.display = "block"
        amountToBeReturned = cashGiven.value - billAmount.value   
        calculateAmount(amountToBeReturned)
    } else {
      invalidCashMsg()
    }
  } else {
      invalidAmountMsg()
  }
})


function invalidCashMsg(){
 validityMsg.style.display = "block"
 validityMsg.innerText = "Do you want to wash the Dishes?\n Give proper Cash amount"
}

function invalidAmountMsg(){
  validityMsg.style.display = "block"
  validityMsg.innerText = "Invalid Bill Amount"
}

//checking all the notes from biggest to smallest
function calculateAmount(){
  for( let i=0; i<availableNotes.length ; i++){
  const numberOfNotes = Math.trunc( amountToBeReturned/availableNotes [i]);
  amountToBeReturned =  amountToBeReturned% availableNotes[i];
  noOfNotes[i].innerText= numberOfNotes;
  
  }
}