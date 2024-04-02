import classNames from "classnames";

type Props = { children: React.ReactNode; className?: string };

export const TextRowTabla = ({ children, className }: Props) => {
  return (
    <p
      className={classNames(
        "text-left text-slate-800 dark:text-slate-300 " + className
      )}
    >
      {children}
    </p>
  );
};
