import TablaComponent from "./components/tabla-component";
import { Suspense } from "react";

const Clientes = async ({
  searchParams,
}: {
  searchParams?: { cliente: string };
}) => {
  const cliente = searchParams?.cliente || "";

  return (
    <div>
      <Suspense fallback={<div>Cargando tabla clientesssssssss....</div>}>
        <TablaComponent cliente={cliente} />
      </Suspense>
    </div>
  );
};

export default Clientes;
