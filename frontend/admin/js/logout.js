document.getElementById("logout-btn").addEventListener("click", e=>{
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("admin");
    location.reload();
})