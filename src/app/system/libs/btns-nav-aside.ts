import { iconos } from "@/components/icons";
import { BtnNavAside } from "@/types/botones";

export const btnsNavAside: BtnNavAside[] = [
  {
    href: "/",
    label: "Inicio",
    icono: iconos.home
  },
  {
    href: "/system/ordenes/pendientes",
    label: "Ordenes pendientes",
    icono: iconos.pendientes
  },
  {
    href: "/system/ordenes/proveedor",
    label: "A proveedor",
    icono: iconos.aProveedor
  },
  {
    href: "/system/clientes",
    label: "Clientes",
    icono: iconos.personas
  },
  {
    href: "/system/clientes/nuevo",
    label: "Crear cliente",
    icono: iconos.agregarPersona
  },
];
