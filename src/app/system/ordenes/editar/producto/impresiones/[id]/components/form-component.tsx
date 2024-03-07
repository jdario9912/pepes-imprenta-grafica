import { obtenerImpresionFetch } from "@/libs/client/axios";
import Form from "./form";

const FormComponent = async ({ id }: { id: string }) => {
  const orden = await obtenerImpresionFetch(id);

  return <Form orden={orden} />;
};

export default FormComponent;
