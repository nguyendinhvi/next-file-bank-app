import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useModalContext } from "@/contexts/modal-context";
import { sleep } from "@/utils/helper";
import FileDropZone from "../widgets/FileDropZone";
import FModal from "../core/Modal";

interface IProps {
  onCancel?: Function;
  isOpen?: boolean;
}

const ModalDropFile = ({ onCancel = () => {}, isOpen = false }: IProps) => {
  const { closeModal } = useModalContext();

  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const handleCancel = () => {
    setOpen(false);
    if (onCancel) return onCancel;
    sleep(150).then(() => closeModal());
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return <FModal isVisible>abc</FModal>;
};

export default ModalDropFile;
