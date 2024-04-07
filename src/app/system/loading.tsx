import { Skeleton } from "@nextui-org/react";

const Loading = () => {
  return (
    <div>
      <Skeleton>
        <div className="h-24 rounded-lg bg-default-300" />
      </Skeleton>
    </div>
  );
};

export default Loading;
