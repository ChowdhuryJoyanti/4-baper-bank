// step-1:add click event handler with the submit button

console.log('submit')
document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('submit button clicked')
    // step -2:get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step -3:get password
    // 3.a:set id on the html element
    // 3.b:get the element 
    // 3.c:get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // danger: Do not verify email password on the client side
    // step-4:verify email and password
    if(email ==='sontan@bap.com' && password ==='secret'){
        window.location.href = 'bank.html'


    }
    else{
     alert('Tui password vule gesos !!! toke teijjo ghososna kore dilam');
    }
 })