import Login from "@/components/btn-login";
import Logout from "@/components/btn-logout";
import Logo from "@/components/logo";
import Session from "@/components/session";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { getServerSession } from "next-auth";
import Link from "next/link";

const NavBar = async () => {
  const session = await getServerSession();

  return (
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
          {!session && <Login />}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
