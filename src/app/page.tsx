import LogoYNombre from "@/components/logo-nombre";

import Link from "next/link";
import Login from "@/components/btn-login";
import { getServerSession } from "next-auth";
import Session from "@/components/session";
import Logout from "@/components/btn-logout";
import Logo from "@/components/logo";
import NavBar from "./components/navbar";

export default async function Home() {
  return (
    <main>
      <NavBar />
      <section className="h-(calc(100vh-3rem))">
        <LogoYNombre className="container mx-auto mt-36 w-4/6" />
      </section>
    </main>
  );
}
