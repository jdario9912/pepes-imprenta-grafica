import { plotterColores } from "@/types/const";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

const PlotterColor = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen}>Color</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Elige el color del plotter</ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-10 gap-x-6">
                  {plotterColores.map((color) => (
                    <div key={color.codigo} onClick={onClose} className="cursor-pointer">
                      <p>{color.codigo}</p>
                      <div className={`bg-[${color.color}] w-10 h-8`}></div>
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
    </>
  );
};

export default PlotterColor;
