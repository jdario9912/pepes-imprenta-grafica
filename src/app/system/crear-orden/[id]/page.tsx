import { obtenerCliente } from "@/libs/client/axios";

const CrearOrden = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const cliente = await obtenerCliente(id);

  return (
    <div>
      <h1>{cliente.nombre}</h1>
      <p>{cliente.telefono}</p>
      <p>{cliente.email}</p>
      {cliente.observaciones && <p>{cliente.observaciones}</p>}
    </div>
  );
};

export default CrearOrden;
