import { Suspense } from "react";
import TablaComponent from "./components/tabla-component";

const OrdenesPendientes = () => (
  <div>
    <h2>Ordenes pendientes</h2>
    <Suspense fallback={<div>cargando tabla ordenes pendientes...</div>}>
      <TablaComponent />
    </Suspense>
  </div>
);

export default OrdenesPendientes;
