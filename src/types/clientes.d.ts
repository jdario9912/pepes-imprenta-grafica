interface Cliente {
  nombre: string;
  telefono: string;
  email?: string;
  observaciones?: string;
}

interface ClienteRegistrado extends Cliente {
  id: number;
}