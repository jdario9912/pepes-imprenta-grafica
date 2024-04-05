"use client";

import { buscarOrden } from "@/libs/client/axios";
import { errorToast } from "@/libs/client/toast";
import { Input } from "@nextui-org/react";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import type { OrdenEncontrada } from "@/types/orden";
import ModalBusqueda from "./modal-busqueda";

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
  const [ordenEncontrada, setOrdenEncontrada] = useState<OrdenEncontrada>();
  const [handleModal, setHandleModal] = useState<boolean>(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await buscarOrden(data.busqueda);

      setOrdenEncontrada(res);

      setHandleModal(true)

      reset();
    } catch (error) {
      setHandleModal(false)
      if (error instanceof AxiosError) errorToast(error.response?.data.mensaje);
    }
  });

  return (
    <section aria-label="busqueda">
      <ModalBusqueda
        ordenEncontrada={ordenEncontrada}
        handleModal={handleModal}
        setHandleModal={setHandleModal}
      />

      <form onSubmit={onSubmit}>
        <Input
          placeholder="123456789"
          label="Buscar orden"
          {...register("busqueda")}
          disabled={isSubmitting}
          endContent={
            isSubmitting && (
              <AiOutlineLoading3Quarters className="animate-spin" />
            )
          }
          variant="flat"
          color="primary"
        />
      </form>
    </section>
  );
};

export default Busqueda;
