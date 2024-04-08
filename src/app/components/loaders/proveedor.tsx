import { deflate } from "zlib";
import InputLoader from "./input";
import NombrePaginaLoader from "./nombre-pagina";
import ButtonLoader from "./button";
import HeaderTableLoader from "./header-table";
import ButtonIconLoader from "./button-icon";
import RowProveedorLoader from "./row-proveedor";

const ProveedorLoader = () => (
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
          <RowProveedorLoader key={i} />
        ))}
      </div>
    </div>
    <div className="flex justify-end gap-2 py-2 w-full">
      <ButtonIconLoader />
      <ButtonIconLoader />
    </div>
  </div>
);

export default ProveedorLoader;
