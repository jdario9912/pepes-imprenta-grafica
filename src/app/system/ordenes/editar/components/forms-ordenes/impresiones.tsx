import { Impresiones } from '@/types/recursos/productos';
import { UseFormRegister, useFormContext } from 'react-hook-form';
import FormConnectOrdenes from '../form-connect-ordenes';

const ImpresionesForm = () => {
  const { formState, watch } = useFormContext<Impresiones>();
  const { errors } = formState;

  return (
    <FormConnectOrdenes>
      {({ register }: { register: UseFormRegister<Impresiones> }) => (
        <>
          
        </>
      )}
    </FormConnectOrdenes>
  );
}

export default ImpresionesForm