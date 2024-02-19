import { obtenerCliente } from "@/libs/client/axios";
import InfoCliente from "./components/info-cliente";
import FormCrearOrdenProvider from "./components/form-crear-orden";
import { Suspense } from "react";
import { getServerSession } from "next-auth";

const CrearOrden = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const cliente = await obtenerCliente(id);

  const session = await getServerSession()

  const empleado = session?.user?.name || ""

  return (
    <div className="flex flex-col">
      <Suspense key={id} fallback={<div>cargando cliente...</div>}>
        <InfoCliente cliente={cliente} />
      </Suspense>

      <FormCrearOrdenProvider atendido_por={empleado} />
    </div>
  );
};

export default CrearOrden;
