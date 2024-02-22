import { obtenerOrdenesPendientes } from "@/libs/server-actions/axios";
import TablaPendientes from "./tabla-pendientes";

const TablaComponent = async () => {
  const pendientes = await obtenerOrdenesPendientes();

  return (
    <div>
      tabla ordenes pendientes
      {/* atendio
    creado
    producto
    cliente
    entregar(fecha y hora)
    acciones: ver pdf, editar, cambiar estado */}
      <TablaPendientes pendientes={pendientes} />
    </div>
  );
};

export default TablaComponent;
