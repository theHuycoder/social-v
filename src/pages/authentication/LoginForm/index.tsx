import React from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from '../../../common-ui/FormMaterials/CustomInput';
import { joiResolver } from '@hookform/resolvers/joi';
import { ErrorMessage } from '@hookform/error-message';
import ContainedButton from '../../../common-ui/Buttons/ContainedButton';
import Divider from '../../../common-ui/Divider';
import OutlinedButton from '../../../common-ui/Buttons/OutlinedButton';
import LightText from '../../../common-ui/Text/LightText';
import { directTo } from '../../../helpers/history.helpers';
import ErrorInputMessage from '../../../common-ui/FormMaterials/ErrorInputMessage';
import MainHeading from '../components/MainHeading';
import {joiSchema} from './joi-schema';

type TLoginForm = {
  email: string;
  password: string;
}

const LoginForm: React.FC<any> = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TLoginForm>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: joiResolver(joiSchema),
  });

  const onSubmit = ({ email, password }: TLoginForm) => {

  };

  return (
    <div>
      <div className='mb-6'>
        <MainHeading>Login</MainHeading>
        <LightText>Enter your email address and password to access admin panel.</LightText>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='grid grid-col-12 gap-x-3 gap-y-2'>
        <div className='col-span-12'>
          <CustomInput
            className={errors.email && errors.email.message ? 'mb-1' : 'mb-1.5'}
            label='Email address'
            name='email'
            register={register}
            required={true}
            placeholder='Enter email'
            error={Boolean(errors?.email?.message)} />
          <ErrorMessage name={'email'} errors={errors} render={({ message }) => {
            return <ErrorInputMessage>{message}</ErrorInputMessage>;
          }} />
        </div>
        <div className='col-span-12'>
          <CustomInput
            className='mb-1'
            label='Password'
            type={'password'}
            name='password'
            register={register}
            required={true}
            placeholder='Enter password'
            error={Boolean(errors?.password?.message)}
            additionalComponent={<h1>Forget</h1>} />
          <ErrorMessage name={'password'} errors={errors} render={({ message }) => {
            return <ErrorInputMessage>{message}</ErrorInputMessage>;
          }} />
        </div>
        <div className='flex justify-between items-center mt-6 col-span-12'>
          <div>Remember me</div>
          <ContainedButton size='sm' type='submit'>Log in</ContainedButton>
        </div>
      </form>
      <Divider text='Have no account ?' className='my-6' />
      <div className='flex items-center justify-between'>
        <OutlinedButton size='sm' type="button" onClick={()=> directTo("/authentication/register")}>
          Register
        </OutlinedButton>
        <LightText>or login with</LightText>
        <div>
          <span>Google </span>
          <span>Facebook</span>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;