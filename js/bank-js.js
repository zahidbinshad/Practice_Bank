document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user pass
    const passwordField = document.getElementById('user-password');
    const userPass = passwordField.value;

    //email and password match 
    if (userEmail == 'zahid@ss.com' && userPass == '123456') {
        window.location.href = 'banking.html';
    }
    else {

        alert("Enter Correct Email and Password");
    }

})