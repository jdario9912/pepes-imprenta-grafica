import toast from "react-hot-toast";

export const errorToast = (mensaje: string) => toast.error(mensaje);

export const succesToast = (mensaje: string) => toast.success(mensaje);
