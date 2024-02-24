import FormComponent from "./components/form-component";
import { Suspense } from "react";

const Editar = async ({ params }: { params: { id: string } }) => {
  return (
    <Suspense fallback={<div>cargando formulario editar producto...</div>}>
      <FormComponent id={params.id} />
    </Suspense>
  );
};

export default Editar;
