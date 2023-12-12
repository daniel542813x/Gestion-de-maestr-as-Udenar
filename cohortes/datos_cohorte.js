import { createCohorte }  from '../service/api.js';

document.getElementById('registroFormCohorte').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validarFormulario()) {
        this.submit();
    }
});

function validarFormulario() {
    createCohorte({
        idCodigo:0,
        nombre: document.getElementById('nombre').value.trim(),
        fechaInicio: document.getElementById('fechainicio').value.trim(),
        fechaFinalizacion:document.getElementById('fechaFinalizacion').value.trim(),
        numeroEstudiantes: document.getElementById('numberStudents').value.trim(),
    }).then(res => {
        alert('Estudiante registrado correctamente');
    }
    ).catch(err => {
        alert('Error al registrar estudiante');
    }
    );

}
