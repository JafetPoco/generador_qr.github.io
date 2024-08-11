function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Función para actualizar la imagen del QR
function updateQRCode() {
    const qrValue = getQueryParam('dni'); // 'value' es el nombre del parámetro en la URL
    const nombre = getQueryParam('nombre');
    const grado = getQueryParam('grado');
    if (qrValue) {
        const apiUrl = `https://quickchart.io/qr?text=${encodeURIComponent(qrValue)}&margin=0&size=80`;
        const qrImage = document.getElementById('qr');
        qrImage.src = apiUrl;
        qrImage.alt = `Código QR para ${qrValue}`;
    } else {
        console.log('Parámetro "value" no encontrado en la URL');
    }

    document.getElementById('nombre').textContent = nombre;
    document.getElementById('grado').textContent = grado; 
    document.getElementById('dni').textContent = `DNI: ${qrValue}`; 
}

function redirectToForm() {
    const nombre = getQueryParam('nombre');
    const dni = getQueryParam('dni'); // Obtener el valor del parámetro 'data'
    const grado = getQueryParam('grado');
    if (nombre && dni && grado) {
        // Construir la URL de destino con el parámetro
        const newUrl = `generador.html?nombre=${encodeURIComponent(nombre)}&dni=${encodeURIComponent(dni)}&grado=${encodeURIComponent(grado)}`;
        window.location.href = newUrl;
    }
}

// Ejecutar la función al cargar la página
window.onload = updateQRCode;