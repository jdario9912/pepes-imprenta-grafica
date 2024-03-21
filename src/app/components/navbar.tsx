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
    <Navbar shouldHideOnScroll className="bg-transparent">
      <NavbarBrand>
        <Logo className="w-10" />
      </NavbarBrand>

      <NavbarContent justify="end" className="gap-x-3">
        <Session>
          <NavbarItem>
            <Button
              as={Link}
              href="/system/ordenes/pendientes"
              color="primary"
              variant="solid"
            >
              Sistema
            </Button>
            {!session && <Login />}
          </NavbarItem>
          <NavbarItem>
            <Logout />
          </NavbarItem>
        </Session>

        {!session && (
          <NavbarItem>
            <Login />
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
