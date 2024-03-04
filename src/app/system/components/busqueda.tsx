"use client";

import { buscarOrden } from "@/libs/client/axios";
import { errorToast } from "@/libs/client/toast";
import { Input } from "@nextui-org/react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Busqueda = "orden";

const Busqueda = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      busqueda: "",
    },
  });
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await buscarOrden(data.busqueda);

      router.push(`/system/pdf/producto/${res.producto}/${res.id}`);

      reset();
    } catch (error) {
      if (error instanceof AxiosError) errorToast(error.response?.data.mensaje);
    }
  });

  return (
    <section aria-label="busqueda">
      <form onSubmit={onSubmit}>
        <Input
          placeholder="123456789"
          label="Buscar orden"
          {...register("busqueda")}
          disabled={isSubmitting}
          endContent={isSubmitting && <AiOutlineLoading3Quarters className="animate-spin" />}
        />
      </form>
    </section>
  );
};

export default Busqueda;
