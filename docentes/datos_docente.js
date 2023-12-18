import { createDocente,getAllDocentes } from '../service/api.js';

document.getElementById('generateCsvBtn2').addEventListener('click', async function () {
    const apiResponse = await getAllDocentes()
    console.log(apiResponse);

    const columnNames = Object.keys(apiResponse[0]);

    const csvData = [
        columnNames.map(name => `"${name}"`).join(','),
        ...apiResponse.map(student => Object.values(student).map(value => `"${value}"`).join(','))
    ].join('\n');    
    
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = 'docentes.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


document.addEventListener('DOMContentLoaded', function() {
    visualizarDocentes();
  });


document.getElementById('registroForm').addEventListener('submit', function(event) {
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
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var identificacion = document.getElementById('identificacion').value.trim();
    var direccion = document.getElementById('direccion').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var genero = document.getElementById('genero').value.trim();
    var fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();

    var fechaActual = new Date();
    var fechaNac = new Date(fechaNacimiento);
    var edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    if (edad < 18) {
        alert('Debe ser mayor de 18 años para registrarse como docente.');
        return false;
    }



    var cuadroTexto1Value = document.getElementById('cuadroTexto1').value.trim();
    var cuadroTexto2Value = document.getElementById('cuadroTexto2').value.trim();

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
        alert('Error al registrar docente:'+err.response.data);
    }
    );

}

export async function visualizarDocentes() {
    try {
        const docentes_data = await getAllDocentes();
        const tableBody = document.getElementById('docentesTableBody');

        docentes_data.forEach(docentes => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${docentes.codigoDocente}</td>
                <td>${docentes.nombre}</td>
                <td>${docentes.identificacion}</td>
                <td>${docentes.direccion}</td>
                <td>${docentes.telefono}</td>
                <td>${docentes.correo}</td>
                <td>${docentes.genero}</td>
                <td>${docentes.fechaNac}</td>
                <td>${docentes.formacionAcademica}</td>
                <td>${docentes.areasConocimiento}</td>
                <td>
                    <a href="#"><img src="https://i.ibb.co/LNFGXhb/ojo.png" alt="ver"></a>
                    <a href="#"><img src="https://i.ibb.co/HD9mM18/lapiz-2.png" alt="lapiz"></a>
                    <a href="#"><img src="https://i.ibb.co/JxBPRnd/basura.png" alt="basura"></a>
                </td>
            `;
            tableBody.append(row);
        });
        $('#tabladocenteses').DataTable({
            "paging": true,
            "searching": false,
            "lengthChange": false,
        });
    } catch (error) {
        // Manejar el error según tus necesidades
        console.error('Error al visualizar docenteses de programa:', error.message);
    }
}
