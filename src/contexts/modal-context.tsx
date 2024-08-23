import FModal, { IFModalProps } from "@/components/core/FModal";
import ModalCreateFolder from "@/components/modal/ModalCreateFolder";
import ModalDropFile from "@/components/modal/ModalDropFile";
import { EModal } from "@/enums";
import { Nullable, TModalName } from "@/@types";
import { sleep } from "@/utils/helper";

// type IFuncState = (value: any) => void;
type IFuncState<T> = (value: T | ((prev: T) => void)) => void;
const dfFunc = () => {};

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { ModalPayload } from "@/@interfaces/common";

interface IModalContext {
  modal: TModalName;
  payload: Nullable<ModalPayload>;
  openModal: (
    modalName: TModalName,
    props?: IFModalProps,
    payloadArg?: ModalPayload
  ) => void;
  closeModal: () => void;
}

const ModalContext = createContext<IModalContext>({
  modal: "none",
  closeModal: dfFunc,
  openModal: dfFunc,
  payload: null,
});

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error(
      "useWeb3Context() can only be used inside of <Web3ContextProvider />, " +
        "please declare it at a higher level."
    );
  }
  return modalContext;
};

export const ModalContextProvider = ({ children }: any) => {
  const [modal, setModal] = useState<TModalName>("none");
  const [modalProps, setModalProps] = useState<IFModalProps>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [payload, setPayload] = useState<ModalPayload>();

  const Modal: Record<TModalName, ReactNode> = {
    upload_file: <ModalDropFile />,
    create_folder: <ModalCreateFolder />,
    none: <></>,
  };

  const closeModal = useCallback(() => {
    setModal("none");
    setIsVisible(false);
  }, []);

  const openModal = <Payload,>(
    modalName: TModalName,
    props?: IFModalProps,
    payloadArg?: Payload
  ) => {
    setIsVisible(true);
    setModal(modalName);
    setModalProps(props);
    setPayload(payloadArg as any);
  };

  const modalProvider: IModalContext = {
    modal,
    openModal,
    closeModal,
    payload,
  };

  return (
    <ModalContext.Provider value={modalProvider}>
      <FModal
        isVisible={isVisible}
        onCancel={() => setIsVisible(false)}
        {...modalProps}
      >
        {Modal[modal]}
      </FModal>
      {children}
    </ModalContext.Provider>
  );
};
