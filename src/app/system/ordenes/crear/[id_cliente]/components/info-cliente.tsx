import { obtenerCliente } from "@/libs/client/axios";
import Link from "next/link";

const InfoCliente = async ({ id }: { id: string }) => {
  const cliente = await obtenerCliente(id);
  const { nombre, telefono, email, observaciones } = cliente;

  return (
    <div className="flex flex-wrap w-full gap-2">
      <h1>
        Cliente:{" "}
        <Link href={`/system/clientes?cliente=${nombre}`} className="hover:underline">{nombre}</Link>
      </h1>
      <p> Teléfono: {telefono}</p>
      {email && <p>Correo: {email}</p>}
      {observaciones && <p>Observaciones: {observaciones}</p>}
    </div>
  );
};

export default InfoCliente;
