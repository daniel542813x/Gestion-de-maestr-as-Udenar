import { asociarProgramaCoordinador }  from '../service/api.js';

document.getElementById('registroFormCordPro').addEventListener('submit', function(event) {
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
    asociarProgramaCoordinador({
        programaByCoordinadorId:0,
        idPrograma: document.getElementById('idprogram').value.trim(),
        idCoordinador: document.getElementById('idcoo').value.trim(),

    }).then(res => {
        alert('Asociacion correcta');
    }
    ).catch(err => {
        alert('Error al registrar');
    }
    );

}
