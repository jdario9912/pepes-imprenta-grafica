import { Metadata } from "next";
import TablaComponent from "./components/tabla-component";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Clientes",
};

const Clientes = async () => {
  return (
    <div>
      <Suspense fallback={<div>Cargando tabla clientesssssssss....</div>}>
        <TablaComponent />
      </Suspense>
    </div>
  );
};

export default Clientes;
