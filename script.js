document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('miBoton');
    const parrafo = document.getElementById('miParrafo');
  
    boton.addEventListener('click', function() {
      // Cambiar el color de fondo o la fuente de manera alternada
      if (parrafo.style.backgroundColor === 'yellow') {
        parrafo.style.backgroundColor = '';
        parrafo.style.fontFamily = 'Arial, sans-serif';
        
      } else {
        parrafo.style.backgroundColor = 'yellow';
        parrafo.style.fontFamily = 'Courier New, monospace';
      }
    });
  });
  