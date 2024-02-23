import { Suspense } from "react";
import TablaComponent from "./components/tabla-component";

const OrdenesPendientes = () => (
  <div>
    <Suspense fallback={<div>cargando tabla ordenes pendientes...</div>}>
      <TablaComponent />
    </Suspense>
  </div>
);

export default OrdenesPendientes;
