import { Skeleton } from "@nextui-org/react";

type Width = "w-full" | "w-36";

type Props = { size?: "full" };

const NombrePaginaLoader = ({ size }: Props) => {
  let width: Width = "w-36";

  if (size) width = "w-full";

  return <Skeleton className={`h-14 rounded-md ${width}`} />;
};

export default NombrePaginaLoader;
