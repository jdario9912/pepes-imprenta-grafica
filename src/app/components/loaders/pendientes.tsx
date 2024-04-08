import ButtonLoader from "./button";
import ButtonIconLoader from "./button-icon";
import HeaderTableLoader from "./header-table";
import InputLoader from "./input";
import NombrePaginaLoader from "./nombre-pagina";
import RowPendientesLoader from "./row-pendientes";

const PendientesLoader = () => (
  <div className="p-4">
    <div className="flex items-center justify-between">
      <InputLoader />
      <div className="flex items-center gap-x-2">
        <NombrePaginaLoader />
        <ButtonLoader />
      </div>
    </div>

    <div className="border border-slate-200 rounded-lg mt-8 p-4 overflow-hidden">
      <HeaderTableLoader />
      <div className="py-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <RowPendientesLoader key={i} />
        ))}
      </div>
    </div>
    <div className="flex justify-end gap-2 py-2 w-full">
      <ButtonIconLoader />
      <ButtonIconLoader />
    </div>
  </div>
);

export default PendientesLoader;
