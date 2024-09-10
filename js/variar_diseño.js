document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const design = urlParams.get('design');  // Captura el valor del parámetro 'diseño'
  
    const contentDiv = document.getElementById('logo');  // Selecciona el div con id "contenido"
  
    if (design === 'EF') {
      contentDiv.innerHTML = `
        <img class="logo" src="img/logo_ok.png" alt="logotipo">
        <h1>Bienvenido al Diseño A</h1>
        <p>Este es el contenido especial para el diseño A.</p>
        <img src="imagenA.jpg" alt="Imagen Diseño A">
      `;
    } else if (design === 'MNT') {
      contentDiv.innerHTML = `
        <img class="logo_mnt" src="img/logo_ok.png" alt="logotipo">
        <p class="nom_colegio">MARANATHA</p>
        <img class="kids" src="img/img_mrt.jpg" alt="kids">
      `;
    } else {
      contentDiv.innerHTML = `
        <h1>Diseño por defecto</h1>
        <p>No se ha seleccionado un diseño válido, este es el contenido por defecto.</p>
      `;
    }
  });
  

