import { obtenerEmpleados } from "@/libs/server-actions/axios";
import TablaEmpleados from "./tabla-empleados";

const Empleados = async () => {
  const empleados = await obtenerEmpleados();

  return <TablaEmpleados empleados={empleados} />;
};

export default Empleados;
