const emailHomepage = document.querySelector("#emailHomepage");
const redirect = document.querySelector("#redirect");
const changePlaceholder = document.getElementsByName("name");

function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
}

function updateRedirectButton() {
    const email = emailHomepage.value;

    if (isEmailValid(email)) {
        emailHomepage.style.borderColor = "green";
        redirect.classList.add("enabled");
        redirect.disabled = false;
    } else {
        emailHomepage.style.borderColor = "red";
        redirect.classList.remove("enabled");
        redirect.disabled = true;
    }
}

emailHomepage.addEventListener("input", updateRedirectButton);

redirect.addEventListener("click", (e) => {
    e.preventDefault();

    const email = emailHomepage.value;

    if (isEmailValid(email)) {
        localStorage.setItem("emailHomepage", email);
        window.location.href = "./pages/contact-us/index.html";
    } 
});

updateRedirectButton();
