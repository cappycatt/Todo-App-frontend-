import ReusableForm from "../components/ReusableForm";
import { SignupConfig } from "../config/formConfig";
import { signupSchema } from "../config/authSchema";
import ReusableInput from "../components/ReusableInput";
import { AuthContext } from "../context/AuthContext";
import React from "react";

function Signup() {
  const { handleCreateUser } = React.useContext(AuthContext);

  const onSubmit = (data) => {
    const { email, password, name } = data;
    handleCreateUser(email, password, name);
  };

  return (
    <ReusableForm title="Sign up" onSubmit={onSubmit} schema={signupSchema}>
      {({ register, errors, watch }) => {
        const passwordValue = watch("password");
        const hasUpperCase = passwordValue && /[A-Z]/.test(passwordValue);
        const hasLowerCase = passwordValue && /[a-z]/.test(passwordValue);
        const minLength = passwordValue && passwordValue.length >= 8;
        const hasNumber = passwordValue && /[0-9]/.test(passwordValue);
        const hasSpecialChar =
          passwordValue &&
          /[!@#$%^&*()_+\-=\[\]{}\|;:'",.<>?]/.test(passwordValue);

        return (
          <div>
            {SignupConfig.map((field) => {
              return (
                <div key={field.name}>
                  <label  htmlFor={field.htmlFor}>
                    {field.label}
                  </label>
                  <ReusableInput
                    {...register(field.name)}
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    id={field.id}
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm ml-2">
                      {errors[field.name].message}
                    </p>
                  )}
                </div>
              );
            })}

            {hasUpperCase ? <span> &#10003;</span> : <span> &#10007;</span>}
            <span
              className={`${hasUpperCase ? "text-green-500" : "text-gray-600"}`}
            >
              At least one uppercase letter
            </span>
            <br />
            {hasLowerCase ? <span> &#10003;</span> : <span> &#10007;</span>}
            <span
              className={`${hasLowerCase ? "text-green-500" : "text-gray-600"}`}
            >
              At least one lowercase letter
            </span>
            <br />
            {hasSpecialChar ? <span> &#10003;</span> : <span> &#10007;</span>}
            <span
              className={`${hasSpecialChar ? "text-green-500" : "text-gray-600"}`}
            >
              At least one special character
            </span>
            <br />
            {hasNumber ? <span> &#10003;</span> : <span> &#10007;</span>}
            <span
              className={`${hasNumber ? "text-green-500" : "text-gray-600"}`}
            >
              At least one number
            </span>
            <br />
            {minLength ? <span> &#10003;</span> : <span> &#10007;</span>}
            <span
              className={`${minLength ? "text-green-500" : "text-gray-600"}`}
            >
              At least 8 characters
            </span>
          </div>
        );
      }}
    </ReusableForm>
  );
}

export default Signup;
