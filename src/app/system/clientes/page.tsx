import { Metadata } from "next";
import TablaComponent from "./components/tabla-component";
import { Suspense } from "react";
import ClientesLoader from "@/app/components/loaders/clientes";

export const metadata: Metadata = {
  title: "Clientes",
};

const Clientes = () => {
  return (
    <div className="p-4">
      <Suspense fallback={<ClientesLoader />}>
        <TablaComponent />
      </Suspense>
    </div>
  );
};

export default Clientes;
