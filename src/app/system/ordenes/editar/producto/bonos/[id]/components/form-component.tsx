import { obtenerBonoFetch } from "@/libs/client/axios";
import Form from "./form";

const FormComponent = async ({ id }: { id: string }) => {
  const orden = await obtenerBonoFetch(id);

  return <Form orden={orden} />;
};

export default FormComponent;
