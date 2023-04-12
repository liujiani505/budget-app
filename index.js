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


// Modify list elements function

// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
const modifyElement = (element, edit = false) => {
    let parentDiv = element.parentElement;
    let currentBalance = balanceValue.innerText;
    let currentExpense = expenditureValue.innerText;
    let parentAmount = parentDiv.querySelector(".amount").innerText;
    if (edit) {
        let parentText = parentDiv.querySelector(".product").innerText;
        productTitle.value = parentText;
        userAmount.value = parentAmount;
    }
    balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
    expenditureValue.innerText = parseInt(currentExpense) - parseInt(parentAmount);
    parentDiv.remove();
}


// Create list function 

const listCreator = (expenseName, expenseValue) => {
    let subListContent = document.createElement("div");
    subListContent.classList.add("sublist-content", "flex-space");
    subListContent.innerHTML = `<p class="product">${expenseName}</p><P class="amount">${expenseValue}</p>`;
    list.appendChild(subListContent);
    let editButton = document.createElement("button");
    editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
    editButton.style.fontSize = "1.2em";
    editButton.addEventListener("click", () => {
        modifyElement(editButton, true);
    });
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
    deleteButton.style.fontSize = "1.2em";
    deleteButton.addEventListener("click", () => {
        modifyElement(deleteButton);
    });
    subListContent.appendChild(editButton);
    subListContent.appendChild(deleteButton);
}


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
    // Total expense (existing + new)
    let sum = parseInt(expenditureValue.innerText) + expenditure;
    expenditureValue.innerText = sum;
    // Total balance = budget - total expense
    const totalBalance = tempAmount - sum;
    balanceValue.innerText = totalBalance;
    // Create list
    listCreator(productTitle.value, userAmount.value)
    // Clear inputs
    productTitle.value = "";
    userAmount.value = "";
})
