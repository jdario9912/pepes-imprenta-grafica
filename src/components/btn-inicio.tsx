import { Button } from "@nextui-org/react";
import Link from "next/link";

const BtnInicio = () => (
  <Button as={Link} href="/">
    Inicio
  </Button>
);

export default BtnInicio;
