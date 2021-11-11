// Get the input fields
var $name     = document.querySelector('.name');
var $lastName = document.querySelector('.lastName');
var $email    = document.querySelector('.email');
var $password = document.querySelector(".password");
var $phone    = document.querySelector('.phone');

var $submit =   document.getElementById('btnSubmit');
var $form =     document.getElementById('checkOutForm');

$form.addEventListener('submit', e => {
    e.preventDefault()
})
// Get the error elements
var $errorName = document.getElementById('errorName');
var $errorLastName = document.getElementById('errorLastName');
var $errorEmail = document.getElementById('errorEmail');
var $errorPassword = document.getElementById("errorPassword");
var $errorPhone = document.getElementById('errorPhone');

// Exercise 8
function validate() {
    // $submit.disabled = true;
    // Validate fields entered by the user: name, phone, password, and email
    console.log("validating...");

    validateName($name);
    validateLastName($lastName);
    //validateMail($email);
    //validatePass($password);
    //validatePhone($phone);


    console.log("end validating...");
}

function validateName(vname){
    let val= vname.value;
    notEmpty3chars(val);
    //onlyLettersSpaces(val);
    if(onlyLettersSpaces(val)==false){
    $errorName.classList.add('showError');
    }else {
        $errorName.classList.remove('showError');
    }
}

function validateLastName(vlname){
    let val= vlname.value;
    notEmpty3chars(val);
    //onlyLettersSpaces(val);
    if(onlyLettersSpaces(val)==false){
    $errorLastName.classList.add('showError');
    }else {
    $errorLastName.classList.remove('showError');
    }
}




function validatePhone(vphone){
    console.log("phone: "+vphone.value);

}
function validatePass(vpass){
    console.log("pass: "+vpass.value);

}
function validateMail(vmail){
    console.log("mail: "+vmail.value);

}

function onlyLettersSpaces(vinput){
     // only leters and spaces
     let Regex =/^[a-zA-Z\s]*$/;
     if ( Regex.test(vinput) ) {
        return true;
    } else {
        console.log("Nooks");
        return false;

    }

}

function notEmpty3chars(vinput){
    //
    if (vinput.length <= 3) {
        console.log("less than 3: "+ vinput.length);
    }

}
