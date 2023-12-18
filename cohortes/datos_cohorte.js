import { createCohorte,getAllCohortes }  from '../service/api.js';


document.addEventListener('DOMContentLoaded', function() {
    visualizarcohorte();
  });

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
        numeroEstudiantes: document.getElementById('numbercohorte').value.trim(),
    }).then(res => {
        alert('Cohorte registrado correctamente');
    }
    ).catch(err => {
        alert('Error al registrar cohorte: '+err.response.data);
    }
    );

}


export async function visualizarcohorte() {
    try {
        const cohorte_data = await getAllCohortes();
        const tableBody = document.getElementById('chortesTableBody');

        cohorte_data.forEach(cohorte => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cohorte.idCodigo}</td>
                <td>${cohorte.nombre}</td>
                <td>${cohorte.fechaInicio}</td>
                <td>${cohorte.fechaFinalizacion}</td>
                <td>${cohorte.numeroEstudiantes}</td>
                <td>
                    <a href="#"><img src="https://i.ibb.co/LNFGXhb/ojo.png" alt="ver"></a>
                    <a href="#"><img src="https://i.ibb.co/HD9mM18/lapiz-2.png" alt="lapiz"></a>
                    <a href="#"><img src="https://i.ibb.co/JxBPRnd/basura.png" alt="basura"></a>
                </td>
            `;
            tableBody.append(row);
        });
        $('#tablacohortees').DataTable({
            "paging": true,
            "searching": false,
            "lengthChange": false,
        });
    } catch (error) {
        // Manejar el error según tus necesidades
        console.error('Error al visualizar cohortees de programa:', error.message);
    }
}
