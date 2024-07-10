import FModal from "@/components/core/FModal";
import ModalDropFile from "@/components/modal/ModalDropFile";
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

interface IModalContext {
  modal: TModalName;
  openModal: (modalName: TModalName) => void;
  closeModal: () => void;
}

const ModalContext = createContext<IModalContext>({
  modal: "none",
  closeModal: dfFunc,
  openModal: dfFunc,
});

const Modal: Record<TModalName, ReactNode> = {
  drop_file: <ModalDropFile />,
  none: <></>,
};

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

  const closeModal = useCallback(() => {
    setModal("none");
  }, []);

  const openModal = useCallback((modalName: TModalName) => {
    setModal(modalName);
  }, []);

  const modalVisible = modal !== "none";

  const modalProvider: IModalContext = {
    modal,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modalProvider}>
      {Modal[modal]}
      {children}
      {/* <FModal isVisible={modalVisible}>{Modal[modal]}</FModal> */}
    </ModalContext.Provider>
  );
};
