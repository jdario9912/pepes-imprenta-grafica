import { obtenerCliente } from "@/libs/client/axios";
import InfoCliente from "./components/info-cliente";
import FormCrearOrden from "./components/form-crear-orden";
import { Suspense } from "react";

const CrearOrden = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const cliente = await obtenerCliente(id);

  return (
    <div className="flex flex-col">
      <Suspense key={id} fallback={<div>cargando cliente...</div>}>
        <InfoCliente cliente={cliente} />
      </Suspense>

      <FormCrearOrden />
    </div>
  );
};

export default CrearOrden;
