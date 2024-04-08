import { Skeleton } from "@nextui-org/react";
import ButtonIconLoader from "./button-icon";

const PdfLoader = () => (
  <div>
    <Skeleton className="h-20 w-full" />
    <div className="container mt-2">
      <Skeleton className="w-[630px] h-[1000px] mx-auto" />
    </div>
    <div className="absolute right-10 bottom-10">
      <ButtonIconLoader />
    </div>
  </div>
);

export default PdfLoader;
