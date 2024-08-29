import { EResponseCodes } from "@/enums";

export type ApiResponse<T> = {
  code: "ok";
  success: boolean;
  data: T;
};

export type ApiErrorResponse = {
  code: EResponseCodes | string;
  success: boolean;
  status: number;
};
