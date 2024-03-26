"use client";

import Link from "next/link";
import { btnsNavAside } from "../libs/btns-nav-aside";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/react";

const NavAside = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {btnsNavAside.map(({ href, label, icono }) => (
          <li key={href}>
            <Button
              as={Link}
              href={href}
              className="w-full mt-1 whitespace-nowrap"
              variant={pathname === href ? "flat" : "light"}
              color="primary"
              startContent={icono}
            >
              <span className="w-full text-left">{label}</span>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavAside;
