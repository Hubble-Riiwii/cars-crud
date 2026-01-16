const logoutBtn = document.createElement("button"); logoutBtn.setAttribute("type", "button");
logoutBtn.classList.add("btn","btn-success"); logoutBtn.textContent = "Log out";
logoutBtn.addEventListener("click", e=>{
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("username");
    location.reload();
})
if(sessionStorage.username !== undefined){
    document.getElementById("profile-image").setAttribute("src", "./assets/users/Profil & Notification.png");
    const childrenLogin = document.querySelector(".login-section").children;
    childrenLogin[1].remove() //remove sign in from domain
    childrenLogin[1].remove() // remove log in from domain
    childrenLogin[0].parentElement.appendChild(logoutBtn);
}
