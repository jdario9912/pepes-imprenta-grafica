import Logout from "@/components/btn-logout";
import Link from "next/link";

export default function SystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="bg-zinc-300">
        <nav>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/system/ordenes/pendientes">Ordenes pendientes</Link>
            </li>
            <li>
              <Link href="/system/ordenes/a-proveedor">A proveedor</Link>
            </li>
            <li>
              <Link href="/system/clientes">Clientes</Link>
            </li>
            <li>
              <Link href="/system/clientes/nuevo">Nuevo cliente</Link>
            </li>
            <Logout />
          </ul>
        </nav>
      </aside>
      {children}
    </div>
  );
}
