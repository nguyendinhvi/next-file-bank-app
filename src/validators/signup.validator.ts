import * as yup from "yup";

export const signUpSchema = yup
  .object()
  .shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email address"),
    password: yup.string().required("Password is required"),
    repeat_password: yup.string().required("Repeat password is required"),
  })
  .required();
