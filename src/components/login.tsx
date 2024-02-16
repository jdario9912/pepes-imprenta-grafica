import { Button } from "@nextui-org/react";
import Link from "next/link";

const Login = () => {

  return (
    <Button
      as={Link}
      color="primary"
      href='/login'
      variant="flat"
    >
      Login
    </Button>
  );
};

export default Login;
