const logoutBtn = document.createElement("button"); logoutBtn.setAttribute("type", "button");
logoutBtn.classList.add("btn","btn-success","col-sm-5"); logoutBtn.textContent = "Log out";
logoutBtn.addEventListener("click", ()=>{
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("admin");
    location.reload();
})
if(sessionStorage.getItem("username") !== null){
    document.getElementById("profile-image").setAttribute("src", "./assets/users/Profil & Notification.png");
    const childrenLogin = document.querySelector(".login-section").children;
    childrenLogin[1].remove() //remove sign in from domain
    childrenLogin[1].remove() // remove log in from domain
    childrenLogin[0].parentElement.appendChild(logoutBtn);
    if(sessionStorage.getItem("admin")!== null){ //Needs to be changed, as everyone can change the sesion storage and then modify the webpage without permissions
        const goToDashboard = document.createElement("a"); goToDashboard.setAttribute("type", "button"); 
        goToDashboard.classList.add("btn", "btn-info", "col-sm-5"); goToDashboard.textContent = "Dashboard";
        goToDashboard.setAttribute("href", "./admin/dashboard.html");
        childrenLogin[0].parentElement.appendChild(goToDashboard);
    }
}
