document.getElementById('btn-deposite').addEventListener('click', function () {
    //get the diposited amount from input 
    const dipositeInput = document.getElementById('diposite-amount');
    const dipositeAmount = dipositeInput.value;


    let depositeTotal = document.getElementById('deposite-total');
    depositeTotal.innerText = dipositeAmount;




})
