document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const design = urlParams.get('design');  // Captura el valor del parámetro 'diseño'
  
    const contentDiv = document.getElementById('logo');  // Selecciona el div con id "contenido"
  
    if (design === 'EF') {
      contentDiv.innerHTML = `
        <img class="logo" src="img/logo_ok.png" alt="logotipo">
        <p class="nom_ef">EL FARO</p>
      `;
    } else if (design === 'MNT') {
      contentDiv.innerHTML = `
        <img class="logo_mnt" src="img/logo_ok.png" alt="logotipo">
        <p class="nom_colegio">MARANATHA</p>
        <img class="kids" src="img/img_mrt.jpg" alt="kids">
      `;
    } else {
      contentDiv.innerHTML = `
        <img class="logo" src="img/logo_ok.png" alt="logotipo">
      `;
    }
  });
  

