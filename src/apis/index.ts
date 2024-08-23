import { authAPI } from "./auth";
import { folderAPI } from "./folder";
import { userAPI } from "./user";

export const API = {
  AUTH: authAPI,
  USER: userAPI,
  FOLDER: folderAPI,
};
