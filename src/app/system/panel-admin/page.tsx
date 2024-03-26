import { getServerSession } from "next-auth"
import NombrePagina from "../components/nombre-pagina"
import { EmpleadosModel } from "@/models/mysql/empleados";
import { redirect } from "next/navigation";

const PanelAdmin = async () => {
  const session = await getServerSession();

  const emailUser = session?.user?.email;

  const isAdmin = await EmpleadosModel.isAdmin(emailUser || "");

  if(!isAdmin) redirect("/system")
  
  return (
    <div className="p-4"><NombrePagina nombre="Panel admin" />
    
    </div>
  )
}

export default PanelAdmin