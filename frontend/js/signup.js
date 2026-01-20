import User from "./../../backend/models/User.js";
const form = document.getElementById("signupForm");
const usernameInput = document.getElementById("signupName");
const emailInput = document.getElementById("signupEmail");
const passwordInput = document.getElementById("signupPassword");
const passwordVerificationInput = document.getElementById("signupConfirmPassword");
/* Function Login */
const signup = async (username, email,  password)=>{
    const user = await User.signUp(username, password, email);
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
    console.log(user);
    if (user !== null){
        sessionStorage.setItem("user", JSON.stringify(user));
        window.location = "./index.html"
    } else{
        console.error("Error, the user is null") // Change for a pop up
        e.preventDefault();
    }
})
