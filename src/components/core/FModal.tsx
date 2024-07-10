import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { sleep } from "@/utils/helper";
// import { twMerge } from "tailwind-merge";
// import { ModalFuncProps, Modal } from "antd";
// import { ExclamationCircleFilled } from "@ant-design/icons";
// import Icon from "../v-icons";

// const { confirm } = Modal;

interface IProps {
  isVisible?: any;
  title?: any;
  onCancel?: any;
  onConfirm?: any;
  cancelLabel?: any;
  confirmLabel?: any;
  loading?: any;
  centered?: any;
  fullscreen?: any;
  showImage?: any;
  children?: any;
  disableConfirm?: boolean;
  element?: any;
  onDelete?: any;
  deleteLabel?: any;
  showFooter?: boolean;
  showButtonClose?: boolean;
  [key: string]: any;
}

const FModal = ({
  isVisible = false,
  title,
  onCancel,
  disableConfirm,
  onConfirm,
  cancelLabel,
  confirmLabel,
  loading = false,
  centered = false,
  fullscreen = false,
  showImage = false,
  element,
  onDelete,
  deleteLabel,
  showFooter = false,
  showButtonClose = false,
  className = "",
  classNameBody = "",
  size = "md",
  children,
}: IProps) => {
  console.log("isVisible :", isVisible);

  const cancelButtonRef = useRef(null);

  const [isRender, setIsRender] = useState<boolean>(false);

  useEffect(() => {
    sleep(1000).then(() => setIsRender(true));
  }, []);

  return (
    <>
      {isRender && (
        <Transition.Root show={isVisible} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-[10001]"
            initialFocus={cancelButtonRef}
            onClose={() => onCancel && onCancel()}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-[#00000085] transition-opacity opacity-100" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-2 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel
                    id="modal-panel"
                    className={`relative shadow-lg transform overflow-hidden rounded-md bg-white text-left transition-all w-full max-w-lg p-2 ${className} ${
                      fullscreen ? "max-w-[100%] h-screen !rounded-none" : ""
                    }`}
                  >
                    <div className="h-full">
                      <div className="text-center sm:mt-0 sm:text-left">
                        {/* header */}
                        {title && (
                          <div
                            id="modal-header"
                            className="border-b-[1px] border-gray-300 flex-center py-3 relative mx-2"
                          >
                            <Dialog.Title
                              as="h3"
                              className="text-base text-center font-semibold leading-6"
                            >
                              {title}
                              {onCancel && showButtonClose && (
                                <button
                                  className="absolute right-0 top-1/2 -translate-y-1/2"
                                  onClick={onCancel}
                                >
                                  {/* <Icon
                                name="react_icons_IoClose"
                                reactIconsProps={{ size: 20 }}
                              /> */}
                                </button>
                              )}
                            </Dialog.Title>
                          </div>
                        )}

                        {/* body */}
                        <div className={"overflow-auto"}>
                          <div className={classNameBody}>{children}</div>
                        </div>
                      </div>
                    </div>
                    {showFooter && (
                      <div className="flex justify-end gap-2 mx-2 pb-2 pt-4 border-t-[1px] border-gray-300 ">
                        {onCancel && (
                          <button
                            type="button"
                            className="w-[120px] inline-flex justify-center rounded-md bg-white px-8 py-2 text-sm shadow-sm text-gray-900 font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-3 sm:mt-0"
                            onClick={onCancel}
                            disabled={loading}
                          >
                            {cancelLabel || "Cancel"}
                          </button>
                        )}
                        {onDelete && (
                          <button
                            type="button"
                            className="w-[120px] justify-center rounded-md bg-[#D13145] py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600"
                            onClick={onDelete}
                          >
                            {deleteLabel || "Delete"}
                          </button>
                        )}
                        {onConfirm && (
                          <button
                            type="button"
                            className="w-[120px] justify-center rounded-md bg-blue-500 hover:bg-blue-600 py-2 text-sm font-semibold text-white shadow-sm"
                            onClick={onConfirm}
                            disabled={disableConfirm}
                          >
                            {confirmLabel || "Confirm"}
                          </button>
                        )}
                      </div>
                    )}

                    {element && element}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
};

export default FModal;

// export const confirmationModal = (props: ModalFuncProps) =>
//   confirm({
//     ...props,
//     icon: <ExclamationCircleFilled />,
//   });
