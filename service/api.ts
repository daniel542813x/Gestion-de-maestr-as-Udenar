import axios, { AxiosRequestConfig } from 'axios';
import {CoordinadorPrograma,Cohorte,Docente,Estudiante,ProgramaAcademico} from '../types'
  
export async function createCoordinadorPrograma(data: CoordinadorPrograma): Promise<any> {
  const url = 'http://www.gestionprogramaacademico.somee.com/CoordinadorPrograma';

  const requestConfig: AxiosRequestConfig = {
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


export async function createCohorte(data: Cohorte): Promise<any> {
  const url = 'http://www.gestionprogramaacademico.somee.com/Cohorte';

  const requestConfig: AxiosRequestConfig = {
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

export async function createDocente(data: Docente): Promise<any> {
    const url = 'http://www.gestionprogramaacademico.somee.com/Docente';
  
    const requestConfig: AxiosRequestConfig = {
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
  
async function createEstudiante(data: Estudiante): Promise<any> {
    const url = 'http://www.gestionprogramaacademico.somee.com/Estudiante';

    const requestConfig: AxiosRequestConfig = {
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

async function createProgramaAcademico(data: ProgramaAcademico): Promise<any> {
    const url = 'http://www.gestionprogramaacademico.somee.com/ProgramaAcademico';
  
    const requestConfig: AxiosRequestConfig = {
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
  