import { obtenerClientes } from "@/libs/client/axios";

const Clientes = async () => {
  const clientes = await obtenerClientes();

  return (
    <div>
      {clientes.map(({ id, nombre, telefono }) => (
        <div key={id}>
          <h2>{nombre}</h2>
          <p>{telefono}</p>
        </div>
      ))}
    </div>
  );
};

export default Clientes;
