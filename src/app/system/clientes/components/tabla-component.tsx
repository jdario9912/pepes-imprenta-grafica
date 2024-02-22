import { obtenerClientes } from "@/libs/client/axios";
import TablaClientes from "./tabla-clientes";

const TablaComponent = async ({ cliente }: { cliente: string }) => {
  const clientes = await obtenerClientes();

  return <TablaClientes clientes={clientes} clienteQuery={cliente} />;
};

export default TablaComponent;
