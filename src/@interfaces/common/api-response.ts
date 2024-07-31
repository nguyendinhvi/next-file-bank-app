import { User } from "../model/user";

export interface ILoginResponse {
  user: User;
  token: string;
}
