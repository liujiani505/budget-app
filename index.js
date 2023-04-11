let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");

let tempAmount = 0;



// set budget function
totalAmountButton.addEventListener("click", ()=>{
    tempAmount = totalAmount.value;
    // bad input
    if ( tempAmount === "" || tempAmount < 0){
        errorMessage.classList.remove("hide");
    } else {
        errorMessage.classList.add("hide");
        // set budget
        amount.innerText = tempAmount;
        balanceValue.innerText = tempAmount - expenditureValue.innerText;
        // clear input
        totalAmount.value = "";
    }
});


