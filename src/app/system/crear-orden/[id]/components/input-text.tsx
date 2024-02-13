import { Input } from "@nextui-org/react";

const InputText = ({ label, name }: { label: string; name: string }) => (
  <>
    <Input type="text" label={label} name={name} />
  </>
);

export default InputText;
