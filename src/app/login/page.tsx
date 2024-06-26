import FormLogin from "@/app/login/components/form-login";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import NombrePagina from "../system/components/nombre-pagina";
import { Metadata } from "next";
import { iconos } from "@/components/icons";

export const metadata: Metadata = {
  title: "Login",
};

const Login = async () => {
  const session = await getServerSession();

  if (session) redirect("/system/ordenes/pendientes");

  return (
    <div className="p-4 h-screen flex items-center">
      <Card className="w-full mx-auto md:w-4/5">
        <CardHeader className="flex items-center justify-between">
          <NombrePagina nombre="Login" />
          <Button
            as={Link}
            href="/"
            startContent={iconos.home}
            variant="bordered"
            color="primary"
          >
            Inicio
          </Button>
        </CardHeader>
        <FormLogin />
      </Card>
    </div>
  );
};

export default Login;
