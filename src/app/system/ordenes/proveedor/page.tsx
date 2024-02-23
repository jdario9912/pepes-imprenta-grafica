import { Suspense } from "react";
import TablaComponent from "./components/tabla-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ordenes Enviadas a Proveedor",
};

const AProveedor = () => (
  <div>
    <Suspense fallback={<div>cargando tabla ordenes a proveedor...</div>}>
      <TablaComponent />
    </Suspense>
  </div>
);

export default AProveedor;
