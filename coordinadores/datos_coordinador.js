import { createCoordinadorPrograma }  from '../service/api.js';
import { getAllCoordinadorPrograma } from '../service/api.js';

export async function visualizarCoordinadoresPrograma() {
    try {
        const coordinadoresPrograma = await getAllCoordinadorPrograma();
        const tableBody = document.getElementById('coordinadoresTableBody');

        coordinadoresPrograma.forEach(coordinador => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${coordinador.idCoordinadorPrograma}</td>
                <td>${coordinador.nombre}</td>
                <td>${coordinador.identificacion}</td>
                <td>${coordinador.direccion}</td>
                <td>${coordinador.telefono}</td>
                <td>${coordinador.correo}</td>
                <td>${coordinador.genero}</td>
                <td>${coordinador.fechaNac}</td>
                <td>${coordinador.fechaVinculacion}</td>
                <td>
                    <a href="#"><img src="https://i.ibb.co/LNFGXhb/ojo.png" alt="ver"></a>
                    <a href="#"><img src="https://i.ibb.co/HD9mM18/lapiz-2.png" alt="lapiz"></a>
                    <a href="#"><img src="https://i.ibb.co/JxBPRnd/basura.png" alt="basura"></a>
                </td>
            `;
            tableBody.append(row);
        });
        $('#tablaCoordinadores').DataTable({
            "paging": true,
            "searching": false,
            "lengthChange": false,
        });
    } catch (error) {
        // Manejar el error según tus necesidades
        console.error('Error al visualizar coordinadores de programa:', error.message);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    visualizarCoordinadoresPrograma();
    
  });

document.getElementById('registroFormCord').addEventListener('submit', function(event) {
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
        alert('Debe ser mayor de 18 años para registrarse como coordinador.');
        return false;
    }

    var fechaVinculacion = document.getElementById('fechaVinculacion').value.trim();


    console.log('nombre: ' + nombre);
    console.log('apellido: ' + apellido);
    console.log('identificacion: ' + identificacion);
    console.log('direccion: ' + direccion);
    console.log('telefono: ' + telefono);
    console.log('correo: ' + correo);
    console.log('genero: ' + genero);
    console.log('fechaNacimiento: ' + fechaNacimiento);

    createCoordinadorPrograma({
        idCoordinadorPrograma:0,
        nombre: nombre + ' ' + apellido, 
        identificacion: identificacion,
        direccion: direccion,
        telefono: telefono,
        correo: correo,
        genero: genero,
        fechaNac: fechaNacimiento,
        fechaVinculacion: fechaVinculacion,
        adjuntos: []

    }).then(res => {
        alert('Coordinador registrado correctamente');
    }
    ).catch(err => {
        alert('Error al registrar coordinador:'+err.response.data);
    }
    );

}
