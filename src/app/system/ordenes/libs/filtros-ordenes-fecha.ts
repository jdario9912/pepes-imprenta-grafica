import { formatearFecha } from "@/libs/client/moment";
import { fechaEntregaNumber, hoy, hoyNumber } from "../../../../libs/fechas";
import { OrdenAProveedor, OrdenPendiente } from "@/types/orden";

export const ordenesPendientesDeAyer = (
  ordenes: OrdenPendiente[]
): OrdenPendiente[] =>
  ordenes.filter(
    (orden) => fechaEntregaNumber(orden.fecha_entrega) < hoyNumber
  );

export const ordenesPendientesParaManana = (
  ordenes: OrdenPendiente[]
): OrdenPendiente[] =>
  ordenes.filter(
    (orden) => fechaEntregaNumber(orden.fecha_entrega) > hoyNumber
  );

export const ordenesPendientesDeHoy = (
  ordenes: OrdenPendiente[]
): OrdenPendiente[] =>
  ordenes.filter((orden) => formatearFecha(orden.fecha_entrega) == hoy);

export const ordenesProveedorDeAyer = (
  ordenes: OrdenAProveedor[]
): OrdenAProveedor[] =>
  ordenes.filter(
    (orden) => fechaEntregaNumber(orden.fecha_entrega) < hoyNumber
  );

export const ordenesProveedorParaManana = (
  ordenes: OrdenAProveedor[]
): OrdenAProveedor[] =>
  ordenes.filter(
    (orden) => fechaEntregaNumber(orden.fecha_entrega) > hoyNumber
  );

export const ordenesProveedorDeHoy = (
  ordenes: OrdenAProveedor[]
): OrdenAProveedor[] =>
  ordenes.filter((orden) => formatearFecha(orden.fecha_entrega) == hoy);
