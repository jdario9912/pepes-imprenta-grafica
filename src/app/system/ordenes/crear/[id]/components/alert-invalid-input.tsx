const AlertInvalidInput = ({ texto }: { texto: string | undefined }) => (
  <span className="text-red-500 text-xs">{texto}</span>
);

export default AlertInvalidInput;
