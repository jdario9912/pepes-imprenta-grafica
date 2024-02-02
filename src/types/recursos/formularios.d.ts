interface FormLogin extends Pick<Empleado, "email" | "password"> {}

interface FormNuevoCliente extends Omit<Cliente, 'id'> {};
