type Props = { label: string; children: JSX.Element };

const WraperInputLabel = ({ label, children }: Props) => {
  return (
    <label className="flex items-center gap-x-2 bg-blue-100/70 p-2 rounded dark:bg-slate-700">
      <p className="text-xs w-24 text-slate-900 first-letter:capitalize">{label}</p>
      {children}
    </label>
  );
};

export default WraperInputLabel;
