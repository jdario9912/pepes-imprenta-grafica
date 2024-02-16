import FormLogin from "@/app/login/components/form-login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession();

  if (session) redirect("/system");
  
  return (
    <div>
      <h2>login</h2>
      <FormLogin />
    </div>
  );
};

export default Login;
