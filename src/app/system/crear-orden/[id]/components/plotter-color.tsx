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
import { UseFormSetValue, UseFormWatch } from "react-hook-form";

const PlotterColor = ({
  setValue,
  error,
  watch,
}: {
  setValue: UseFormSetValue<Plotter>;
  error: boolean;
  watch: UseFormWatch<Plotter>;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen} color={error ? "danger" : "default"}>
        Color
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Elige el color del plotter</ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-10 gap-x-6">
                  {plotterColores.map((color) => (
                    <div
                      key={color.codigo}
                      onClick={() => {
                        setValue("color", color.codigo);
                        onClose;
                      }}
                      className="cursor-pointer"
                    >
                      <p>{color.codigo}</p>
                      <div
                        className="w-16 h-14"
                        style={{ background: color.color }}
                      />
                    </div>
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
      {watch().color !== undefined ? (
        <div
          className="w-16 h-14"
          style={{
            background: plotterColores.filter(
              ({ codigo }) => codigo !== watch().color
            )[0].color,
          }}
        />
      ) : (
        <div
          className="w-16 h-14"
          // style={{ background: color.color }}
        />
      )}
    </>
  );
};

export default PlotterColor;
