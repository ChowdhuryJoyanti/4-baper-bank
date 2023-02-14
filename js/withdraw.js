// console.log('withdraw.js');
/*
1.add event handler with the withdraw btn 
2.get the withdraw amount from input field
3.also make sure to convert the input into a number
4.calculate total withdraw amount
4.5 set total withdraw amount

5.get the previous baalance
6.calculate new balance total
6.5 set the new balance total
7.clear the input field




*/
// step -1:
document.getElementById('btn-withdraw').addEventListener('click',function(){
    console.log('withdraw button clicked');
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const nweWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(nweWithdrawAmountString)
console.log(newWithdrawAmount);

// step-3
const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);

    // step -4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

// step-5

const balanceTotalElement = document.getElementById('balance-total');
const previousBalancetTotalString = balanceTotalElement.innerText;
const previousBalancetTotal = parseFloat(previousBalancetTotalString)


// step-6
const newBalanceTotal = previousBalancetTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;
// step-7
    withdrawField.value ='';

})

