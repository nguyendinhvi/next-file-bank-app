import { Folder } from "@/@interfaces/model/folder";
import { Nullable } from "@/@types";
import { create } from "zustand";

interface PropsState {
  folderDetailProps: Nullable<Folder>;
  setFolderDetailProps: (val: Nullable<Folder>) => void;
}

export const usePropsStore = create<PropsState>((set) => ({
  folderDetailProps: undefined,
  setFolderDetailProps: (folderDetail: Nullable<Folder>) =>
    set((state) => ({ ...state, folderDetailProps: folderDetail })),
}));
