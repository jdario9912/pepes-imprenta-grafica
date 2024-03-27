import { obtenerEmpleados } from "@/libs/server-actions/axios";
import TablaEmpleados from "./tabla-empleados";
import { useEffect, useState } from "react";

const Empleados = () => {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);

  useEffect(() => {
    (async () => {
      const res = await obtenerEmpleados();
      setEmpleados(res);
    })();
  }, []);

  if (empleados.length == 0) return "cargando empleados...";

  return <TablaEmpleados empleados={empleados} />;
};

export default Empleados;
