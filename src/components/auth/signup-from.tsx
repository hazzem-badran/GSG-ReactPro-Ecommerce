import React, { useState } from "react";
import Input from "../ui/forms/Input";
import Button from "../ui/buttons/Button";
import { SIGNUP_FORM_FIELDS } from "@/constants/formFields.";

function SignupForm() {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up:", { name, emailOrPhone, password });
  };

  const handleGoogleSignUp = () => {
    console.log("Sign up with Google");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        {SIGNUP_FORM_FIELDS.map((field) => (
          <Input
            key={field.name}
            type={field.secureText ? "password" : "text"}
            variant="underline"
            placeholder={field.label}
            value={
              field.name === "name"
                ? name
                : field.name === "emailOrPhone"
                ? emailOrPhone
                : password
            }
            onChange={(e) => {
              if (field.name === "name") setName(e.target.value);
              else if (field.name === "emailOrPhone")
                setEmailOrPhone(e.target.value);
              else setPassword(e.target.value);
            }}
          />
        ))}
      </div>

      {/* <Input
        type="text"
        variant="underline"
        placeholder="Name"
        value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-0 border-b border-text-1 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-900 placeholder:text-text-1"
        />
        <Input
          type="text"
          variant="underline"
          placeholder="Email or Phone Number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className="border-0 border-b border-text-1 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-900 placeholder:text-text-1"
        />
        <Input
          type="password"
          placeholder="Password"
          variant="underline"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
      {/* </div> */}

      <div className="space-y-4">
        <Button type="submit" variant="danger" size="lg" className="w-full">
          Create Account
        </Button>

        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center gap-2"
        >
          <img
            src="src/assets/icons/google.png"
            alt="Google logo"
            width={20}
            height={20}
          />
          Sign up with Google
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
