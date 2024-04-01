// revisar
import { Permiso } from "@/types/enums";
import { dataDesdeToken } from "../api/jwt";

const empleadoEsAdmin = (token: string): boolean => {
  const { permisos } = dataDesdeToken(token);
  return permisos == Permiso.admin;
};

const empleadoEsUser = (token: string): boolean => {
  const { permisos } = dataDesdeToken(token);
  return permisos == Permiso.user;
};

const pathEmpleados = (pathname: string): boolean => {
  return pathname.startsWith('/api/empleados')
} 

export const empleadoAutorizado = (token: string, method: string, pathname :string): boolean => {
  if (empleadoEsAdmin(token)) return true;
  else if (pathEmpleados(pathname)) return false
  else if (method == "GET") return true;
  else if (method == "PATCH" || method == "POST") {
    if (empleadoEsUser(token)) return true;
  }
  return false
}
