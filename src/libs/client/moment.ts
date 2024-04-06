import moment from "moment";
import "moment/locale/es";

export const formatearFecha = (timestamp: string) =>
  moment(timestamp).format("DD-MM-YYYY");

export const formatearHora = (timestamp: string) =>
  moment(timestamp, "HH:mm:ss").format("HH:mm");

export const fechaActual = () => moment().format("DD-MM-YYYY");

export const obtenerNombreDia = (timestamp: string) =>
  moment(timestamp).locale("es").format("dddd");
