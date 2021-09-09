import { EGender } from '../../../types/enums/gender.enums';

export interface ICreateUserWithProfileDto {
  username: string;
  password: string;
  confirm_password: string;
  email: string;
  first_name: string;
  last_name: string;
  gender: EGender;
}

export interface IFields {
  id: number;
  name: keyof ICreateUserWithProfileDto;
  placeholder: string;
  label: string;
  required: boolean;
  inputType: string;
  layout: number;
}

export interface IGenderRadio {
  label: string,
  name: string,
  id: string,
  required: boolean,
  defaultChecked?: boolean,
  checked?: boolean,
  value: EGender
}

export const fields: IFields[] = [
  {
    id: 1,
    name: 'first_name',
    placeholder: 'Your first name',
    label: 'First name',
    required: true,
    inputType: 'text',
    layout: 6,
  },
  {
    id: 2,
    name: 'last_name',
    placeholder: 'Your last name',
    label: 'Last name',
    required: true,
    inputType: 'text',
    layout: 6,
  },
  {
    id: 3,
    name: 'username',
    placeholder: 'Username',
    label: 'Username',
    required: true,
    inputType: 'text',
    layout: 12,
  },
  {
    id: 4,
    name: 'password',
    placeholder: 'Password',
    label: 'Password',
    required: true,
    inputType: 'password',
    layout: 12,
  },
  {
    id: 5,
    name: 'confirm_password',
    placeholder: 'Confirm password',
    label: 'Confirm password',
    required: true,
    inputType: 'password',
    layout: 12,
  },
  {
    id: 6,
    name: 'email',
    placeholder: 'Your Email',
    label: 'Email',
    required: true,
    inputType: 'email',
    layout: 12,
  },
];

export const genderRadios: IGenderRadio[] = [
  {
    label: 'Male',
    name: 'gender',
    id: 'gender-male',
    required: true,
    defaultChecked: true,
    value: EGender.male,
  },
  {
    label: 'Female',
    name: 'gender',
    id: 'gender-female',
    required: true,
    defaultChecked: false,
    value: EGender.female,
  },
  {
    label: 'Other',
    name: 'gender',
    id: 'gender-other',
    required: true,
    defaultChecked: false,
    value: EGender.other,
  },
];