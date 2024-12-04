const form = document.querySelector(".contact-form form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById('form-nombre').value;
    const descripcion = document.getElementById('form-descripcion').value;
    const correo = document.getElementById('form-email').value;

    console.log("Nombre:", nombre);
    console.log("Descripción:", descripcion);
    console.log("Correo:", correo);

    alert("Hola " + nombre + ", su correo es " + correo + " y su motivo de contacto es: \n" + descripcion);
});