import { obtenerCliente } from "@/libs/client/axios";

const InfoCliente = async ({ id }: { id: string }) => {
  const cliente = await obtenerCliente(id);
  const { nombre, telefono, email, observaciones } = cliente;

  return (
    <div>
      <h1>{nombre}</h1>
      <p>{telefono}</p>
      <p>{email}</p>
      {observaciones && <p>{observaciones}</p>}
    </div>
  );
};

export default InfoCliente;
