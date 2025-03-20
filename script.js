document.getElementById("showLogin").addEventListener("click", () => {
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
});

document.getElementById("showSignup").addEventListener("click", () => {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
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

    nameError.textContent = "";
    passwordError.textContent = "";
    emailError.textContent = "";

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

    users.push({ username: name, password, email });
    saveUsers(users);

    alert("Signup successful! You can now log in.");
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
});

// Log in function
document.getElementById("loginBtn").addEventListener("click", () => {
    let name = document.getElementById("loginName").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
    let email = document.getElementById("loginEmail").value.trim();
    let nameError = document.getElementById("loginNameError");
    let passwordError = document.getElementById("loginPasswordError");
    let emailError = document.getElementById("loginEmailError");

    nameError.textContent = "";
    passwordError.textContent = "";
    emailError.textContent = "";

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
    let user = users.find(user => user.username === name && user.password === password && user.email === email);

    if (user) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(user)); // Store current user
        alert(`Welcome back my gee ${name}!`);
        window.location.href = "index.html";
    } else {
        emailError.textContent = "Invalid username or credentials";
    }
});
