class Vista {
  constructor() { }

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

  /**
   * Despliega una plantilla dentro de un contenedor
   * @param {str} plantilla: id de la etiqueta <template> a desplegar 
   * @param {str} destino: id del contenedor donde se desplegará la plantilla 
   */
  /**
   * Lee el contenido de los inputs dentro de una etiqueta <form>
   * valida que existan datos en todos los campos
   * Los devuelve como un objeto al que incluye una bandera que indica si los datos son válidos
   * y un mensaje de error si no se ingresaron datos
   * @param {str} formulario: id del formulario a leer 
   * @returns {obj} data: objeto con los datos del formulario
   */
  getForm(formulario) {
    let form = document.getElementById(formulario);
    let datos = new FormData(form);
    let data = {};
    data.ok = true; //Bandera para indicar si los datos son válidos
    data.msj = "";  //Mensaje de error si no se ingresaron datos

    datos.forEach((value, key) => {
      data[key] = value;
      if (value == "" || (form[key].tagName === 'SELECT' && value == "0")) {
        data.ok = false;
        data.msj = "No hay datos en " + key;
        this.mostrarMensaje(false, data.msj);
      }
    });

    return data;
  }

  /**
   * Despliega un mensaje de error por tres segundos
   * @param {bool} ok: bandera que indica si el mensaje es de error o de éxito
   * @param {str} mensaje: texto del mensaje a desplegar
   */
  mostrarMensaje(ok, mensaje) {
    // Crear el elemento del mensaje
    let mensajeDiv = document.createElement('div');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.id = 'mensaje-error'; // Para poder eliminarlo después
    mensajeDiv.style.position = 'absolute';
    mensajeDiv.style.width = '80%';
    mensajeDiv.style.right = '10%';
    mensajeDiv.style.bottom = '20%';
    if (ok) {
      mensajeDiv.style.backgroundColor = 'green';
    }
    else {
      mensajeDiv.style.backgroundColor = 'red';
    }
    mensajeDiv.style.color = 'white';
    mensajeDiv.style.textAlign = 'center';
    mensajeDiv.style.padding = '10px';
    mensajeDiv.style.borderRadius = '10px';

    // Mostrar el mensaje
    document.getElementById('contenido').appendChild(mensajeDiv);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
      mensajeDiv.remove();
    }, 3000);
  }

  /**
   * A partir de un objeto data, 
   * cargar los valores en los inputs de un formulario segun cada atributo name
   * @param {str} formulario: id del formulario a cargar
   * @param {obj} data: objeto con los datos a cargar en el formulario
   */
  setForm(formulario, data) {
    let form = document.getElementById(formulario);
    for (let key in data) {
      form[key].value = data[key];
    }
  }

  /**
   * Crea una tabla con los datos de la lista data
   * le agrega un encabezado con el titulo
   * agraga clases de bootstrap para darle formato
   * y la despliega en el contenedor destino
   * @param {str} titulo : Titulo del encabezado de la tabla
   * @param {list} data : Lista de objetos con los datos a desplegar en la tabla
   * @param {str} destino : id del contenedor donde se desplegará la tabla
   */
  mostrarTabla(titulo, data, destino) {
    //Crea el titulo
    let h2 = document.createElement('h2');
    h2.textContent = titulo;
    //Crea la tabla
    let tabla = document.createElement('table');
    let tbody = document.createElement('tbody'); // Crea el elemento tbody
    tabla.appendChild(tbody); // Agrega el tbody a la tabla
    tbody.innerHTML = '';

    data.forEach(element => {
      let tr = document.createElement('tr');
      for (let key in element) {
        let td = document.createElement('td');
        td.textContent = element[key];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    });
    //agrega clases de bootstrap
    tabla.classList.add('table', 'table-striped');
    //Despliega la tabla en el contenedor destino
    let dest = document.getElementById(destino);
    dest.innerHTML = '';
    dest.appendChild(tabla);
  }

  /**
   * Crea una lista de tarjetas con los datos de la lista data
   * le agrega un encabezado con el titulo
   * agraga clases de bootstrap para darle formato
   * y la despliega en el contenedor destino
   * @param {str} titulo : Titulo del encabezado de la lista
   * @param {list} data : Lista de objetos con los datos a desplegar en la lista
   * 	con la siguiente estructura:
   * {
      "title": 'x',
      "subTitle": 'x',
      "paragraph" : 'x',
      "function" : 'x' (función a ejecutar al hacer click en el botón 'ver más')
      }

  * @param {str} destino : id del contenedor donde se desplegará la lista
  */
  mostrarTarjetas(titulo, data, destino) {
    //Agregar al destino display: flex; flex-direction: row; 
    let dest = document.getElementById(destino);
    dest.innerHTML = '';
    dest.style.display = 'flex';
    dest.style.flexDirection = 'column';
    //Agregar etiqueta h2 a dest
    let h2 = document.createElement('h2');
    h2.textContent = titulo;
    dest.appendChild(h2);
    //Crea la lista

    data.forEach(element => {
      let card = document.createElement('div');
      card.classList.add('card');
      card.style.marginBottom = '5px';
      card.style.padding = '10px';
      card.style.border = '1px solid black';

      let title = document.createElement('div');
      title.classList.add('card-title');
      title.textContent = element.title;
      card.appendChild(title);

      let subTitle = document.createElement('div');
      subTitle.classList.add('card-subtitle', 'mb-2', 'text-body-secondary');
      subTitle.textContent = element.subtitle;
      card.appendChild(subTitle);

      let p = document.createElement('p');
      p.classList.add('card-text');
      p.innerHTML = element.paragraph;
      card.appendChild(p);

      let link = document.createElement('div');
      link.style.width = '40%';
      link.style.margin = 'auto';
      link.innerHTML = '<button class="card-link btn btn-success" style="width: 100%" onClick="' + element.function + '">Ver más</button>';

      card.appendChild(link);
      dest.appendChild(card);
    });
  }

  mostrarUnaTarjeta(titulo, data, destino) {
    //Agregar al destino display: flex; flex-direction: row; 
    let dest = document.getElementById(destino);
    dest.innerHTML = '';

    //Agregar etiqueta h2 a dest
    let h2 = document.createElement('h2');
    h2.textContent = titulo;
    dest.appendChild(h2);
    //Crea los datos de la tarjeta

    let card = document.createElement('div');
    card.classList.add('card');
    card.style.marginBottom = '5px';
    card.style.padding = '10px';
    card.style.border = '1px solid black';


    for (let key in data) {
      let p = document.createElement('p');
      p.classList.add('card-text');
      p.innerHTML = key + ': ' + data[key];
      card.appendChild(p);
    }

    dest.appendChild(card);
  }
}


