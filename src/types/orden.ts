interface Orden {
  id: number;
  nombre: string;
  nro_orden: number;
  producto: string;
  fecha_entrega: string;
  hora_entrega: string;
  fecha_creacion: string;
}

export interface OrdenPendiente extends Orden {
  atendido_por: string;
}

export interface OrdenAProveedor extends Orden {}
