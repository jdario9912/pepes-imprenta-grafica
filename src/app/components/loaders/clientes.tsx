import ButtonLoader from "./button";
import ButtonIconLoader from "./button-icon";
import HeaderTableLoader from "./header-table";
import InputLoader from "./input";
import NombrePaginaLoader from "./nombre-pagina";
import RowClientesLoader from "./row-clientes";

const ClientesLoader = () => (
  <div className="p-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <InputLoader />
        <ButtonLoader />
        <ButtonLoader />
      </div>
      <NombrePaginaLoader />
    </div>

    <div className="border border-slate-200 rounded-lg mt-8 p-4 overflow-hidden">
      <HeaderTableLoader />
      <div className="py-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <RowClientesLoader key={i} />
        ))}
      </div>
    </div>
    <div className="flex justify-end gap-2 py-2 w-full">
        <ButtonIconLoader />
        <ButtonIconLoader />
    </div>
  </div>
);

export default ClientesLoader;
