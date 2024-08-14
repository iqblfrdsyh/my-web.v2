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
  swalText,
}) => {
  const downloadFile = async (fileUrl) => {
    const response = await fetch(fileUrl, { method: "HEAD" });
    if (response.ok) {
      const a = document.createElement("a");
      a.href = fileUrl;
      a.download = "My-CV.pdf";
      a.click();
      window.location.reload();
    } else {
      Swal.fire({
        icon: "error",
        title: "Sorry",
        text: swalText,
      });
    }
  };

  const handleOkClick = () => {
    downloadFile("./assets/CV/M Iqbal Ferdiansyah - CV.pdf");
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
