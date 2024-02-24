export const errorsLogin = (status: number | undefined): void => {
  if (status === 401) throw new Error("Credenciales incorrectas.");
  if (status === 500) throw new Error("Algo salio mal.");
};
