import type { TextInputProps } from "types";
import { Input } from "../ui/input";

const TextInput = ({id,name, type, placeholder, required, disabled}: TextInputProps) => {
  return (
    <Input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
};

export default TextInput;
