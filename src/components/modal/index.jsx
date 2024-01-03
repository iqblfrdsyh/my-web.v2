import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";

const ModalPopup = ({
  isOpen,
  onOpenChange,
  title,
  content,
  buttonTitleOK,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      size="md"
      placement="center"
      onOpenChange={onOpenChange}
      className="bg-[#222] mx-5"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-white">
              {title}
            </ModalHeader>
            <ModalBody className="text-white">{content}</ModalBody>
            <ModalFooter className="bg-[#222]">
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                {buttonTitleOK}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalPopup;
