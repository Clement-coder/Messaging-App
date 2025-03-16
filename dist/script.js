document.getElementById("login").addEventListener("click", function (e) {
    e.preventDefault();

    let usernameInput = document.getElementById("nameField").value.trim();
    let passwordInput = document.getElementById("passwordField").value.trim();
    let nameError = document.getElementById("nameError");
    let passwordError = document.getElementById("passwordError");

    // Reset error messages
    [nameError, passwordError].forEach(err => {
        err.textContent = "";
        err.style.color = "red";
    });

    if (!usernameInput) {
        nameError.textContent = "Enter your name";
        return;
    }

    if (!passwordInput) {
        passwordError.textContent = "Enter your password";
        return;
    }

    // Hardcoded valid credentials (for practice only)
    const validCredentials = {
        username: "Clement",
        password: "123456"
    };

    if (usernameInput === validCredentials.username && passwordInput === validCredentials.password) {
        localStorage.setItem("username", usernameInput);
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html"; // Redirect to dashboard
    } else {
        let errorBox = document.getElementById("errorMessage") || passwordError;
        errorBox.textContent = "Invalid username or password";
    }
});
