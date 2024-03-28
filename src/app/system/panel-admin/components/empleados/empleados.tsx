import { obtenerEmpleados } from "@/libs/server-actions/axios";
import TablaEmpleados from "./tabla-empleados";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Empleados = () => {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);
  const id_empleado = params.get("id-empleado");

  useEffect(() => {
    (async () => {
      const res = await obtenerEmpleados();
      setEmpleados(res);
    })();
  }, []);

  useEffect(() => {
    setEmpleados(
      empleados.filter((empleado) => empleado.id !== Number(id_empleado))
    );
  }, [id_empleado]);

  if (empleados.length == 0) return "cargando empleados...";

  return <TablaEmpleados empleados={empleados} />;
};

export default Empleados;
