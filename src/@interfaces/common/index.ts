import { Nullable } from "@/@types";
import { Folder } from "../model/folder";

export interface ModalPayload {
  level?: number;
  folder: Nullable<Folder>;
  [key: string]: any;
}
