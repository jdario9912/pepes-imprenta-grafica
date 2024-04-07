import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import ButtonLoader from "../components/loaders/button";
import InputLoader from "../components/loaders/input";
import NombrePaginaLoader from "../components/loaders/nombre-pagina";

const Loading = () => (
  <div className="p-4 h-screen flex items-center">
    <Card className="w-full mx-auto md:w-4/5">
      <CardHeader className="flex items-center justify-between">
        <NombrePaginaLoader />
        <ButtonLoader />
      </CardHeader>

      <CardBody className="gap-y-4">
        <InputLoader />
        <InputLoader />
      </CardBody>

      <CardFooter>
        <ButtonLoader />
      </CardFooter>
    </Card>
  </div>
);

export default Loading;
