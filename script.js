// Toggle between login and signup forms
document.getElementById("showLogin").addEventListener("click", () => {
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("titleChange").textContent = "Message App || Log In";

});

document.getElementById("showSignup").addEventListener("click", () => {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
    document.getElementById("titleChange").textContent = "Message App || Sign Up";

});

// Retrieve stored users from localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// Save updated users to localStorage
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// Sign up function
document.getElementById("signupBtn").addEventListener("click", () => {
    let name = document.getElementById("signupName").value.trim();
    let password = document.getElementById("signupPassword").value.trim();
    let email = document.getElementById("signupEmail").value.trim();
    let nameError = document.getElementById("signupNameError");
    let passwordError = document.getElementById("signupPasswordError");
    let emailError = document.getElementById("signupEmailError");

    // Clear previous error messages
    nameError.textContent = "";
    passwordError.textContent = "";
    emailError.textContent = "";

    // Input validation
    if (!name) {
        nameError.textContent = "Enter your name";
        return;
    }
    if (!password) {
        passwordError.textContent = "Enter your password";
        return;
    }
    if (password.length < 5) {
        passwordError.textContent = "Password must be at least 5 characters";
        return;
    }
    if (!email) {
        emailError.textContent = "Enter a valid email address";
        return;
    }

    let users = getUsers();
    let usernameExists = users.some(user => user.username === name);

    if (usernameExists) {
        nameError.textContent = "Username already exists! Choose another one.";
        return;
    }

    // Save the new user to localStorage
    users.push({ username: name, password, email });
    saveUsers(users);

    alert("Signup successful! You can now log in.");
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
});

document.getElementById("loginBtn").addEventListener("click", () => {
    let password = document.getElementById("loginPassword").value.trim();
    let email = document.getElementById("loginEmail").value.trim();
    let passwordError = document.getElementById("loginPasswordError");
    let emailError = document.getElementById("loginEmailError");

    // Clear previous error messages
    passwordError.textContent = "";
    emailError.textContent = "";

    // Input validation
    if (!email) {
        emailError.textContent = "Enter a valid email address";
        return;
    }
    if (!password) {
        passwordError.textContent = "Enter your password";
        return;
    }
    if (password.length < 5) {
        passwordError.textContent = "Password must be at least 5 characters";
        return;
    }

    // Retrieve the list of users from localStorage
    let users = getUsers();
    let user = users.find(user => user.email === email && user.password === password);

    // Check if user exists
    if (user) {
        // Store the user as the current logged-in user
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(user)); // Store current user
        alert(`Welcome back, ${user.username}!`);
        window.location.href = "index.html"; // Redirect to the homepage after login
    } else {
        // Invalid credentials error
        emailError.textContent = "Invalid email or credentials";
    }
});
