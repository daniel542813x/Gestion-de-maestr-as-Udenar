export interface CoordinadorPrograma {
    idCoordinadorPrograma: number;
    nombre: string;
    identificacion: string;
    direccion: string;
    telefono: string;
    correo: string;
    genero: string;
    fechaNac: string;
    fechaVinculacion: string;
    adjuntos: any[]; // Puedes ajustar el tipo según la estructura real de los adjuntos
  }
  
export interface Cohorte {
    idCodigo: number;
    nombre: string;
    fechaInicio: string;
    fechaFinalizacion: string;
    numeroEstudiantes: number;
  }
  
export interface Docente {
    codigoDocente: number;
    nombre: string;
    identificacion: string;
    direccion: string;
    telefono: string;
    correo: string;
    genero: string;
    fechaNac: string;
    formacionAcademica: string;
    areasConocimiento: string;
  }
  
export interface Estudiante {
    codigoEstudiante: number;
    nombre: string;
    identificacion: string;
    direccion: string;
    telefono: string;
    correo: string;
    genero: string;
    fechaNac: string;
    semestre: number;
    estadoCivil: string;
    fechaIngreso: string;
    fechaEgreso: string | null;
    idCohorte: number;
    }
  
export interface ProgramaAcademico {
    idProgramaAcademico: number;
    nombre: string;
    correo: string;
    fechaResolucionRegistro: string;
    lineasInvestigacionByProgramaAcademicos: any[]; 
    logoByProgramaAcademicos: any[];
  }

export default {}