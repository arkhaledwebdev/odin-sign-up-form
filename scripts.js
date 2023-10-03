const fNameInput = document.getElementById("firstName");
const lNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const submitButton = document.getElementById("submit-button");

const errorInfo = document.querySelector(".error-info")

fNameInput.addEventListener('input',checkFirstNameInput);
lNameInput.addEventListener('input',checkLastNameInput);
emailInput.addEventListener('input',)

function checkFirstNameInput(e){

    let name = e.target.value;

    if(name.length >= 3 && name.length <= 50 ){
        fNameInput.classList.add("name-valid")
        fNameInput.classList.remove("name-error")
        explainErrorInfo(0);
        
    }
    else if(name.length === 0){
        fNameInput.classList.remove("name-valid")
        fNameInput.classList.remove("name-error")
        explainErrorInfo(0);
    }
    else{
        fNameInput.classList.remove("name-valid")
        fNameInput.classList.add("name-error")
        explainErrorInfo(1);
    }
}

function checkLastNameInput(e){

    let name = e.target.value;

    if(name.length >= 3 && name.length <= 50 ){
        lNameInput.classList.add("name-valid")
        lNameInput.classList.remove("name-error")
        explainErrorInfo(0);
    }
    else if(name.length === 0){
        lNameInput.classList.remove("name-valid")
        lNameInput.classList.remove("name-error")
        explainErrorInfo(0);
    }
    else{
        lNameInput.classList.remove("name-valid")
        lNameInput.classList.add("name-error")
        explainErrorInfo(1);
    }
}

function explainErrorInfo(num){

    if(num === 0){
        errorInfo.textContent = "";
    }
    if(num === 1){
        errorInfo.textContent = "Enter a name between 3 to 50 characters";
    }

}