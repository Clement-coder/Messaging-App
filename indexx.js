window.onload = function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        window.location.href = "log-in.html";
    }

    // Retrieve current logged-in user from localStorage
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser && currentUser.username) {
        document.getElementById('username').innerHTML = currentUser.username;
    } else {
        document.getElementById('username').innerHTML = "Guest";
    }
       let users = JSON.parse(localStorage.getItem("users"));
    
    let friends = users.filter((user) => user.id != currentUser.id);
    
    console.log(friends)
};

// Logout function
document.getElementById("logout")?.addEventListener("click", () => {
    if (confirm("Are you sure you want to log out?")) {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser"); // Remove only the logged-in user data
        window.location.href = "log-in.html";
    }
});
