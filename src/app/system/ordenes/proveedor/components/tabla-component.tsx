import { obtenerOrdenesAProveedor } from "@/libs/server-actions/axios";
import TablaAProveedor from "./tabla-a-proveedor";

const TablaComponent = async () => {
  const aProveedor = await obtenerOrdenesAProveedor();

  return <TablaAProveedor aProveedor={aProveedor} />;
};

export default TablaComponent;
