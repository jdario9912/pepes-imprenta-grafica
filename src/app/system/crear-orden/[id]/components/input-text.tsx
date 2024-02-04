import { Input } from "@nextui-org/react";

const InputText = ({ label }: { label: string }) => (
  <>
    <Input type="text" label={label} />
  </>
);

export default InputText;
