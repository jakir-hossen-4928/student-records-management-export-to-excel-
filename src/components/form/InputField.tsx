import { Input } from "@/components/ui/input";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  type?: string;
  min?: string;
  max?: string;
  error?: string;
}

export const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  type = "text",
  min,
  max,
  error,
}: InputFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        {label} {required && "*"}
      </label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        className={error ? "border-red-500" : ""}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};