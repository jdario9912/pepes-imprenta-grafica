import { EmpleadosModel } from "@/models/mysql/empleados";
import { User } from "@nextui-org/react";
import BtnSettingsAdmin from "./btn-settings-admin";

type UsuarioProps = {
  nombre: string;
  email: string;
};

const Usuario = async ({ email, nombre }: UsuarioProps) => {
  const admin = await EmpleadosModel.isAdmin(email || "");

  return (
    <div className="flex items-center gap-x-2">
      <User name={nombre} description={email} avatarProps={{
        src: "https://raw.githubusercontent.com/jdario9912/pepes/master/src/img/logo.png"
      }} />
      {admin && <BtnSettingsAdmin />}
    </div>
  );
};

export default Usuario;
