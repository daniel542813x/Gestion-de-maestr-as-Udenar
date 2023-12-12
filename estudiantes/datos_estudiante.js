import { createEstudiante }  from '../service/api.js';

document.getElementById('registroFormEst').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validarFormulario()) {
        this.submit();
    }
});

function validarFormulario() {
    var nombre = document.getElementById('nombre').value.trim();
    var identificacion = document.getElementById('identificacion').value.trim();
    var codigoEstudiante = document.getElementById('cod').value.trim();
    var direccion = document.getElementById('direccion').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var genero = document.getElementById('genero').value.trim();
    var fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
    var genero = document.getElementById('genero').value.trim();
    var semestre= document.getElementById('semestre').value.trim();
    var estadoCivil = document.getElementById('estado').value.trim();
    var fechaIngreso = document.getElementById('fechaingreso').value.trim();
    var fechaEgreso = document.getElementById('fechaegreso').value.trim();
    var cohorte = document.getElementById('cohorte').value.trim();

    createEstudiante({
        codigoEstudiante:codigoEstudiante,
        nombre: nombre, 
        identificacion: identificacion,
        direccion: direccion,
        telefono: telefono,
        correo: correo,
        genero: genero,
        fechaNac: fechaNacimiento,
        semestre: semestre,
        estadoCivil:estadoCivil,
        fechaVinculacion: fechaVinculacion,
        fechaIngreso:fechaIngreso,
        fechaEgreso:fechaEgreso,
        idCohorte:cohorte

    }).then(res => {
        alert('Estudiante registrado correctamente');
    }
    ).catch(err => {
        alert('Error al registrar estudiante');
    }
    );

}
