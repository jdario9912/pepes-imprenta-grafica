import { iconos } from "@/components/icons";
import { estadoOrden } from "@/libs/listas";

type BotonCambiarEstado = { label: string; icono: JSX.Element };

export function botonesCambiarEstado(): Array<BotonCambiarEstado> {
  return estadoOrden.map((estado) => {
    if (estado === "pendiente")
      return { label: estado, icono: iconos.pendientes };
    if (estado === "entregado")
      return { label: estado, icono: iconos.entregado };
    if (estado === "proveedor")
      return { label: estado, icono: iconos.aProveedor };
    if (estado === "realizado")
      return { label: estado, icono: iconos.realizado };
    return { label: "", icono: iconos.cerrar };
  });
}
