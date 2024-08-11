function validarDatos() {
    var nombre = document.getElementById("nombre");
    var dni = document.getElementById("dni");
    var grado = document.getElementById("grado");

    var nombreVal = nombre.value.trim();
    var dniVal = dni.value.trim();
    var gradoVal = grado.value.trim();

    var isValid = true;

    if (nombreVal === "") {
        nombre.classList.add("is-invalid");
        isValid = false;
    } else {
        nombre.classList.remove("is-invalid");
    }

    if (dniVal === "") {
        dni.classList.add("is-invalid");
        isValid = false;
    } else {
        dni.classList.remove("is-invalid");
    }

    if (gradoVal === "") {
        grado.classList.add("is-invalid");
        isValid = false;
    } else {
        grado.classList.remove("is-invalid");
    }

    // Validación de dígitos para el campo número
    if (dniVal !== "" && !/^\d+$/.test(dniVal)) {
        alert("No se permiten simbolos en el DNI");
        dni.classList.add("is-invalid");
        isValid = false;
    } else if (dniVal !== "") {
        dni.classList.remove("is-invalid");
    }

    return isValid;
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Función para llenar el formulario con el valor del parámetro
function populateForm() {
    const nombre = getQueryParam('nombre');
    const dni = getQueryParam('dni'); // Obtener el valor del parámetro 'data'
    const grado = getQueryParam('grado');
    if (nombre && dni && grado) {
        document.getElementById('nombre').value = nombre;
        document.getElementById('dni').value = dni;
        document.getElementById('grado').value = grado;
    }
}

// Inicializar la página al cargar
window.onload = populateForm;

