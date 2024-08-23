/* eslint-disable react-hooks/exhaustive-deps */
import { IFormDataFolderCreate } from "@/@interfaces/model/folder";
import React, { FC, useEffect, useState } from "react";
import FModal from "../core/FModal";
import { useModalContext } from "@/contexts/modal-context";
import FButton from "../core/FButton";
import { folderAPI } from "@/apis/folder";

interface IProps {}

const ModalCreateFolder: FC<IProps> = ({}) => {
  const { payload } = useModalContext();

  const [formData, setFormData] = useState<IFormDataFolderCreate>({
    level: 1,
    name: "",
  });
  console.log("formData :", formData);

  useEffect(() => {
    if (payload?.folder) {
      setFormData((prev) => ({
        ...prev,
        level: Number(payload?.folder?.level || 0) + 1,
        parent_id: payload?.folder?.id,
      }));
    }
  }, [payload?.folder]);

  const handleSubmit = async () => {
    try {
      if (formData) {
        const res = await folderAPI.create(formData);
        console.log("res :", res);
      }
    } catch (error) {}
  };

  return (
    <form
      className="p-2"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="mb-2">
        <label htmlFor="" className="block font-semibold text-gray-600">
          Name
        </label>
        <div className="relative">
          <input
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            value={formData?.name}
            className="py-2 px-4 outline-none bg-gray-100 rounded-md w-full"
            placeholder="Enter name..."
          />
        </div>
      </div>
      <div>
        <FButton text="Create" type="submit" />
      </div>
    </form>
  );
};

export default ModalCreateFolder;
