import { Skeleton } from "@nextui-org/react";
import React from "react";

type Width = "w-full" | "w-64";

type Props = { size?: "full" };

const InputLoader = ({ size }: Props) => {
  let width: Width = "w-64";

  if (size) width = "w-full";
  
  return <Skeleton className={`rounded-md h-18 ${width}`} />;
};

export default InputLoader;
