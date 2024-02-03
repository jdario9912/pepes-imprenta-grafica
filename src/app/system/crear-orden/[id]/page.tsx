import { obtenerCliente } from "@/libs/client/axios";
import { botonesProductos } from "@/services/client/botones-productos";
import { Button } from "@nextui-org/react";

const CrearOrden = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const cliente = await obtenerCliente(id);

  return (
    <>
      <div>
        <h1>{cliente.nombre}</h1>
        <p>{cliente.telefono}</p>
        <p>{cliente.email}</p>
        {cliente.observaciones && <p>{cliente.observaciones}</p>}
      </div>

      {/* crear un componente */}
      <div>
        {botonesProductos.map(({ nombre, icono }) => (
          <Button key={nombre}>
            {icono}
            {nombre}
          </Button>
        ))}
      </div>
    </>
  );
};

export default CrearOrden;
