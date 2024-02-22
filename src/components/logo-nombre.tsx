import Image from "next/image";
import logoYNombre from "@/img/logo-nombre.webp";

const LogoNombre = ({className}: {className?: string}) => (
  <div className={className ? className : ""}>
    <Image src={logoYNombre} alt="logo y nombre del negocio" />
  </div>
);

export default LogoNombre;
