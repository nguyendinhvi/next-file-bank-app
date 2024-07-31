import { Common } from "../common/common";

export interface User extends Common {
  email: string;
  last_name: string;
  first_name: string;
}
