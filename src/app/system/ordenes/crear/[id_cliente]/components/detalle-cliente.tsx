type Props = {
  titulo: string;
  icono: JSX.Element;
  texto: string;
};
const DetalleCliente = ({ titulo, texto, icono }: Props) => {
  return (
    <div className="block px-3">
      <div className="flex items-center gap-x-2 text-sm text-slate-500">
        <span className="text-blue-600">{icono}</span>
        <h2>{titulo}</h2>
      </div>
      <p className="text-slate-700 font-semibold dark:text-slate-300">{texto}</p>
    </div>
  );
};

export default DetalleCliente;
