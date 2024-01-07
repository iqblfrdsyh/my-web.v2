import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import Swal from "sweetalert2";
import React from "react";

const ModalPopup = ({
  isOpen,
  onOpenChange,
  title,
  content,
  buttonTitleOK,
}) => {
  const handleOkClick = () => {
    Swal.fire({
      icon: "error",
      title: "Sorry",
      text: "Sorry CV is not available",
    });
  };
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
              <Button color="primary" onPress={handleOkClick}>
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
