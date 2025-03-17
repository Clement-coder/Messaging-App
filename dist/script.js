document.getElementById("showLogin").addEventListener("click",  ()=> {
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
});

document.getElementById("showSignup").addEventListener("click",  () =>{
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
});

// sign up 
document.getElementById("signupBtn").addEventListener("click",  () =>{
    let name = document.getElementById("signupName").value.trim();
    let password = document.getElementById("signupPassword").value.trim();
    let nameError = document.getElementById("signupNameError");
    let passwordError = document.getElementById("signupPasswordError");

    nameError.textContent = "";
    passwordError.textContent = "";

    if (!name) {
        nameError.textContent = "Enter your name";
        return;
    }
    if (!password) {
        passwordError.textContent = "Enter your password";
        return;
    }

    localStorage.setItem("username", name);
    localStorage.setItem("password", password);

    alert("Signup successful! You can now log in.");
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
});

// log in 
document.getElementById("loginBtn").addEventListener("click", function () {
    let name = document.getElementById("loginName").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
    let nameError = document.getElementById("loginNameError");
    let passwordError = document.getElementById("loginPasswordError");

    nameError.textContent = "";
    passwordError.textContent = "";

    if (!name) {
        nameError.textContent = "Enter your name";
        return;
    }
    if (!password) {
        passwordError.textContent = "Enter your password";
        return;
    }

    let storedName = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (name === storedName && password === storedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        alert 
        window.location.href = "index.html";
    } else {
        passwordError.textContent = "Invalid username or password";
    }
});
