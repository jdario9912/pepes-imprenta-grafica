export type BtnNavAside = { href: string; label: string; icono: JSX.Element };

export type BtnAccionesTabla = {
  id: string;
  accion: () => void;
  icono: JSX.Element;
  texto: string;
};
