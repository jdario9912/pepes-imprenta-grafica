import Logout from "@/components/btn-logout";
import NavAside from "./components/nav-aside";

export default function SystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen max-h-screen">
      <aside className="bg-zinc-300">
        <div className="flex flex-col justify-between h-full">
          <NavAside />
          <Logout />
        </div>
      </aside>
      <div className="overflow-scroll min-w-full">{children}</div>
    </div>
  );
}
