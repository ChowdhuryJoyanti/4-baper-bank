// console.log('deposit.js')
// step-1 : add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log('deposite button click')
    // step-2 : get the deposite amount from the deposite input field
    // for input field use .value to  the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositeAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositeAmount);
    // console.log(depositAmount);
    // step-3: get the current deposite total
    // for non-input (element other than input ,text-area),use innerText to get the text 
    const depositTotalElement =  document.getElementById('deposit-total');
    
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal =parseFloat(previousDepositTotalString);
    console.log( typeof previousDepositTotal)

    // console.log(typeof previousDepositTotal)
    // step-4: add numbers to set the total deposite

    const currenDepositTotal = previousDepositTotal + newDepositeAmount;
    // set the deposite total 
    depositTotalElement.innerText = currenDepositTotal;
    // console.log(depositTotal)

    // step-5:get balance current total  
    const balanceTotalElement = document.getElementById('balance-total');
     const previousBalancetTotalString = balanceTotalElement.innerText;
     const previousBalancetTotal = parseFloat(previousBalancetTotalString);

    //  sep-6: calculate current total balance
    const currentBalanceTotal  = previousBalancetTotal + newDepositeAmount;

    // set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal

    // step-7: clear the input Field
    depositField.value = '';
})