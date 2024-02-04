import { Radio, cn } from "@nextui-org/react";

const RadioCustom = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) => {
  return (
    <Radio
      value={value}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover: bg-content2 items-center justify-between",
          "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 border-2 border-transparent",
          "data-[select=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

export default RadioCustom;
