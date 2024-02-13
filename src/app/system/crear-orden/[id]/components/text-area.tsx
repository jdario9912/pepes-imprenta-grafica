import { Textarea } from "@nextui-org/react";

const TextArea = ({ label, name }: { label: string; name: string }) => (
  <>
    <Textarea label={label} name={name} />
  </>
);

export default TextArea;
