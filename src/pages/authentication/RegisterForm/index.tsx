import LightText from '../../../common-ui/Text/LightText';
import Divider from '../../../common-ui/Divider';
import OutlinedButton from '../../../common-ui/Buttons/OutlinedButton';
import { directTo } from '../../../helpers/history.helpers';
import React from 'react';
import MainHeading from '../components/MainHeading';
import Form from './Form';
import axios from 'axios';


const RegisterForm: React.FC<any> = () => {

  return (
    <div>
      <div className='mb-6'>
        <MainHeading>Register</MainHeading>
        <LightText>Welcome to our world!</LightText>
      </div>
      <Form />
      <Divider text='Already have account ?' className='my-6' />
      <div className='flex items-center justify-between'>
        <OutlinedButton size='sm' type='button' onClick={() => directTo('/authentication/login')}>
          Login
        </OutlinedButton>
        <div>
          <span>Google </span>
        </div>
        <div>
          <span>Facebook</span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;