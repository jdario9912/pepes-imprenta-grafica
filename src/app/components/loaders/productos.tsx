import { Card, CardHeader } from "@nextui-org/react";
import ButtonLoader from "./button";

const ProductosLoader = () => (
  <Card className="w-full">
    <CardHeader className="flex flex-col gap-y-2">
      {Array.from({ length: 11 }).map((_, i) => (
        <ButtonLoader key={i} />
      ))}
    </CardHeader>
  </Card>
);

export default ProductosLoader;
