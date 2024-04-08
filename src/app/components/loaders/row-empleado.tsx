import { Skeleton } from "@nextui-org/react";
import ButtonLoader from "./button";

const RowEmpleadoLoader = () => (
  <div className="p-2 flex justify-between items-center">
    <div className="w-60 flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg" />
      <Skeleton className="h-3 w-4/5 rounded-lg" />
    </div>

    <div className="flex items-center gap-2">
      <ButtonLoader />
      <ButtonLoader />
    </div>
  </div>
);

export default RowEmpleadoLoader;
