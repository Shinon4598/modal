let botones = document.querySelectorAll("#boton");
let pestaña = document.getElementById("pestaña")
botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        pestaña.classList.toggle("show");
    })
})