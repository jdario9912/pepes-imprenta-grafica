import AccionesTablaClientes from "@/components/acciones-tabla-clientes";
import { obtenerClientes } from "@/libs/client/axios";

const Clientes = async () => {
  const clientes = await obtenerClientes();

  return (
    <div>
      {clientes.map((cliente) => {
        const { id, nombre, telefono } = cliente;
        return (
          <div key={id}>
            <h2>{nombre}</h2>
            <p>{telefono}</p>
            <AccionesTablaClientes
              url={`/system/crear-orden/${id}`}
              cliente={cliente}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Clientes;
