"use client";

import { Button } from "@nextui-org/react";
import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ reset }: ErrorProps) => {

  return (
    <div>
      Algo salio mal en panel admin.
      <Button onClick={() => reset()}>reset</Button>
    </div>
  );
};

export default Error;
