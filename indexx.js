// get current logged-in user
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let users = JSON.parse(localStorage.getItem("users")) || [];

window.onload = function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        window.location.href = "log-in.html";
    }

    if (currentUser && currentUser.username) {
        document.getElementById('username').innerHTML = currentUser.username;
    } else {
        document.getElementById('username').innerHTML = "Guest";
    }

    // chek current user
    let otherUsers = users.filter(user => user.username !== currentUser.username);

    // creat friend list
    let friendsListHTML = "";
    otherUsers.forEach(user => {
        friendsListHTML += `
            <div class="friend-item flex gap-4 items-center cursor-pointer p-4 border-t border-zinc-700 hover:bg-zinc-800 transition-all ease-in-out duration-300" data-username="${user.username}">
    <img class="w-14 rounded-full" src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-1/478399979_555014514232885_365921934383569857_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeFo8Jkl6mQXsMslUoo5XdFvjowPdo3yBYqOjA92jfIFikgYXv-Oh_F-GPMX9O0FO3uZMUd65DxPvnBN52wNMPx0&_nc_ohc=jqMM17Jl_B4Q7kNvgFr2PBv&_nc_oc=AdiFFMXljC1pAWgdZxInEjYz2jl-aaOItdwHCjlu0l4APhxeyVOncNqQ-CEQG7YbgHJQQKUsBecMoTVUvGWLab3R&_nc_zt=24&_nc_ht=scontent-los2-1.xx&_nc_gid=Azvvm_ILA-JE3boTYh7kKJM&oh=00_AYH3dtSObx7XjZqLynCsSlQLmlVcQYGclInPrdT4r39Hfw&oe=67D6E09B" alt="">
                <div>
                    <p class="font-medium lg:text-md sm:text-sm md:text-md text-gray-300">${user.username}</p>
                    <p class="text-gray-500 font-light text-sm justify-end animate-pulse">typing....</p>
                </div>
                <div class="text-right relative left-6 text-green-900 font-semibold text-sm">
                    <p>5:46 AM</p>
                    <button class="px-2 text-zinc-900 rounded-full bg-green-900">1</button>
                </div>
            </div>
        `;
    });

    // Append to the container
    let messageContainer = document.getElementById("messageContainer");
    if (messageContainer) {
        messageContainer.innerHTML = friendsListHTML;
    }

    // Add event listeners to each friend item
    document.querySelectorAll(".friend-item").forEach(item => {
        item.addEventListener("click", function () {
            let selectedUsername = this.getAttribute("data-username");
            document.getElementById("friendName").textContent = selectedUsername;
            document.getElementById("friendChatContainer").style.display = "block";
        });
    });
};


document.addEventListener("DOMContentLoaded", function () {
    let messageField = document.getElementById("messageField");
    let sendMessage = document.getElementById("sendMessage");
    let chatBody = document.getElementById("chatBody");

    // to send message
    function sendMessageHandler() {
        let messageText = messageField.value.trim();
        
        if (messageText === "") return;

        let messageElement = document.createElement("div");
        messageElement.classList.add("flex", "justify-end");

        messageElement.innerHTML = `
            <div class="bg-green-900 text-white px-4 py-2 rounded-lg max-w-xs">
                ${messageText}
            </div>
        `;

        // append message to chatbody
        chatBody.appendChild(messageElement);
        
        // show more message 
        chatBody.scrollTop = chatBody.scrollHeight;

        // Clear input field 
        messageField.value = "";
    }

        // drect sendins of message with enter key

    
    sendMessage.addEventListener("click", function (e) {
        e.preventDefault();
        sendMessageHandler();
    });


    messageField.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessageHandler();
        }
    });
});

document.getElementById("unread").addEventListener('click', () => {
    
})




// Logout function
document.getElementById("logout")?.addEventListener("click", () => {
    if (confirm("Are you sure you want to log out?")) {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        window.location.href = "log-in.html";
    }
});

// 09035249481
