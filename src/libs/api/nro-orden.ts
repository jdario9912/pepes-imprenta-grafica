export const generarNumeroOrden = (): number => {
  const milisegundos = new Date().getMilliseconds();
  const segundo = new Date().getSeconds();
  const minuto = new Date().getMinutes();
  const yearFull = new Date().getFullYear();
  const year = yearFull.toString().slice(2,4);
  const hoy = new Date().getDate();
  const mes = new Date().getMonth();

  return parseInt(`${year}${mes}${hoy}${minuto}${segundo}${milisegundos}`);
};