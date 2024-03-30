type Props = { label: string; children: JSX.Element };

const WraperInputLabel = ({ label, children }: Props) => {
  return (
    <label className="flex items-center gap-x-2">
      <p className="first-letter:capitalize text-xs">{label}</p>
      {children}
    </label>
  );
};

export default WraperInputLabel;
