import { Suspense } from "react";
import TablaComponent from "./components/tabla-component";

const AProveedor = () => (
  <div>
    <h2>Ordenes a proveedor</h2>
    <Suspense fallback={<div>cargando tabla ordenes a proveedor...</div>}>
      <TablaComponent />
    </Suspense>
  </div>
);

export default AProveedor;
