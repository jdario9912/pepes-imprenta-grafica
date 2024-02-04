import { Input } from "@nextui-org/react";

const InputNum = ({ label }: { label: string }) => (
  <>
    <Input type="num" label={label} />
  </>
);

export default InputNum;
