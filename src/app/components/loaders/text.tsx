import { Skeleton } from "@nextui-org/react";
type Width = "w-24" | "w-40" | "w-72";

type Props = {
  size?: "sm" | "md" | "lg";
};

const TextLoader = ({ size = "sm" }: Props) => {
  let width: Width = "w-40";

  if (size === "sm") width = "w-24";
  if (size === "md") width = "w-40";
  else if (size === "lg") width = "w-72";

  return <Skeleton className={`h-6 rounded-md ${width}`} />;
};

export default TextLoader;
