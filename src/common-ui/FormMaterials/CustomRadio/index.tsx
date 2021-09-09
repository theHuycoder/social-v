import React from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import './custom-radio.css';
import { EGender } from '../../../types/enums/gender.enums';

interface IPropsCustomRadio {
  label: string;
  name: Path<any>;
  register: UseFormRegister<any>;
  required?: boolean;
  id: string;
  defaultChecked?: boolean;
  checked?: boolean;
  className?: string;
  color?: string;
  value: EGender;
}

const CustomRadio: React.FC<IPropsCustomRadio> = (props: IPropsCustomRadio) => {
  const {
    label,
    name,
    id,
    register,
    required = false,
    defaultChecked,
    checked,
    className = '',
    color = 'green',
    value,
  } = props;
  return (
    <div className={`custom-radio flex items-center cursor-pointer ${className}`}>
      <div className={`flex justify-center relative items-center 
      w-5 h-5 mr-1.5 border-2 border-${color}-500 rounded-full cursor-pointer`}>
        <input type='radio' id={id}
               {...register(name, { required })}
               name={name}
               defaultChecked={defaultChecked}
               className='inset-0 absolute w-full h-full opacity-0 cursor-pointer'
               checked={checked}
               value={value}
        />
        <div className={`hidden checkmark w-3 h-3 rounded-full bg-${color}-500`} />
      </div>
      <label htmlFor={id} className='inline-block p-0 m-0 cursor-pointer'>{label}</label>
    </div>
  );
};
export default React.memo(CustomRadio);