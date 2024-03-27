"use client";

import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function Logout() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    signOut();
  };

  return (
    <Button onClick={handleClick} isLoading={loading} variant="flat" color="primary" className="shadow-md">
      Cerrar sesion
    </Button>
  );
}
