import { getServerSession } from "next-auth";
import { EmpleadosModel } from "@/models/mysql/empleados";
import { redirect } from "next/navigation";
import NombrePagina from "../components/nombre-pagina";
import TabsAdmin from "./components/tabs-admin";

const PanelAdmin = async () => {
  const session = await getServerSession();

  const emailUser = session?.user?.email;

  const isAdmin = await EmpleadosModel.isAdmin(emailUser || "");

  if (!isAdmin) redirect("/system");

  return (
    <div className="p-4">
      <NombrePagina nombre="Panel admin" />

      <TabsAdmin />
    </div>
  );
};

export default PanelAdmin;
