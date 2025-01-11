import React from "react";

function UserInputField({
  label,
  name,
  value,
  onChange,
  type,
  isEditing,
  required = false,
  disabled = false,
  className = "", 
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      {isEditing ? ( 
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`mt-1 p-2 block w-full rounded-md border-2 border-[#8bc5ec] ${
          disabled ? "bg-gray-200" : ""
        } ${className}`}
      />) :
      (
        <p className="text-[#939393] mt-1">{value || "N/A"}</p>
      )}
    </div>
  );
}

export default UserInputField;
