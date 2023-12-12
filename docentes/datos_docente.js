import { createDocente } from '../service/api.js';

document.getElementById('registroForm').addEventListener('submit', function(event) {
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
    var cuadroTexto1Value = document.getElementById('cuadroTexto1').value.trim();
    var cuadroTexto2Value = document.getElementById('cuadroTexto2').value.trim();

    console.log('nombre: ' + nombre);
    console.log('apellido: ' + apellido);
    console.log('identificacion: ' + identificacion);
    console.log('direccion: ' + direccion);
    console.log('telefono: ' + telefono);
    console.log('correo: ' + correo);
    console.log('genero: ' + genero);
    console.log('fechaNacimiento: ' + fechaNacimiento);

    createDocente({
        codigoDocente:0,
        nombre: nombre + ' ' + apellido,
        identificacion: identificacion,
        direccion: direccion,
        telefono: telefono,
        correo: correo,
        genero: genero,
        fechaNac: fechaNacimiento,
        formacionAcademica: cuadroTexto1Value,
        areasConocimiento: cuadroTexto2Value
    }).then(res => {
        console.log(res);
        alert('Docente registrado correctamente');
    }
    ).catch(err => {
        alert('Error al registrar docente');
    }
    );

}


