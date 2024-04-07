import { Card, CardBody, CardFooter } from "@nextui-org/react";
import NombrePaginaLoader from "./nombre-pagina";
import ButtonLoader from "./button";
import InputLoader from "./input";

const EditarOrdenLoader = () => (
  <>
    <Card>
      <CardBody>
        <NombrePaginaLoader size="full" />
      </CardBody>
    </Card>

    <Card className="mt-4">
      <CardBody className="gap-y-2">
        <InputLoader size="full" />
        <InputLoader size="full" />
        <InputLoader />
        <InputLoader size="full" />
        <InputLoader size="full" />
        <InputLoader />
      </CardBody>
      <CardFooter>
        <ButtonLoader />
      </CardFooter>
    </Card>
  </>
);

export default EditarOrdenLoader;
