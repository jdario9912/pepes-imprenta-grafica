const InfoCliente = ({ cliente }: { cliente: Cliente }) => {
  const { nombre, telefono, email, observaciones } = cliente;
  return (
    <div>
      <h1>{nombre}</h1>
      <p>{telefono}</p>
      <p>{email}</p>
      {observaciones && <p>{observaciones}</p>}
    </div>
  );
};

export default InfoCliente;
