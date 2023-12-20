import { createEstudiante,getAllEstudiantes,updateEstudiantePut as updateEstudiante }  from '../service/api.js';


document.addEventListener('DOMContentLoaded', function() {
    visualizarStudents();
  });

document.getElementById('registroFormEst').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validarFormulario()) {
        this.submit();
    }
    this.reset();
});

document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
});
if (document.getElementById('generateCsvBtn')){
    document.getElementById('generateCsvBtn').addEventListener('click', async function () {
        const apiResponse = await getAllEstudiantes()

        const columnNames = Object.keys(apiResponse[0]);

        const csvData = [
            columnNames.map(name => `"${name}"`).join(','),
            ...apiResponse.map(student => Object.values(student).map(value => `"${value}"`).join(','))
        ].join('\n');    
        
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = 'datos.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
async function validarFormulario() {

    console.log('Validando formulario...');
    var nombre = document.getElementById('nombre').value.trim();
    var identificacion = document.getElementById('identificacion').value.trim();
    var codigoEstudiante = document.getElementById('idcod').value.trim();
    var direccion = document.getElementById('direccion').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
    var genero = document.getElementById('genero').value.trim();
    var semestre= document.getElementById('semestre').value.trim();
    var estadoCivil = document.getElementById('estado').value.trim();
    var fechaIngreso = document.getElementById('fechaingreso').value.trim();
    var fechaEgreso = document.getElementById('fechaegreso').value.trim();
    var cohorte = document.getElementById('cohorte').value.trim();

    const data = {
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
        fechaIngreso:fechaIngreso,
        fechaEgreso:fechaEgreso,
        idCohorte:cohorte

    }
    if (!codigoEstudiante){
        createEstudiante(data).then(res => {
            alert('Estudiante registrado correctamente');
        }
        ).catch(err => {
            alert('Error al registrar estudiante:'+err.response.data);
        }
        );
    }else{
        updateEstudiante(data).then(res => {
            alert('Estudiante actualizado correctamente');
        }
        ).catch(err => {
            alert('Error al actualizar estudiante:'+err.response.data);
        }
        );
        window.history.back();
    }
}
export async function visualizarStudents() {
    try {
        const students_data = await getAllEstudiantes();
        const tableBody = document.getElementById('studentsTableBody');

        students_data.forEach(students => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${students.codigoEstudiante}</td>
                <td>${students.nombre}</td>
                <td>${students.identificacion}</td>
                <td>${students.direccion}</td>
                <td>${students.telefono}</td>
                <td>${students.correo}</td>
                <td>${students.genero}</td>
                <td>${students.fechaNac.toString().split("T")[0]}</td>
                <td>${students.semestre}</td>
                <td>${students.estadoCivil}</td>
                <td>${students.fechaIngreso.toString().split("T")[0]}</td>
                <td>${students.fechaEgreso.toString().split("T")[0]}</td>
                <td>${students.idCohorte}</td>
                <td>
                    <a href="#" onclick="updateUsuario(${JSON.stringify(students).replace(/"/g, "&quot;")})">
                        <img src="https://i.ibb.co/HD9mM18/lapiz-2.png" alt="lapiz"/>
                    </a>
                </td>
            `;
            tableBody.append(row);
        });
        $('#tablastudentses').DataTable({
            "paging": true,
            "searching": false,
            "lengthChange": false,
        });
    } catch (error) {
        console.error('Error al visualizar studentses de programa:', error.message);
    }
}
