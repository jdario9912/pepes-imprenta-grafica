import LogoYNombre from "@/components/logo-nombre";
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
