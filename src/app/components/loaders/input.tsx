import { Skeleton } from "@nextui-org/react";

type Props = { full?: boolean };

const InputLoader = ({ full = false }: Props) => (
  <Skeleton className={`rounded-md h-18 ${full ? "w-full" : "w-64"}`} />
);

export default InputLoader;
