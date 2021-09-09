import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { EGender } from '../../../types/enums/gender.enums';
import { joiResolver } from '@hookform/resolvers/joi';
import { joiSchema } from './joi-schema';
import CustomInput, { FieldLabel } from '../../../common-ui/FormMaterials/CustomInput';
import { ErrorMessage } from '@hookform/error-message';
import ErrorInputMessage from '../../../common-ui/FormMaterials/ErrorInputMessage';
import CustomRadio from '../../../common-ui/FormMaterials/CustomRadio';
import ContainedButton from '../../../common-ui/Buttons/ContainedButton';
import { fields, genderRadios, ICreateUserWithProfileDto } from './fields';
import { callRegisterNewUser } from '../../../services/axios/auth/register.services';
import axios from 'axios';
import useLoadingApi from '../../../hooks/useLoadingApi';
import { useQueryClient } from 'react-query';


const Form: React.FC<any> = React.memo(() => {
  const [isPosting, setIsPosting] = useState(false);
  const queryClient = useQueryClient();
  const { register, handleSubmit, formState: { errors }, getValues, setError } = useForm<ICreateUserWithProfileDto>(
    {
      mode: 'onChange',
      defaultValues: {
        username: '',
        password: '',
        confirm_password: '',
        email: '',
        first_name: '',
        last_name: '',
        gender: EGender.male,
      },
      resolver: joiResolver(joiSchema),
    },
  );


  const postFormValues = async () => {
    try {
      return await callRegisterNewUser(getValues());
    } catch (error) {
      if (error) {
        throw error;
      }
    }
  };

  const callApi = useLoadingApi({
    key: 'register-new-user',
    queryFn: postFormValues,
    loadingFn: ()=> setIsPosting(true),
    errorFn: (error) => console.log(error),
    // successFn: ()=> setIsPosting(false)
  });

  const onSubmit = async (formValues: ICreateUserWithProfileDto) => {
    if (Object.keys(errors).length > 0) {
      return console.error(errors);
    }
    // try {
    //   const response = await callRegisterNewUser(formValues);
    //   if (response && response.success) {
    //     console.log(response);
    //   }
    // } catch (error) {
    //   if (error && Array.isArray(error)) {
    //     error.forEach(({ field, message }) => setError(field, { message }));
    //   } else {
    //     console.log(error);
    //   }
    // }
    try {
      const data = await queryClient.fetchQuery('register-new-user')
      if (data){
        setIsPosting(false)
      }
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-12 gap-x-3 gap-y-2'>
      {
        fields &&
        fields.length > 0 &&
        fields.map((field) => {
          const { id, name, placeholder, label, required, inputType, layout } = field;
          const error = errors?.[name];
          return (
            <div key={`${name}-${id}`} className={`col-span-${layout}`}>
              <CustomInput
                className={error && error.message ? 'mb-1' : 'mb-1.5'}
                label={label}
                name={name}
                register={register}
                required={required}
                placeholder={placeholder}
                error={Boolean(error?.message)}
                type={inputType}
              />
              <ErrorMessage name={name} errors={errors} render={({ message }) => {
                return <ErrorInputMessage>{message}</ErrorInputMessage>;
              }} />
            </div>
          );
        })
      }
      <div className='col-span-12 mb-5'>
        <FieldLabel name='' label='Gender' />
        <div className='flex justify-between items-center'>
          {
            genderRadios && genderRadios.length > 0 &&
            genderRadios.map((radio) => {
              return <CustomRadio key={radio.id} {...radio} register={register} />;
            })
          }
        </div>
        <ErrorMessage name={'gender'} errors={errors} render={({ message }) => {
          return <ErrorInputMessage>{message}</ErrorInputMessage>;
        }} />
      </div>
      <div className='flex justify-between items-center col-span-12 mb-3'>
        <ContainedButton size='sm' fullWidth={true} type='submit' disabled={isPosting}>
          Register
        </ContainedButton>
      </div>
    </form>
  );
});
export default Form;