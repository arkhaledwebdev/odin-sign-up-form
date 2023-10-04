const fNameInput = document.getElementById("firstName");
const lNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const submitButton = document.getElementById("submit-button");

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/


const errorInfo = document.querySelector(".error-info")

let password = '';
let confirmPassword = '';
fNameInput.addEventListener('input',checkNameInput);
lNameInput.addEventListener('input',checkNameInput);

passwordInput.addEventListener('input', checkPassword);
confirmPasswordInput.addEventListener('input', checkPassword);

function checkNameInput(e){
    let name = e.target.value;

    let nameInput;

    if(e.target.name === 'fname'){
        nameInput = fNameInput;
    }

    if(e.target.name === 'lname'){
        nameInput = lNameInput;
    }

    if(name.length >= 3 && name.length <= 50 ){
        nameInput.classList.add("name-valid")
        nameInput.classList.remove("name-error")
        explainErrorInfo(0);
        
    }
    else if(name.length === 0){
        nameInput.classList.remove("name-valid")
        nameInput.classList.remove("name-error")
        explainErrorInfo(0);
    }
    else{
        nameInput.classList.remove("name-valid")
        nameInput.classList.add("name-error")
        explainErrorInfo(1);
    }
}

function checkPassword(e){

    if(e.target.name === "password"){
        password = e.target.value;
    }

    if(e.target.name === "confirmPass"){
        confirmPassword = e.target.value;
    }

    if(checkPasswordRegEx(password)){
        if(password === confirmPassword){
            passwordInput.classList.add("name-valid");
            confirmPasswordInput.classList.add("name-valid");
            passwordInput.classList.remove("name-error");
            confirmPasswordInput.classList.remove("name-error");
            explainErrorInfo(0);
        }
        else{
            passwordInput.classList.remove("name-valid");
            confirmPasswordInput.classList.remove("name-valid");
            passwordInput.classList.add("name-error");
            confirmPasswordInput.classList.add("name-error");
            explainErrorInfo(3);
        }
    }
    else{
        explainErrorInfo(2);
    }
}

function explainErrorInfo(num){

    if(num === 0){
        errorInfo.textContent = "";
    }
    if(num === 1){
        errorInfo.textContent = "Enter a name between 3 to 50 characters";
    }
    if(num === 2){
        errorInfo.textContent = "at least 8 characters (letter, number & special character)";
    }
    if(num === 3){
        errorInfo.textContent = "Passwords don't match";
    }
}


function checkPasswordRegEx(pass){
    return PASSWORD_REGEX.test(pass);
}