import { getServerSession } from "next-auth";
import FormCrearOrdenProvider from "./form-crear-orden-provider";

const FormCrearOrdenComponent = async () => {
  const session = await getServerSession();

  const empleado = session?.user?.name || "";

  return <FormCrearOrdenProvider atendido_por={empleado} />;
};

export default FormCrearOrdenComponent;
