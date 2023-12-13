import { createProgramaAcademico } from '../service/api.js';

document.getElementById('registroFormProgram').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validarFormulario()) {
        this.submit();
    }
});

function validarFormulario() {
    createProgramaAcademico({
        idProgramaAcademico:0,
        nombre: document.getElementById('nombre').value.trim(),
        correo: document.getElementById('correo').value.trim(),
        fechaResolucionRegistro:document.getElementById('resolucion').value.trim(),
        lineasInvestigacionByProgramaAcademicos: document.getElementById('lnInves').value.trim(),
        logoByProgramaAcademicos: document.getElementById('logo').value.trim(),
    }).then(res => {
        alert('Programa registrado correctamente');
    }
    ).catch(err => {
        alert('Error al registrar Programa');
    }
    );

}
