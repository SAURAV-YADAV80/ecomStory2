import React from 'react';
import { useField } from 'formik';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  placeholder?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, id, type = 'text', placeholder, required, ...rest }) => {
  console.log("Input", label, id, type, placeholder, required, ...rest as any);
  const [field, meta] = useField({ name: id });
  const { value, onChange, onBlur } = field;
  const { error, touched } = meta;

  const borderColor = touched 
    ? (error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500')
    : 'border-gray-300 focus:border-blue-500';

  return (
    <div className='flex flex-col gap-y-1'>
      <label 
        htmlFor={id}
        className='sr-only'
      >
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`border rounded-md p-3 text-gray-900 placeholder-gray-500 bg-red-50 ${borderColor} focus:outline-none focus:ring-1 ${touched ? 'focus:ring-red-200' : 'focus:ring-blue-200'}`}
        {...rest}
      />
      {touched && error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
}

export default Input;