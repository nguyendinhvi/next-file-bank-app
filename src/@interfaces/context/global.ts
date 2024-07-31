import { Dispatch, SetStateAction } from "react";
import { Common } from "../common/common";
import { User } from "../model/user";

export interface IGlobalContext {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}
