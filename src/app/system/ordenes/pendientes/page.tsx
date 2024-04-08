import { Suspense } from "react";
import TablaComponent from "./components/tabla-component";
import { Metadata } from "next";
import PendientesLoader from "@/app/components/loaders/pendientes";

export const metadata: Metadata = {
  title: "Ordenes Pendientes",
};

const OrdenesPendientes = () => {
  return (
    <div className="p-4">
      <Suspense fallback={<PendientesLoader />}>
        <TablaComponent />
      </Suspense>
    </div>
  );
};

export default OrdenesPendientes;
