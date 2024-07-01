const firstNameElement = document.querySelector("#firstName");
const lastNameElement = document.querySelector("#lastName");
const emailElement = document.querySelector("#email");
const messageElement = document.querySelector("#message");
const logoutBtn = document.querySelector("#logout");

const user = JSON.parse(localStorage.getItem("listUser"));

if (user) {
    const userData = user[0];
    firstNameElement.textContent = `${userData.firstName}`;
    lastNameElement.textContent = `${userData.lastName}`;
    emailElement.textContent = `Email: ${userData.email}`;
    messageElement.textContent = `Message: ${userData.message}`;
}

logoutBtn.addEventListener("click", function() {
    localStorage.removeItem("listUser");
    window.location.href = "/index.html"; 
});

