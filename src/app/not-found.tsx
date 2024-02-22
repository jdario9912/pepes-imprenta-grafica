import BtnInicio from "@/components/btn-inicio";
import Session from "@/components/session";
import { Button } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import Link from "next/link";

const HomeNotFound = async () => {
  const session = await getServerSession();
  return (
    <div>
      <h2>not Found. 404!</h2>
      <p>La pagina no existe o fue borrada</p>
      <BtnInicio />
      <Session>
        <Button as={Link} href="/system">
          Sistema
        </Button>
      </Session>
    </div>
  );
};

export default HomeNotFound;
