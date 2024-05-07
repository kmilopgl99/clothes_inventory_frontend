let vista = new Vista();
let usuario = new Usuario();

/*--------------- INICIO----------------*/

document.body.onload = function () {
  //Tomar datos del formulario
  vista.mostrarPlantilla('formLogin', 'contenido')
}

function crearUsuario() {
  vista.mostrarPlantilla('formRegister', 'contenido')
}

/*----------------PANTALLA CREAR ALMACEN----------*/

function login() {
  //Leer datos
  let data = vista.getForm("formularioLogin")
  if (data.ok) {
    //Validar datos en la tabla clientes o empresas
    usuario.login(data, function (data) {
      if (data.success) {
        if (data.data.length == 0) {
          vista.mostrarMensaje(false, 'Usuario o contraseña incorrectos');
          return;
        } else {
          vista.limpiarArea('contenido')
          vista.mostrarPlantilla('login', 'lateral')
     
        vista.mostrarMensaje(false, 'Error al realizar la consulta en la base de datos');
      }
    }});
  }
}




function crearAlmacenEmergente() {
  vista.mostrarPlantilla('nuevo-almacen-emergente', 'contenido')
  vista.limpiarArea('lateral')
}

function editarAlmacenEmergente() {
  vista.mostrarPlantilla('editar-almacen', 'contenido')
  vista.limpiarArea('lateral')
}

function emergenteEliminar() {
  vista.mostrarPlantilla('emergente-eliminar', 'contenido')
  vista.limpiarArea('lateral')
}

/*---------------PANTALLA ALMACEN 1--------------------*/

function entrarAlmacen() {
  vista.limpiarArea('lateral')
  vista.mostrarPlantilla('almacen-1', 'contenido')
}

function crearEntrada() {
  vista.mostrarPlantilla('crear-entrada', 'contenido')
}

function crearSalida() {
  vista.mostrarPlantilla('crear-salida', 'contenido')
}

/*---------------PANTALLA PRODUCTOS--------------------*/

function mostrarProductos() {
  vista.limpiarArea('lateral')
  vista.mostrarPlantilla('productos', 'contenido')
}

function crearProducto() {
  vista.mostrarPlantilla('crear-producto', 'contenido')
}

function editarProducto() {
  vista.mostrarPlantilla('editar-producto', 'contenido')
}

function eliminarProducto() {
  vista.mostrarPlantilla('eliminar-producto', 'contenido')
}

/*---------------PANTALLA INFORMES--------------------*/

function mostrarInforme() {
  vista.limpiarArea('lateral')
  vista.mostrarPlantilla('informes', 'contenido')
}

function mostrarMovimientos() {
  vista.mostrarPlantilla('movimientos', 'contenido')
}

function descargarMovimientos() {
  vista.mostrarPlantilla('descargar-movimientos', 'contenido')
}

function mostrarPerfiles() {
  vista.limpiarArea('lateral')
  vista.mostrarPlantilla('perfiles', 'contenido')
}

function crearPerfiles() {
  vista.mostrarPlantilla('crear-perfil', 'contenido')
}

function editarPerfiles() {
  vista.mostrarPlantilla('editar-perfil', 'contenido')
}

function eliminarPerfiles() {
  vista.mostrarPlantilla('eliminar-perfil', 'contenido')
}

function mostrarLogin() {
  vista.mostrarPlantilla('formLogin', 'contenido')
  vista.limpiarArea('lateral')
}




function pantallaPrincipal() {
  vista.limpiarArea('contenido')
  vista.mostrarPlantilla('panel-3-botones', 'lateral')
  vista.mostrarPlantilla('seleccionAlmacen', 'contenido')
}


