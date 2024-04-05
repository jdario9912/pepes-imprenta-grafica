import Image from "next/image";
import logoYNombre from "@/img/logo-nombre.webp";

const LogoYNombre = ({className}: {className: string | undefined}) => (
  <div className={className}>
    <Image
      src={logoYNombre}
      alt="logo y nombre del negocio"
      className="h-full"
    />
  </div>
);

export default LogoYNombre;
