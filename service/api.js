export async function createCoordinadorPrograma(data) {
  const url = 'http://www.gestionprogramaacademico.somee.com/CoordinadorPrograma';

  const requestConfig = {
    method: 'POST',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios(requestConfig);
    return response.data;
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
    throw error;
  }
}


export async function createCohorte(data) {
  const url = 'http://www.gestionprogramaacademico.somee.com/Cohorte';

  const requestConfig = {
    method: 'POST',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios(requestConfig);
    return response.data;
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
    throw error;
  }
}

export async function createDocente(data) {
    const url = 'http://www.gestionprogramaacademico.somee.com/Docente';
  
    const requestConfig = {
      method: 'POST',
      url,
      data,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'origin': '127.0.0.1:8000'
      },
    };
  
    try {
      const response = await axios(requestConfig);
      return response.data;
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
      throw error;
    }
  }
  
export async function createEstudiante(data) {
    const url = 'http://www.gestionprogramaacademico.somee.com/Estudiante';

    const requestConfig = {
        method: 'POST',
        url,
        data,
        headers: {
        'Content-Type': 'application/json',
        },
    };

    try {
        const response = await axios(requestConfig);
        return response.data;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
        throw error;
    }
}

export async function createProgramaAcademico(data) {
    const url = 'http://www.gestionprogramaacademico.somee.com/ProgramaAcademico';
  
    const requestConfig = {
      method: 'POST',
      url,
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const response = await axios(requestConfig);
      return response.data;
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
      throw error;
    }
  }
  

  
export async function asociarProgramaCoordinador(data){
  const url = 'http://www.gestionprogramaacademico.somee.com/ProgramaByCoordinador/AsociarProgramaCoordinador';

  const requestConfig = {
    method: 'POST',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios(requestConfig);
    return response.data;
  } catch (error) {
    // Manejar el error según tus necesidades
    console.error('Error al realizar la solicitud:', error.message);
    throw error;
  }
}
  