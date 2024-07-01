const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const message = document.querySelector("#message");

const labelFirstName = document.querySelector("#firstLabel");
const labelLastName = document.querySelector("#lastLabel");
const emailLabel = document.querySelector("#emailLabel");
const labelMessage = document.querySelector("#messageLabel");
const register = document.querySelector("#register");

const form = document.querySelector("#form");
const btnSubmit = document.querySelector("#btn-submit");

document.addEventListener("DOMContentLoaded", function() {   
    const takeEmailHomepage = localStorage.getItem("emailHomepage");

    if (takeEmailHomepage) {
        emailInput.value = takeEmailHomepage;
    }

    function checkFields() {
        if (isFirstNameValid(firstName.value) && isLastNameValid(lastName.value) && isEmailValid(emailInput.value) && isMessageValid(message.value)) {
            btnSubmit.classList.add("enabled");
            btnSubmit.disabled = false;
        } else {
            btnSubmit.classList.remove("enabled");
            btnSubmit.disabled = true;
        }
    }

    function isFirstNameValid(value) {
        const firstNameRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
        if(!firstNameRegex.test(value)){
            labelFirstName.setAttribute("style", "color: red");
            labelFirstName.innerHTML = `First Name *Cannot enter special characters`
            firstName.setAttribute("style", "border-color: red");
            return false;
        }
        if (value.length < 3) {
            labelFirstName.setAttribute("style", "color: red");
            labelFirstName.innerHTML = `First Name *Enter at least 3 characters`
            firstName.setAttribute("style", "border-color: red");
            return false;
        } 
        else {
            labelFirstName.setAttribute("style", "color: green");
            labelFirstName.innerHTML = `First Name`;
            firstName.setAttribute("style", "border-color: green");
            return true;
        }
    }  

    function isLastNameValid(value) {
        const lastNameRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
        if(!lastNameRegex.test(value)){
            labelLastName.setAttribute("style", "color: red");
            labelLastName.innerHTML = `Last Name *Cannot enter special characters`
            lastName.setAttribute("style", "border-color: red");
            return false;
        }
        if (value.length < 3) {
            labelLastName.setAttribute("style", "color: red");
            labelLastName.innerHTML = `Last Name *Enter at least 3 characters`
            lastName.setAttribute("style", "border-color: red");
            return false;
        } 
        else {
            labelLastName.setAttribute("style", "color: green");
            labelLastName.innerHTML = `Last Name`;
            lastName.setAttribute("style", "border-color: green");
            return true;
        }
    }   

    function isEmailValid(value) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,}$/;
        if(!emailRegex.test(value)) {
            emailLabel.setAttribute("style", "color: red");
            emailLabel.innerHTML = `Email *Enter valid email`;
            emailInput.setAttribute("style", "border-color: red");
            return false;
        }
        if (value.length < 5) {
            emailLabel.setAttribute("style", "color: red");
            emailLabel.innerHTML = `Email *Enter at least 5 characters`;
            emailInput.setAttribute("style", "border-color: red");
            return false;
        }
        else {
            emailLabel.setAttribute("style", "color: green");
            emailLabel.innerHTML = `Email`;
            emailInput.setAttribute("style", "border-color: green");
            return true;
        }
    }

    function isMessageValid(value) {
        if (value.length < 10) {
            labelMessage.setAttribute("style", "color: red");
            labelMessage.innerHTML = `Message *Enter at least 10 characters`;
            message.setAttribute("style", "border-color: red");
            return false;
        }
        else {
            labelMessage.setAttribute("style", "color: green");
            labelMessage.innerHTML = `Message`;
            message.setAttribute("style", "border-color: green");
            return true;
        }
    }

    firstName.addEventListener("keyup", checkFields);
    lastName.addEventListener("keyup", checkFields);
    emailInput.addEventListener("keyup", checkFields);
    message.addEventListener("keyup", checkFields);
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const listUser = JSON.parse(localStorage.getItem("listUser") || "[]");

        listUser.push({
            firstName: firstName.value,
            lastName: lastName.value,
            email: emailInput.value,
            message: message.value
        });

        localStorage.setItem("listUser", JSON.stringify(listUser));

        alert("Formulario enviado")

        setTimeout(() => {
            firstName.value = "";
            lastName.value = "";
            email.value = "";
            message.value = "";
        }, 2000);

        setTimeout(() => {
            window.location.href = "sucess"; // fazer
        }, 3000);
    }); 
});