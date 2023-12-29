interface Cliente {
  nombre: string;
  telefono: string;
  email?: string;
  observaciones?: string;
}

interface ClienteCreado extends Cliente {
  id: number;
}