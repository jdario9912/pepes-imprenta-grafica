import LogoYNombre from "@/components/logo-nombre";
import NavBar from "./components/navbar";

export default async function Home() {
  return (
    <main className="bg-slate-100 h-screen">
      <NavBar />
      <section className="h-(calc(100vh-3rem))">
        <LogoYNombre className="container mx-auto mt-36 w-4/6" />
      </section>
    </main>
  );
}
