import { createCohorte }  from '../service/api.js';

document.getElementById('registroFormCohorte').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validarFormulario()) {
        this.submit();
    }
    this.reset();
});

document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
});

function validarFormulario() {
    createCohorte({
        idCodigo:0,
        nombre: document.getElementById('nombre').value.trim(),
        fechaInicio: document.getElementById('fechainicio').value.trim(),
        fechaFinalizacion:document.getElementById('fechaFinalizacion').value.trim(),
        numeroEstudiantes: document.getElementById('numberStudents').value.trim(),
    }).then(res => {
        alert('Cohorte registrado correctamente');
    }
    ).catch(err => {
        alert('Error al registrar cohorte');
    }
    );

}
