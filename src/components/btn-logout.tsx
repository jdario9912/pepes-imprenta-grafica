"use client";

import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";

export default function Logout() {
  const handleClick = () => {
    signOut();
  };

  return (
    <Button onClick={handleClick} variant="flat" color="primary">
      Cerrar sesion
    </Button>
  );
}
