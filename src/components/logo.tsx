import Image from "next/image";
import logoYNombre from "@/img/logo-nombre.png";

const PepesLogo = () => (
  <div>
    <Image src={logoYNombre} alt="logo y nombre del negocio" />
  </div>
);

export default PepesLogo;
