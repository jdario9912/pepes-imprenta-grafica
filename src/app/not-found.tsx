import { Button } from "@nextui-org/react";
import Link from "next/link";

const HomeNotFound = () => (
  <div>
    <h2>not Found. 404!</h2>
    <p>La pagina no existe o fue borrada</p>
    <Button as={Link} href="/">
      Ir al inicio
    </Button>
  </div>
);

export default HomeNotFound;
