"use client";

import { buscarOrden } from "@/libs/client/axios";
import { errorToast } from "@/libs/client/toast";
import { Input } from "@nextui-org/react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import type { OrdenEncontrada } from "@/types/orden";

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
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [ordenEncontrada, setOrdenEncontrada] = useState<OrdenEncontrada>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await buscarOrden(data.busqueda);

      setOrdenEncontrada(res);

      (() => onOpen())();

      reset();
    } catch (error) {
      if (error instanceof AxiosError) errorToast(error.response?.data.mensaje);
    }
  });

  const handleVerPdf = () => {
    router.push(
      `/system/pdf/producto/${ordenEncontrada?.producto}/${ordenEncontrada?.id}`
    );

    (() => onClose())();
  };

  return (
    <section aria-label="busqueda">
      {/* mover este modal a otro componente */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Orden</ModalHeader>
              <ModalBody>
                <p>{ordenEncontrada?.estado}</p>
                <p>{ordenEncontrada?.nombre}</p>
                <p>{ordenEncontrada?.producto}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={handleVerPdf}>
                  Ver pdf
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

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
        />
      </form>
    </section>
  );
};

export default Busqueda;
