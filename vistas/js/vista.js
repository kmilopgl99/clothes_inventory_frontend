class Vista {
  constructor() {}

  mostrarModal(titulo, msj) {
    document.getElementById("modal-titulo").innerHTML = titulo;
    document.getElementById("modal-cuerpo").innerHTML = msj;
    $("#modal-1").modal(); // muestra la ventana modal
  }

  mostrarPlantilla(form, destino) {
    //limpia el contenido
    let dest = document.getElementById(destino);
    dest.innerHTML = "";
    let template = document.getElementById(form);
    if (template) {
      let clon = template.content.cloneNode(true);
      dest.appendChild(clon); //inserta
    }
  }

  limpiarArea(idArea) {
    document.getElementById(idArea).innerHTML = "";
  }
}
