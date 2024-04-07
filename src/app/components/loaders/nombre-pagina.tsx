import { Skeleton } from "@nextui-org/react";

type Props = { full?: boolean };

const NombrePaginaLoader = ({ full = false }: Props) => (
  <Skeleton className={`h-14 rounded-md ${full ? "w-full" : "w-36"}`} />
);

export default NombrePaginaLoader;
