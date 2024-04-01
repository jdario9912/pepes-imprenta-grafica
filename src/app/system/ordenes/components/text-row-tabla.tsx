type Props = { children: React.ReactNode };
export const TextRowTabla = ({ children }: Props) => {
  return (
    <div className="text-left text-slate-800 dark:text-slate-300">{children}</div>
  );
};
