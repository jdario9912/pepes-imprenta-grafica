import loginIcon from "@/img/login.svg";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="w-1/2 h-screen bg-slate-950 shadow-lg shadow-gray-500 hidden md:flex md:items-center md:justify-center">
        <div className="max-w-lg">
          <Image src={loginIcon} alt="logo login" className="w-full" priority={false} />
        </div>
      </div>
      <div className="w-full md:w-1/2">{children}</div>
    </div>
  );
};

export default Layout;
