import { obtenerCliente } from "@/libs/client/axios";
import FormCliente from "../../components/form-cliente";

const EditarCliente = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const cliente = await obtenerCliente(id);

  return (
    <>
      <h2>Editar cliente</h2>
      <FormCliente cliente={cliente} />
    </>
  );
};

export default EditarCliente;
