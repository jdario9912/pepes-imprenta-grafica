"use client";

import Link from "next/link";
import { btnsNavAside } from "../libs/btns-nav-aside";
import { usePathname } from "next/navigation";

const NavAside = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {btnsNavAside.map(({ href, label }) => (
          <li key={href} className={pathname === href ? "bg-blue-500" : ""}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavAside;
