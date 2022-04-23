export interface LoginResponse {
    codigo:        string;
    mensaje:       string;
    data:       Usuario;
    mensaje_error: string;
    token:         string;
}

export interface Usuario {
    id:                   number;
    usuario:              string;
    nombre:               string;
    fecha_creacion:       string;
    apellido:             string;
    correo:               string;
    id_institucion:       number;
    estado:               string;
    foto:                 string;
    password:             string;
    last_access:          string;
    foto_banner:          string;
    id_persona:           number;
    password2:            string;
    id_emprendedor:       number;
    id_usuario:           number;
    url_foto:             string;
    url_foto_banner:      string;
    id_asistente_tecnico: number;
    id_mentor:            number;
    emprendedor:          number;
    mesa_servicio:        number;
    mentor:               number;
    asistencia_tecnica:   number;
    administrador:        number;
    supervisorProveedor:  number;
    asesor:               number;
    inscripciones:        Inscripcion[];
}

export interface Inscripcion {
    id_inscripcion:              number;
    estado_inscripcion:          string;
    fase:                        number;
    id_emprendimiento:           number;
    nombre_comercial:            string;
    nombre_emprendimiento:       string;
    ruc_emprendimiento:          string;
    razon_social_emprendimiento: string;
}

export interface LoginData {
    correo:                     string;
    password:                   string;
}