import { obtenerOrdenesPendientes } from "@/libs/server-actions/axios";
import TablaPendientes from "./tabla-pendientes";

const TablaComponent = async () => {
  let pendientes = await obtenerOrdenesPendientes();

  return <TablaPendientes pendientes={pendientes} />;
};

export default TablaComponent;
