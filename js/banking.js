document.getElementById('btn-deposite').addEventListener('click', function () {
    //get the diposited amount from input 
    const dipositeInput = document.getElementById('diposite-amount');
    const newDipositeAmount = dipositeInput.value;


    let depositeTotal = document.getElementById('deposite-total');
    const previousDepositeAmount = depositeTotal.innerText;
    const newDepositeTotal = parseFloat(previousDepositeAmount) + parseFloat(newDipositeAmount);

    depositeTotal.innerText = newDepositeTotal;

    //update balnce 
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceAmount = parseFloat(previousBalanceTotal) + parseFloat(newDipositeAmount);

    balanceTotal.innerText = newBalanceAmount;



    //clear the input
    dipositeInput.value = '';




})
// working with Withdraw section 

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);


    // setwithdrawtotal 

    const withdrawTotal = document.getElementById('withdraw-total');
    const oldWithdrawTotal =parseFloat(withdrawTotal.innerText);

    const totalWithdrawAmount = withdrawAmountNumber + oldWithdrawTotal;

    withdrawTotal.innerText = totalWithdrawAmount;
    

    //Balance Update after withdraw

    const balanceUpdate = document.getElementById('balance-total');
    const latestBalance = parseFloat(balanceUpdate.innerText);

    const updatedBalanceAfterWithdraw = latestBalance - withdrawAmountNumber ;

    balanceUpdate.innerText = updatedBalanceAfterWithdraw;



    //clearInout 
    withdrawInput.value = '';

    
})




