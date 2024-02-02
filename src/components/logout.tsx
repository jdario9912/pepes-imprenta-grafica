"use client";

import { borrarToken } from "@/libs/client/localstorage";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Logout() {
  const router = useRouter();
  const handleClick = () => {
    borrarToken()
    router.push("/");
  };
  
  return <Button onClick={handleClick}>Cerrar sesion</Button>;
}
