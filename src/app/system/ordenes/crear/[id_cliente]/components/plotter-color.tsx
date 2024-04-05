import { plotterColores } from "@/types/const";
import type { Plotter } from "@/types/recursos/productos";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";

const PlotterColor = ({
  setValue,
  error,
  watch,
  color,
}: {
  setValue: UseFormSetValue<Plotter>;
  error: boolean;
  watch: UseFormWatch<Plotter>;
  color?: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [colorPlotter, setColorPlotter] = useState(color);

  return (
    <>
      <div className="flex items-center gap-2 border border-blue-300 rounded-md p-2">
        <Button onPress={onOpen} color={error ? "danger" : "primary"} variant="flat">
          Color
        </Button>

        {watch().color !== undefined ? (
          <div
            className="h-10 w-28 rounded-md"
            style={{
              background: colorPlotter,
            }}
          />
        ) : (
          <div className="w-16 h-14" />
        )}
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Elige el color del plotter</ModalHeader>
              <ModalBody>
                <div className="flex flex-wrap md:grid md:grid-cols-10 md:justify-evenly">
                  {plotterColores.map((color) => (
                    <button
                      key={color.codigo}
                      onClick={() => {
                        setValue("color", color.codigo);
                        setColorPlotter(color.color);
                        onClose();
                      }}
                      className="cursor-pointer"
                    >
                      <p>{color.codigo}</p>
                      <div
                        className="w-full h-14"
                        style={{ background: color.color }}
                      />
                    </button>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Cancelar</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PlotterColor;
