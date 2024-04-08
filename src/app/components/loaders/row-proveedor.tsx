import ButtonLoader from "./button";
import TextLoader from "./text";

const RowProveedorLoader = () => (
  <div className="flex items-center justify-between p-1">
    <div className="flex gap-x-6">
      <TextLoader />
      <TextLoader />
      <TextLoader />
      <TextLoader />
      <TextLoader />
    </div>
    <div className="flex gap-x-2">
      <ButtonLoader />
      <ButtonLoader />
      <ButtonLoader />
    </div>
  </div>
);

export default RowProveedorLoader;
