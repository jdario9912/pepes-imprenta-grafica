import InfoCliente from "./components/info-cliente";
import { Suspense } from "react";
import FormCrearOrdenComponent from "./components/form-crear-orden-component";
import { Metadata } from "next";
import ProductosLoader from "@/app/components/loaders/productos";
import InfoClienteLoader from "@/app/components/loaders/cliente";

export const metadata: Metadata = {
  title: "Crear Orden",
};

const CrearOrden = async ({ params }: { params: { id_cliente: string } }) => {
  const id = params.id_cliente;

  return (
    <div className="flex gap-3 p-4">
      <Suspense fallback={<InfoClienteLoader />}>
        <InfoCliente id={id} />
      </Suspense>

      <Suspense fallback={<ProductosLoader />}>
        <FormCrearOrdenComponent />
      </Suspense>
    </div>
  );
};

export default CrearOrden;
