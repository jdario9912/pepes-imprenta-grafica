import PepesLogo from "@/components/logo";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import Login from "@/components/login";
import { getServerSession } from "next-auth";
import Logout from "@/components/logout";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <PepesLogo />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
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
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            {!!session && <Logout />}
            {!session && <Login />}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <h1>Home</h1>
    </main>
  );
}
