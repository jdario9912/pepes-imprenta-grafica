import { obtenerClientes } from "@/libs/client/axios";
import TablaClientes from "./tabla-clientes";
import { getServerSession } from "next-auth";
import { EmpleadosModel } from "@/models/mysql/empleados";

const TablaComponent = async () => {
  const clientes = await obtenerClientes();
  const session = await getServerSession();

  const emailUser = session?.user?.email;

  const isAdmin = await EmpleadosModel.isAdmin(emailUser || "");

  return <TablaClientes clientes={clientes} userIsAdmin={isAdmin} />;
};

export default TablaComponent;
