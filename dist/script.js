document.getElementById("login").addEventListener("click", function (e) {
    e.preventDefault();

    let usernameInput = document.getElementById("nameField").value.trim();
    let passwordInput = document.getElementById("passwordField").value.trim();
    let nameError = document.getElementById("nameError");
    let passwordError = document.getElementById("passwordError");

    // Reset error messages
    nameError.textContent = "";
    passwordError.textContent = "";

    if (!usernameInput) {
        nameError.style.color ="red"
        nameError.textContent = "Enter your name";
        return;
    }

    if (!passwordInput) {
        passwordError.style.color ="red"
        passwordError.textContent = "Enter your password";
        return;
    }

    // Hardcoded valid credentials
    let validUser = "Clement";
    let validPass = "123456";

    if (usernameInput === validUser && passwordInput === validPass) {
        localStorage.setItem("username", usernameInput);
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html"; // Redirect to dashboard
    } else {
        passwordError.textContent = "Invalid username or password";
    }
});