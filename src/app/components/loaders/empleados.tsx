import ButtonLoader from "./button";
import HeaderTableLoader from "./header-table";
import RowEmpleadoLoader from "./row-empleado";

const EmpleadosLoader = () => (
  <div className="p-4 border border-slate-200 rounded-lg overflow-hidden">
    <div className="flex items-center justify-end">
      <ButtonLoader />
    </div>

    <div className=" mt-8 p-4 overflow-hidden">
      <HeaderTableLoader />
      <div className="py-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <RowEmpleadoLoader key={i} />
        ))}
      </div>
    </div>
  </div>
);

export default EmpleadosLoader;
