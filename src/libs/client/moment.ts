import moment from "moment";

export const formatearFecha = (timestamp: string) =>
  moment(timestamp).format("DD-MM-YYYY");

export const formatearHora = (timestamp: string) =>
  moment(timestamp, "HH:mm:ss").format("HH:mm");

export const fechaActual = () => moment().format("DD-MM-YYYY")
