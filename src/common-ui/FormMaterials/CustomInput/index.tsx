import { UseFormRegister, Path } from 'react-hook-form';
import React from 'react';
import './custom-input.css';

interface IPropsCustomInput {
  register: UseFormRegister<any>;
  label: string;
  name: Path<any>;
  required?: boolean;
  placeholder?: string;
  type?: 'text' | 'password' | 'number' | 'email' | 'tel' | 'url' | string,
  additionalComponent?: React.ReactNode,
  error?: boolean;
  className?: string;
}

interface IFieldLabelProps {
  name: string;
  label: string;
}

export const FieldLabel:React.FC<IFieldLabelProps> = ({name,label})=>{
  return <label htmlFor={name} className='inline-block mb-1.5 text-md font-light text-gray-700'>{label}</label>
}

const CustomInput: React.FC<IPropsCustomInput> = ({
                                                    className, register, label,
                                                    name, required, type = 'text', placeholder,
                                                    additionalComponent, error,
                                                  }: IPropsCustomInput) => {
  return (
    <div className={className}>
      <div className='flex justify-between'>
        <FieldLabel name={name} label={label}/>
        {additionalComponent}
      </div>
      <input autoComplete='off' className={`outline-none inline-block shadow-sm py-2.5 px-3 
      mb-1 w-full border rounded-lg focus-visible:border-green-500 focus-visible:border-2 focus:border-2 focus:border-green-500 
       active:border-green-500 ${error ? 'border-red-600' : ''}`}
             type={type}
             {...register(name, { required: required })}
             id={name} placeholder={placeholder} />
    </div>
  );
};
export default CustomInput;