import moment from "moment";

export const formatearFechaFormEditar = (timestamp: string) =>
  moment(timestamp).format("YYYY-MM-DD");

export const formatearHoraFormEditar = (timestamp: string) =>
  moment(timestamp, "HH:mm:ss").format("HH:mm");
