import Session from "@/components/session";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const HomeNotFound = async () => (
  <div>
    <h2>not Found. 404!</h2>
    <p>La pagina no existe o fue borrada!</p>
    <Button as={Link} href="/">
      Inicio
    </Button>
    <Session>
      <Button as={Link} href="/system">
        Sistema
      </Button>
    </Session>
  </div>
);

export default HomeNotFound;
