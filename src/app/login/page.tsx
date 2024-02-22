import FormLogin from "@/app/login/components/form-login";
import BtnInicio from "@/components/btn-inicio";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession();

  if (session) redirect("/system");

  return (
    <div>
      <h2>login</h2>
      <BtnInicio />
      <FormLogin />
    </div>
  );
};

export default Login;
