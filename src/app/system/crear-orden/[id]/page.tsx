import { obtenerCliente } from "@/libs/client/axios";
import BotonesProductos from "./components/botones-productos";
import FormProductos from "./components/form-producto";
import InfoCliente from "./components/info-cliente";
import WraperFormCrearOrden from "./components/wraper-form-crear-orden";

const CrearOrden = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const cliente = await obtenerCliente(id);

  return (
    <div className="flex flex-col">
      <InfoCliente cliente={cliente} />
        
      <WraperFormCrearOrden />
    </div>
  );
};

export default CrearOrden;
