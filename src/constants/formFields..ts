import type { SignupFormData } from "@/types/forms";

export const SIGNUP_FORM_DEFAULT_VALUES = {
  name: "",
  emailOrPhone: "",
  password: "",
};

type FormRule = {
  required?: string;
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
};

export const SIGNUP_FORM_FIELDS: {
  name: keyof SignupFormData;
  label: string;
  rules?: FormRule;
  secureText?: boolean;
}[] = [
  {
    name: "name",
    label: "Name",
    rules: {
      required: "Name is required",
      minLength: { value: 2, message: "Name must be at least 2 characters" },
      maxLength: { value: 50, message: "Name must be at most 50 characters" },
    },
  },
  {
    name: "emailOrPhone",
    label: "Email or Phone Number",
    rules: {
      required: "Email or Phone Number is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$|^\+?[1-9]\d{1,14}$/,
        message: "Enter a valid email or phone number",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    secureText: true,
    rules: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
      maxLength: {
        value: 100,
        message: "Password must be at most 100 characters",
      },
    },
  },
];
