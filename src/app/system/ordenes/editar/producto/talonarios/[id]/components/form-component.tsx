import { obtenerTalonarioFetch } from "@/libs/client/axios";
import Form from "./form";

const FormComponent = async ({ id }: { id: string }) => {
  const orden = await obtenerTalonarioFetch(id);

  return <Form orden={orden} />;
};

export default FormComponent;
