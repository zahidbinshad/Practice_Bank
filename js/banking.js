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
