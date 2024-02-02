"use client";

import { Button } from "@nextui-org/react";
import { useEffect } from "react";

const ClientesErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const handleClick = () => reset();

  return (
    <div>
      Ocurrio un error al cargar los clientes
      <Button onClick={handleClick}>Volver a cargar</Button>
    </div>
  );
};

export default ClientesErrorPage;
