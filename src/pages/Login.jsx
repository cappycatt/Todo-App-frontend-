import { LoginConfig } from "../config/formConfig";
import ReusableInput from "../components/ReusableInput";
import ReusableForm from "../components/ReusableForm";
import { loginSchema } from "../config/authSchema";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function Login() {
  const { handleLogin } = useContext(AuthContext);
  const onSubmit = (data) => {
    const { email, password } = data;
    handleLogin(email, password);
  };
  
  return (
    <ReusableForm onSubmit={onSubmit} title="Login" schema={loginSchema}>
      {({ register, errors}) => {

        return (
          <>
            {LoginConfig.map((field) => {
              return (
                <div key={field.name}>
                  <label className="font-bold" htmlFor={field.htmlFor}>
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
            <p className="text-center p-2">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a></p>
          </>
        );
      }}
    </ReusableForm>
  );
}

export default Login;
