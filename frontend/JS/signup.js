import API from "./../../backend/api/api.js";
const api = new API();
const form = document.getElementById("signupForm");
const usernameInput = document.getElementById("signupName");
const emailInput = document.getElementById("signupEmail");
const passwordInput = document.getElementById("signupPassword");
const passwordVerificationInput = document.getElementById("signupConfirmPassword");
/* Function Login */
const signup = async (username, email,  password)=>{
    const user = await api.createUser(username, password, email);
    return user
}
/* Function PasswordVerification */
const verificatePassword = (password, passwordVerification) =>{
    if (password !== passwordVerification){
        passwordVerificationInput.value = "";
        passwordVerificationInput.nextElementSibling.classList.remove("hidden")
        return false
    }
    return true
}

form.addEventListener("submit", async e=>{
    if(!verificatePassword(passwordInput.value, passwordVerificationInput.value)){
        e.preventDefault()
        return
    }
    const user = await signup(usernameInput.value, emailInput.value, passwordInput.value);
    sessionStorage.username = await user.username;
    sessionStorage.userId = await user.id
    window.location = "./../index.html"
})
