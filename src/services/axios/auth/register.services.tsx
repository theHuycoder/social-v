import axios from 'axios';
import { ICreateUserWithProfileDto } from '../../../pages/authentication/RegisterForm/fields';
import { getErrorMessage, getSuccessData } from '../transform-helpers.services';

export const callRegisterNewUser = (newUserData: ICreateUserWithProfileDto) => {
  return axios.post('/users', newUserData)
    .then(response => getSuccessData(response))
    .catch(error => getErrorMessage(error));
};