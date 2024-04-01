type PropsTextCenter = { texto: string };
export const HeaderTextCenter = ({ texto }: PropsTextCenter) => (
  <p className="text-center">{texto}</p>
);

type PropsTextLeft = { texto: string };
export const HeaderTextLeft = ({ texto }: PropsTextLeft) => (
  <p className="text-left">{texto}</p>
);
