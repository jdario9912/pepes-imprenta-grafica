import Image from "next/image";
import LogoSvg from "@/img/logo.svg";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <Image src={LogoSvg} alt="Logo Pepes" />
  </div>
);

export default Logo;
