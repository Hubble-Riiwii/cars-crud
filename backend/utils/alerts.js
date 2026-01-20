export default function Alert({ title = "Alert Title", text = "alert text" } = {title:"Alert Title",text :"alert text"}) {
    return new Promise((resolve) => {
        const alert = document.createElement("div");
        alert.classList.add("alerta");

        alert.innerHTML = `
            <h2 class="alert-title">${title}</h2>
            <p class="alert-p">${text}</p>
            <div class="button-container d-flex justify-content-around">
                <button type="button" class="btn btn-danger">Cancel</button>
                <button type="button" class="btn btn-success">OK!</button>
            </div>
        `;
        const close = (result) => {
            alert.remove();
            resolve(result);
        };
        alert.querySelector(".btn-danger").addEventListener("click", () => close(false));
        alert.querySelector(".btn-success").addEventListener("click", () => close(true));

        document.body.appendChild(alert);
    });
}