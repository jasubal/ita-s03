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
var $gName = document.getElementById('group-name');
var $gLastName = document.getElementById('group-lastName');
var $gEmail = document.getElementById('group-email');
var $gPassword = document.getElementById("group-password");
var $gPhone = document.getElementById('group-phone');

// Get the error elements
var $errorName = document.getElementById('errorName');
var $errorLastName = document.getElementById('errorLastName');
var $errorEmail = document.getElementById('errorEmail');
var $errorPassword = document.getElementById("errorPassword");
var $errorPhone = document.getElementById('errorPhone');

// Exercise 8
function validate() {

    //$submit.disabled = true;
    // Validate fields entered by the user: name, phone, password, and email
    console.log("validating...");

    validateName($name);
    validateLastName($lastName);
    validateMail($email);
    //validatePass($password);
    //validatePhone($phone);

    console.log("end validating...");
}

function validateName(vname){
    let val= vname.value;
    console.log(val);
    if (empty3chars(val)==true){
       $gName.classList.add('showError');
    }else if (onlyLettersSpaces(val)==false) {
        $gName.classList.add('showError');
    }else {
        $gName.classList.remove('showError');
    }
}

function validateLastName(vlname){
    let val= vlname.value;
    console.log(val);
    if (empty3chars(val)==true){
        $gLastName.classList.add('showError');
     }else if (onlyLettersSpaces(val)==false) {
         $gLastName.classList.add('showError');
     }else {
         $gLastName.classList.remove('showError');
     }
}


function validateMail(vmail){
    let val= vmail.value;
    // correct mail format
    let Regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    console.log("mail: "+val);
    if (Regex.test(val)) {
        $gEmail.classList.remove('showError');
    }else {
        console.log("invalid mail");
        $gEmail.classList.add('showError');
    return false;
    }
}
function validatePass(vpass){
    console.log("pass: "+vpass.value);

}


function validatePhone(vphone){
    console.log("phone: "+vphone.value);

}



function onlyLettersSpaces(vinput){
     // only leters and spaces
     let Regex =/^[a-zA-Z\s]*$/;
     if ( Regex.test(vinput) ) {
        //console.log("onlyLettersSpaces");
        return true;
    }else {
        //console.log("Nooks");
        return false;

    }

}

function empty3chars(vinput){
    if (vinput.length <= 3 && vinput ==='' ) {
        console.log("less than 3: " + vinput.length);
        return true;
    }else {
        console.log("ok empty3chars");
        return false;

    }

}
