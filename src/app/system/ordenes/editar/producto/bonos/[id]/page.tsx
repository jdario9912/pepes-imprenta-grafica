import { Metadata } from "next";
import { Suspense } from "react";
import FormComponent from "./components/form-component";

export const metadata: Metadata = {
  title: "Editar Orden: Bonos",
};

const Editar = async ({ params }: { params: { id: string } }) => {
  return (
    <Suspense fallback={<div>cargando formulario editar producto...</div>}>
      <FormComponent id={params.id} />
    </Suspense>
  );
};

export default Editar;
