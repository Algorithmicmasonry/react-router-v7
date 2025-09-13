import type { PasswordInputProps } from "types";
import { Input } from "../ui/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
const PasswordInput = ({
  id,
  name,
  placeholder = "Enter your password",
  required = false,
  disabled = false,
  className,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <Input
        id={id}
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`pr-10 ${className || ""}`}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        disabled={disabled}
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <FaEyeSlash className="h-5 w-5" />
        ) : (
          <FaEye className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
