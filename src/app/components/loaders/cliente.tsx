import { Card, CardBody } from "@nextui-org/react";
import TextLoader from "./text";

const InfoClienteLoader = () => (
  <div className="h-screen">
    <Card className="w-60 h-full">
      <CardBody className="gap-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-y-2">
            <TextLoader size="sm" />
            <TextLoader size="md" />
          </div>
        ))}
      </CardBody>
    </Card>
  </div>
);

export default InfoClienteLoader;
