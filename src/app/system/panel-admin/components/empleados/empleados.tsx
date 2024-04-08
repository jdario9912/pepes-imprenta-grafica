import { obtenerEmpleados } from "@/libs/server-actions/axios";
import TablaEmpleados from "./tabla-empleados";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import EmpleadosLoader from "@/app/components/loaders/empleados";

const Empleados = () => {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);
  const id_empleado = params.get("id-empleado");
  const revalidar = params.get("revalidar");

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

    replace(pathname);
  }, [id_empleado]);

  useEffect(() => {
    (async () => {
      const res = await obtenerEmpleados();
      setEmpleados(res);
      replace(pathname);
    })();
  }, [revalidar]);

  if (empleados.length == 0) return <EmpleadosLoader />;

  return <TablaEmpleados empleados={empleados} />;
};

export default Empleados;
