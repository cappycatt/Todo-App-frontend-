import React from "react";

function ReusableInput(props) {
  const { type, id, placeholder, name, label, labelFor, value, clearErrors, registerOnChange, ...restWithoutOnChange } = props;

  return ( 
    <div>
      <label className="font-bold" htmlFor={labelFor}>
        {label}
      </label>
      <input
        className="border border-gray-300 outline-none rounded-lg shadow-sm p-2 w-full m-2 overflow-scroll"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        /* onChange={onChange} */
        value={value}
        {...restWithoutOnChange}
      />
    </div>
  );
}

export default ReusableInput;
