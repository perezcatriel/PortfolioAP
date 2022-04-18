export interface Persona {
  "id"?: number,
  "nombre": string,
  "apellido": string,
  "fecha_nacimiento"?: string,
  "domicilio"?: string,
  "telefono"?: string,
  "correo": string,
  "sobre_mi": string,
  "url_foto"?: string
}

export interface CreatePersonaDTO extends Omit<Persona,'fecha_nacimiento' | 'domicilio' | 'telefono'> {
  categoriaId: number;
}
