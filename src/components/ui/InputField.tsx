interface InputFieldProps {
  label?: string;
  placeholder: string;
  value: string;
  type?: string;
  large?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function InputField({
  label,
  placeholder,
  value,
  type = "text",
  large = false,
  onChange,
}: InputFieldProps) {
  const inputId = label ? label.toLowerCase().replace(/\s+/g, "-") : "input-field";

  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      {large ? (
        <textarea
          className={`bg-white py-2 px-3 border border-zinc-300 placeholder:text-zinc-500 text-zinc-900 shadow-xs rounded-lg focus:ring-[4px] focus:ring-zinc-400/15 focus:outline-none h-24 align-text-top`}
          placeholder={placeholder}
          value={value || ''}
          onChange={onChange}
        />
      ) : (
        <input
          className={`bg-white py-2 px-3 border border-zinc-300 placeholder:text-zinc-500 text-zinc-900 shadow-xs rounded-lg focus:ring-[4px] focus:ring-zinc-400/15 focus:outline-none`}
          type={type}
          placeholder={placeholder}
          value={value || ''}
          onChange={onChange}
        />
      )}

    </div>
  )
}