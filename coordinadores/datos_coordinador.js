document.getElementById('registroFormCord').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validarFormulario()) {
        this.submit();
    }
});

function validarFormulario() {
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var identificacion = document.getElementById('identificacion').value.trim();
    var direccion = document.getElementById('direccion').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var genero = document.getElementById('genero').value.trim();
    var fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
    var fechaVinculacion = document.getElementById('fechaVinculacion').value.trim();


    console.log('nombre: ' + nombre);
    console.log('apellido: ' + apellido);
    console.log('identificacion: ' + identificacion);
    console.log('direccion: ' + direccion);
    console.log('telefono: ' + telefono);
    console.log('correo: ' + correo);
    console.log('genero: ' + genero);
    console.log('fechaNacimiento: ' + fechaNacimiento);
}
