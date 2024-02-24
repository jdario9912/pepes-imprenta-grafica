import FormLogin from "@/app/login/components/form-login";
import { Button } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import NombrePagina from "../system/components/nombre-pagina";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login"
}

const Login = async () => {
  const session = await getServerSession();

  if (session) redirect("/system/ordenes/pendientes");
  
  return (
    <div>
      <NombrePagina nombre="Login" />
      <Button as={Link} href="/">Inicio</Button>
      <FormLogin />
    </div>
  );
};

export default Login;
