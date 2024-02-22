import LogoSvg from "@/img/logo-colores.svg";
import Image from "next/image";

const Logo = ({ className }: { className?: string }) => (
  <div className={className ? className : ""}>
    <Image src={LogoSvg} alt="logo con colores" />
  </div>
);

export default Logo;
