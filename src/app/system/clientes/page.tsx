import { Metadata } from "next";
import TablaComponent from "./components/tabla-component";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Clientes",
};

const Clientes = async () => {
  return (
    <div className="p-4">
      <Suspense fallback={<div>Cargando tabla clientes...</div>}>
        <TablaComponent />
      </Suspense>
    </div>
  );
};

export default Clientes;
