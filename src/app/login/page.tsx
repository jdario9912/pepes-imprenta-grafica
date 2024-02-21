import FormLogin from "@/app/login/components/form-login";
import { Button } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession();

  if (session) redirect("/system");
  
  return (
    <div>
      <h2>login</h2>
      <FormLogin />
      <Button as={Link} href="/">Inicio</Button>
    </div>
  );
};

export default Login;
