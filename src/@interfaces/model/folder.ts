import { Common } from "../common/common";

export interface IFormDataFolderCreate {
  name: string;
  level: number;
  parent_id?: string;
}

export interface Folder extends Common {
  name: string;
  level: number;
  user_id: string;
  parent_id: string;
  children: Folder[];
}
