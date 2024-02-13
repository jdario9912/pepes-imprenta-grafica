import { Button } from "@nextui-org/react";

const FormProducto = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}

    <Button type="submit">Crear orden</Button>
  </>
);

export default FormProducto;
