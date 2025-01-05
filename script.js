let body = document.body;

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
    profile.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}

document.querySelector('.side-bar .close-side-bar').onclick = () =>{
    sideBar.classList.remove('active');
    body.classList.remove('active');
}

window.onscroll = () =>{
    profile.classList.remove('active');
    searchForm.classList.remove('active');
    
    if(window.innerWidth < 1200){
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }
}

let toggleBtn = document.querySelector('#toggle-btn');
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
    toggleBtn.classList.replace('fa-sun', 'fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode', 'enabled')
}

const disableDarkMode = () =>{
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled')
}

if(darkMode === 'enabled'){
    enableDarkMode();
}

toggleBtn.onclick = (e) =>{
    let darkMode = localStorage.getItem('dark-mode');
    if(darkMode === 'disabled'){
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }
}

// chat.js
function sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value.trim();

    if (message) {
        const chatMessages = document.getElementById("chat-messages");

        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        messageElement.style.border = "1px solid #ccc";
        messageElement.style.padding = "10px";
        messageElement.style.borderRadius = "5px";
        messageElement.style.background = "#ccc";
        messageElement.style.alignSelf = "flex-end";

        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        input.value = "";
    }
}

// forum.js
const postsContainer = document.getElementById("posts");

function createPost() {
    const postContent = document.getElementById("postContent").value.trim();
    if (postContent === "") {
        alert("Post content cannot be empty!");
        return;
    }

    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.textContent = postContent;

    postsContainer.prepend(postElement);
    document.getElementById("postContent").value = "";
}


// video-call.js
let localStream;

async function startCall() {
    try {
        const localVideo = document.getElementById("localVideo");
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;

        // Placeholder for remote video handling (replace with actual signaling implementation)
        console.log("Call started. Waiting for remote stream...");
    } catch (error) {
        alert("Error accessing webcam or microphone: " + error.message);
    }
}

function endCall() {
    if (localStream) {
        const tracks = localStream.getTracks();
        tracks.forEach(track => track.stop());
        document.getElementById("localVideo").srcObject = null;
        document.getElementById("remoteVideo").srcObject = null;
    }
    alert("Call ended.");
}
