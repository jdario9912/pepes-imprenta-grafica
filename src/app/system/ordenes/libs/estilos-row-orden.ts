import { formatearFecha } from "@/libs/client/moment";
import { fechaEntregaNumber, hoy, hoyNumber } from "../../../../libs/fechas";

const ordenDeAyer = (fecha_entrega: string): boolean =>
  fechaEntregaNumber(fecha_entrega) < hoyNumber;

const ordenDeManana = (fecha_entrega: string): boolean =>
  fechaEntregaNumber(fecha_entrega) > hoyNumber;

const ordenDeHoy = (fecha_entrega: string): boolean =>
  formatearFecha(fecha_entrega) == hoy;

export const estilosRowOrden = (fecha_entrega: string): string => {
  if (ordenDeAyer(fecha_entrega))
    return "bg-danger-100 border border-danger-500";

  if (ordenDeHoy(fecha_entrega))
    return "bg-warning-100 border border-warning-500";

  if (ordenDeManana(fecha_entrega))
    return "bg-success-100 border border-success-500";

  return "";
};
