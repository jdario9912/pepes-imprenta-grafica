import InfoCliente from "./components/info-cliente";
import { Suspense } from "react";
import FormCrearOrdenComponent from "./components/form-crear-orden-component";

const CrearOrden = async ({ params }: { params: { id_cliente: string } }) => {
  const id = params.id_cliente;

  return (
    <div className="flex flex-col">
      <Suspense fallback={<div>Cargando cliente...</div>}>
        <InfoCliente id={id} />
      </Suspense>

      <Suspense fallback={<div>Cargando productos...</div>}>
        <FormCrearOrdenComponent />
      </Suspense>
    </div>
  );
};

export default CrearOrden;
