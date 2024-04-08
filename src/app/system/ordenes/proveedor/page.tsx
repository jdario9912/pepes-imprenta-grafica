import { Suspense } from "react";
import TablaComponent from "./components/tabla-component";
import { Metadata } from "next";
import ProveedorLoader from "@/app/components/loaders/proveedor";

export const metadata: Metadata = {
  title: "Ordenes Enviadas a Proveedor",
};

const AProveedor = () => (
  <div className="p-4">
    <Suspense fallback={<ProveedorLoader />}>
      <TablaComponent />
    </Suspense>
  </div>
);

export default AProveedor;
