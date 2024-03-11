interface Orden {
  id: number;
  nombre: string;
  nro_orden: number;
  producto: string;
  fecha_creacion: string;
  fecha_entrega: string;
  hora_entrega: string;
}

export interface OrdenPendiente extends Orden {
  atendido_por: string;
}

export interface OrdenAProveedor extends Orden {}

export interface OrdenEncontrada
  extends Omit<Orden, "fecha_entrega" | "hora_entrega"> {
  atendido_por: string;
  estado: string;
  telefono: string;
}
