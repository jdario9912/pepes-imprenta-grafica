import { Suspense } from "react";
import Empleados from "./empleados";

const TabEmpleados = () => (
  <Suspense fallback="cargando empleados...">
    <Empleados />
  </Suspense>
);

export default TabEmpleados;
