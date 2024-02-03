import TablaClientes from "./components/tabla-clientes";
import { obtenerClientes } from "@/libs/client/axios";

const Clientes = async () => {
  const clientes = await obtenerClientes();
  return (
    <div>
      <TablaClientes clientes={clientes} />
    </div>
  );
};

export default Clientes;
