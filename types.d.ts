export interface TextInputProps {
  id: string;
  name: string;
  type: string;
  required: boolean;
  disabled: boolean;
  placeholder: string;
}
export interface PasswordInputProps {
  id: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}