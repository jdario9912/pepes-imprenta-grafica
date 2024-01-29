interface Empleado {
  id?: number;
  nickname: string;
  email?: string;
  password: string;
  permisos: string;
}

interface EmpleadoDataToken extends Omit<Empleado, "password">{} 