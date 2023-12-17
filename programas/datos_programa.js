import { createProgramaAcademico } from '../service/api.js';
import { getAllProgramasAcademicos } from '../service/api.js';

export async function visualizarProgramasAcademicos() {
  try {
    const programasAcademicos = await getAllProgramasAcademicos();
    const tableBody = document.getElementById('programasTableBody');

    programasAcademicos.forEach(programa => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${programa.idProgramaAcademico}</td>
        <td>${programa.nombre}</td>
        <td>${programa.correo}</td>
        <td>${programa.fechaResolucionRegistro}</td>
        <td>
          <a href="#"><img src="https://i.ibb.co/LNFGXhb/ojo.png" alt="ver"></a>
          <a href="#"><img src="https://i.ibb.co/HD9mM18/lapiz-2.png" alt="lapiz"></a>
          <a href="#"><img src="https://i.ibb.co/JxBPRnd/basura.png" alt="basura"></a>
        </td>
      `;
      tableBody.append(row);
    });
    $('#tablaProgramas').DataTable({
      "paging": true,
      "searching": false,
      "lengthChange": false,
    });
  } catch (error) {
    // Manejar el error según tus necesidades
    console.error('Error al visualizar programas académicos:', error.message);
  }
}

// Llama a la función para visualizar los programas académicos al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  visualizarProgramasAcademicos();
  
});

document.getElementById('registroFormProgram').addEventListener('submit', function(event) {
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
    createProgramaAcademico({
        idProgramaAcademico:0,
        nombre: document.getElementById('nombre').value.trim(),
        correo: document.getElementById('correo').value.trim(),
        fechaResolucionRegistro:document.getElementById('resolucion').value.trim(),
        //lineasInvestigacionByProgramaAcademicos: document.getElementById('lnInves').value.trim(),
        //logoByProgramaAcademicos: document.getElementById('logo').value.trim(),
    }).then(res => {
        alert('Programa registrado correctamente');
        return true;
    }
    ).catch(err => {
        console.log(err.response.data)
        alert('Error al registrar Programa:'+err.response.data);
        return false;
    }
    );
}

