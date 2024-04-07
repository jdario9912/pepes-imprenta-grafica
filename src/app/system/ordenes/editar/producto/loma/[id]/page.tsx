import { Metadata } from "next";
import FormComponent from "./components/form-component";

export const metadata: Metadata = {
  title: "Editar Orden: Loma",
};

const Editar = async ({ params }: { params: { id: string } }) => (
  <FormComponent id={params.id} />
);

export default Editar;
