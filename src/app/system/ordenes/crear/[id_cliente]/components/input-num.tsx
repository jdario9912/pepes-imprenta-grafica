import { Input } from "@nextui-org/react";

const InputNum = ({ label, name }: { label: string; name: string }) => (
  <>
    <Input type="num" label={label} name={name} />
  </>
);

export default InputNum;
