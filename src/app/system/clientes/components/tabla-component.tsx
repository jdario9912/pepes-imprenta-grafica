import { obtenerClientes } from "@/libs/client/axios";
import TablaClientes from "./tabla-clientes";

const TablaComponent = async () => {
  const clientes = await obtenerClientes();

  return <TablaClientes clientes={clientes} />;
};

export default TablaComponent;
