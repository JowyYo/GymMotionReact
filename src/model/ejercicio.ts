export interface ejercicio {
    id: string,
    name: string,
    description: string,
    group: GrupoMuscular
}

export enum GrupoMuscular {    
    Espalda,
    Pectoral,
    Hombro,
    Bíceps,
    Tríceps,
    Antebrazo,
    Cuadriceps,
    Femoral,
    Gluteo,
    Gemelo,
    Abdominales
}