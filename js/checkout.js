// Get the input fields
var $name     = document.querySelector('.name');
var $lastName = document.querySelector('.lastName');
var $email    = document.querySelector('.email');
var $password = document.querySelector(".password");
var $phone    = document.querySelector('.phone');
var $adress    = document.querySelector('.adress');

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
var $gAdress = document.getElementById('group-adress');

// Get the error elements
var $errorName = document.getElementById('errorName');
var $errorLastName = document.getElementById('errorLastName');
var $errorEmail = document.getElementById('errorEmail');
var $errorPassword = document.getElementById("errorPassword");
var $errorPhone = document.getElementById('errorPhone');
var $errorAdress = document.getElementById('errorAdress');

// Exercise 8
function validate() {

    //$submit.disabled = true;
    // Validate fields entered by the user: name, phone, password, and email
    console.log("validating...");


    validateName($name);
    validateLastName($lastName);
    validateMail($email);
    validatePass($password);
    validatePhone($phone);
    validateAdress($adress);


if((validateName($name)) && (validateLastName($lastName)) &&
(validateMail($email)) && (validatePass($password)) &&
(validatePhone($phone)) && (validateAdress($adress))){
console.log("end validating all OKS");
 alert("All fields validated and OKS");
 document.getElementById("checkOutForm").reset();

}


}

function validateName(e){
    let val= e.value;
    //console.log(val);
    if (noempty3chars(val)==false){
       $gName.classList.add('showError');
    }else if (onlyLettersSpaces(val)==false) {
        $gName.classList.add('showError');
    }else {
        $gName.classList.remove('showError');
        return true;
    }
}

function validateLastName(e){
    let val= e.value;
    if (noempty3chars(val)==false){
        $gLastName.classList.add('showError');
     }else if (onlyLettersSpaces(val)==false) {
         $gLastName.classList.add('showError');
     }else {
         $gLastName.classList.remove('showError');
         return true;
     }
}


function validateMail(e){
    let val= e.value;
    // correct mail format
    let Regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    //console.log("mail: "+val);
    if (Regex.test(val)) {
        $gEmail.classList.remove('showError');
        return true;
    } else {
        console.log("invalid mail");
        $gEmail.classList.add('showError');

    }
}
function validatePass(e){
    let val= e.value;
    if (noempty3chars(val)==false) {
        $gPassword.classList.add('showError');
    } else if (alphanumeric(val)==false){
        $gPassword.classList.add('showError');
    } else {
        $gPassword.classList.remove('showError');
        return true;
    }
}
function validatePhone(e){
    let val= e.value;
    if (noempty3chars(val)==false) {
        $gPhone.classList.add('showError');
    } else if (onlynumeric(val)==false){
        $gPhone.classList.add('showError');
    } else {
        $gPhone.classList.remove('showError');
        return true;
    }

}
function validateAdress(e){
    let val= e.value;
    if (noempty3chars(val)==false) {
        $gAdress.classList.add('showError');
    } else {
        $gAdress.classList.remove('showError');
        return true;
    }

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

// HELPER FUNCTIONS

function noempty3chars(vinput){
    if (vinput.length >= 3 && vinput !=='' ) {
        console.log("more than 3: " + vinput.length);
        return true;
    }else {
        console.log("less than 3");
        return false;

    }

}
function alphanumeric(vinput) {
let Regex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,10}$/;
 if ( Regex.test(vinput) ) {
   return true;
  } else {
    console.log(vinput +" NOT alphanumeric");
   return false;
  }
}
function onlynumeric(vinput) {
let Regex = /^(?=.*\d).{9,10}$/;
 if ( Regex.test(vinput) ) {
   return true;
  } else {
    console.log(vinput +" NOT numeric");
   return false;
  }
}
