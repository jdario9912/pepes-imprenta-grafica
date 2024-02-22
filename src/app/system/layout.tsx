import Logout from "@/components/btn-logout";
import NavAsideSystem from "./components/nav-aside-system";

export default function SystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <aside className="bg-zinc-300">
        <div className="flex flex-col h-full justify-between">
          <NavAsideSystem />
          <Logout />
        </div>
      </aside>
      {children}
    </div>
  );
}
