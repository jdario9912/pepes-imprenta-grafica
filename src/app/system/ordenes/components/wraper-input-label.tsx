type Props = { label: string; children: JSX.Element };

const WraperInputLabel = ({ label, children }: Props) => {
  return (
    <label className="flex items-center gap-x-2 bg-blue-100/70 p-2 rounded dark:bg-slate-700">
      <p className="first-letter:capitalize text-xs w-24">{label}</p>
      {children}
    </label>
  );
};

export default WraperInputLabel;
