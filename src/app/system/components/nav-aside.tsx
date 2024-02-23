"use client";

import Link from "next/link";
import { btnsNavAside } from "../libs/btns-nav-aside";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavAside = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {btnsNavAside.map(({ href, label }) => (
          <Link href={href} key={href} className="whitespace-nowrap">
            <li
              className={classNames("p-2 hover:bg-blue-500/50", {
                "bg-blue-500": pathname === href,
              })}
            >
              {label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavAside;
