import { Skeleton } from "@nextui-org/react";

type Props = { full?: boolean };

const ButtonLoader = ({ full = false }: Props) => (
  <Skeleton className={`h-10 rounded-md ${full ? "w-full" : "w-20"}`} />
);

export default ButtonLoader;
