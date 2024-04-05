type PropsTextCenter = { children: React.ReactNode };
export const HeaderTextCenter = ({ children }: PropsTextCenter) => (
  <p className="text-center">{children}</p>
);

type PropsTextLeft = { children: React.ReactNode };
export const HeaderTextLeft = ({ children }: PropsTextLeft) => (
  <p className="text-left">{children}</p>
);
