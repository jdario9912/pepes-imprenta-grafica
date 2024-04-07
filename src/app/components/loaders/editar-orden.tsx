import { Card, CardBody, CardFooter } from "@nextui-org/react";
import NombrePaginaLoader from "./nombre-pagina";
import ButtonLoader from "./button";
import InputLoader from "./input";

const EditarOrdenLoader = () => (
  <>
    <Card>
      <CardBody>
        <NombrePaginaLoader full />
      </CardBody>
    </Card>

    <Card className="mt-4">
      <CardBody className="gap-y-2">
        <InputLoader full />
        <InputLoader full />
        <InputLoader />
        <InputLoader full />
        <InputLoader full />
        <InputLoader />
      </CardBody>
      <CardFooter>
        <ButtonLoader />
      </CardFooter>
    </Card>
  </>
);

export default EditarOrdenLoader;
