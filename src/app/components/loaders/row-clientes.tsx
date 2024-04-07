import ButtonLoader from "./button";
import ButtonIconLoader from "./button-icon";
import TextLoader from "./text";

const RowClientesLoader = () => (
  <div className="flex items-center justify-between p-1">
    <div className="flex gap-x-6">
      <TextLoader />
      <TextLoader />
    </div>
    <div className="flex gap-x-2">
      <ButtonLoader />
      <ButtonLoader />
      <ButtonLoader />
      <ButtonLoader />
      <ButtonIconLoader />
    </div>
  </div>
);

export default RowClientesLoader;
