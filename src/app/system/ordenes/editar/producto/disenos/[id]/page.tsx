import { Metadata } from "next";
import FormComponent from "./components/form-component";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Editar Orden: Diseños",
};

const Editar = async ({ params }: { params: { id: string } }) => {
  return (
    <Suspense fallback={<div>cargando formulario editar producto...</div>}>
      <FormComponent id={params.id} />
    </Suspense>
  );
};

export default Editar;
