import TablaClientes from "./components/tabla-clientes";
import { obtenerClientes } from "@/libs/client/axios";

const Clientes = async ({
  searchParams,
}: {
  searchParams?: { cliente: string };
}) => {
  const cliente = searchParams?.cliente || "";
  const clientes = await obtenerClientes();

  return (
    <div>
      <TablaClientes clientes={clientes} clienteQuery={cliente} />
    </div>
  );
};

export default Clientes;
