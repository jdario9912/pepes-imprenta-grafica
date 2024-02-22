import InfoCliente from "./components/info-cliente";
import FormCrearOrdenProvider from "./components/form-crear-orden";
import { Suspense } from "react";
import { getServerSession } from "next-auth";

const CrearOrden = async ({ params }: { params: { id_cliente: string } }) => {
  const id = params.id_cliente;

  const session = await getServerSession();

  const empleado = session?.user?.name || "";

  return (
    <div className="flex flex-col">
      <Suspense fallback={<div>Cargando cliente...</div>}>
        <InfoCliente id={id} />
      </Suspense>

      <FormCrearOrdenProvider atendido_por={empleado} />
    </div>
  );
};

export default CrearOrden;
