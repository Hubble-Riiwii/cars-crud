import User from "../../backend/models/User.js";
const form = document.getElementById("loginForm")
const passwordInput = document.getElementById("loginPassword");
const userEmailInput = document.getElementById("loginEmail");

const login = async (username, password)=>{
    const user = await User.logIn(username, password);
    return user;
}
form.addEventListener("submit",async e=>{
    e.preventDefault();
    const user = await login(userEmailInput.value, passwordInput.value);
    if (user == null){
        passwordInput.nextElementSibling.classList.remove("hidden");
    } else{
        sessionStorage.setItem("user", JSON.stringify(user));
        window.location = "./index.html";
    }
})