export type BtnNavAside = { href: string; label: string };

export type BtnAccionesTabla = {
  id: string;
  accion: () => void;
  icono: JSX.Element;
  texto: string;
};
