import { Card, CardBody, CardHeader } from "@nextui-org/react";
import ButtonLoader from "./button";
import NombrePaginaLoader from "./nombre-pagina";
import InputLoader from "./input";

const CrearClienteLoader = () => (
  <Card className="w-[572px]">
    <CardHeader>
      <NombrePaginaLoader />
    </CardHeader>
    <CardBody className="gap-y-3">
      <InputLoader />
      <InputLoader />
      <ButtonLoader full />
      <ButtonLoader full />
      <ButtonLoader />
    </CardBody>
  </Card>
);

export default CrearClienteLoader;
