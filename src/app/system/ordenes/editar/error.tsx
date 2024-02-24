"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & {
    message?: string;
  };
  reset: () => void;
}) => {
  const router = useRouter();

  return (
    <div>
      {error.message.includes("404") && (
        <div>
          <p>La orden no existe</p>
          <Button onClick={() => router.back()}>atras</Button>
        </div>
      )}
      {error.message.includes("500") && (
        <div>
          <p>Algo salio mal</p>
          <Button onClick={() => reset()}>volver a intentar</Button>
          <Button onClick={() => router.back()}>atras</Button>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
