import { fechaActual, formatearFecha } from "@/libs/client/moment";

export const hoy = fechaActual();

export const hoyNumber = hoy.split("-").slice().reverse().join("");

export const fechaEntregaNumber = (fecha_entrega: string) =>
  formatearFecha(fecha_entrega).split("-").slice().reverse().join("");

export const fechaANumero = (timestamp: string): number => {
  const fecha = formatearFecha(timestamp);

  return JSON.parse(fecha.split("-").slice().reverse().join(""));
};
