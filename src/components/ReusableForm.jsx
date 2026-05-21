import React from "react";
import Btn from "../buttons/Btn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function ReusableForm({ children, onSubmit, title, schema }) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <div className="font-bold text-4xl p-4 text-emerald-800">{title}</div>
      <form
        onSubmit={handleSubmit(onSubmit, (err) => console.log(err))}
        className="rounded-lg p-8 w-90 h-fit shadow-xl "
      >
        {children({ register, errors, watch })}

        <div className="flex justify-center gap-x-4">
          <button
            type="submit"
            className="bg-emerald-500 h-10 p-2 w-25 text-white rounded mt-2 hover:bg-emerald-600 shadow-sm hover:shadow-lg"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReusableForm;
