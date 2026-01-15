import API from "./../../backend/api/api.js";
const api = new API();
const form = document.getElementById("loginForm")
const passwordInput = document.getElementById("loginPassword");
const userEmailInput = document.getElementById("loginEmail");

const login = async (username, password)=>{
    const user = await api.getUser(username, password);
    return user;
}
form.addEventListener("submit",async e=>{
    e.preventDefault();
    const user = await login(userEmailInput.value, passwordInput.value);
    if (user == null){
        passwordInput.nextElementSibling.classList.remove("hidden");
    } else{
        sessionStorage.username = user.username;
        sessionStorage.id = user.id
        window.location = "./index.html";
    }
})