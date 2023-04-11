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

    // console.log(typeof(tempAmount)) -> number
    tempAmount = totalAmount.value;
    // console.log(typeof(totalAmount.value)) -> string
    // console.log(typeof(tempAmount)) -> string
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


// Add expense function

checkAmountButton.addEventListener("click", ()=> {
    // check empty
    if (!userAmount.value || !productTitle.value){
        productTitleError.classList.remove("hide");
        return false;
    }
    // Enable buttons

    // Expense
    // type="number" is a hint to implement client-side validation and appropriate GUI controls but the underlying element will still store strings.
    // "10" + "20" = "1020"
    // "5" -3 = 2
    // 5 - "3" = 2
    let expenditure = parseInt(userAmount.value);
    let sum = parseInt(expenditureValue.innerText) + expenditure;
    expenditureValue.innerText = sum;
    const totalBalance = tempAmount - sum;
    balanceValue.innerText = totalBalance;

    // Create list

    productTitle.value = "";
    userAmount.value = "";

})