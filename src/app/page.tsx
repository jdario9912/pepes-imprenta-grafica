import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import BtnLogin from "@/components/btn-login";
import { getServerSession } from "next-auth";
import Logout from "@/components/btn-logout";
import Session from "@/components/session";
import PepesLogo from "@/components/logo-nombre";
import Logo from "@/components/logo";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <Logo className="w-10" />
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {/* <NavbarItem>
            <Link color="foreground" href="#">
            Productos
            </Link>
            </NavbarItem>
            <NavbarItem isActive>
            <Link href="#" aria-current="page">
            Contacto
            </Link>
            </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
            Nosotros
            </Link>
          </NavbarItem> */}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Session>
              <Button as={Link} href="/system">
                Sistema
              </Button>
              <Logout />
            </Session>
            {!session && <BtnLogin />}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <section className="container">
        <PepesLogo className="w-4/6 mx-auto mt-20" />
      </section>
    </main>
  );
}
