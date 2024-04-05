import { Suspense } from "react";
import TablaComponent from "./components/tabla-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ordenes Pendientes",
};

const OrdenesPendientes = () => {
  return (
    <div className="p-4">
      <Suspense fallback={<div>cargando tabla ordenes pendientes...</div>}>
        <TablaComponent />
      </Suspense>
    </div>
  );
};

export default OrdenesPendientes;
