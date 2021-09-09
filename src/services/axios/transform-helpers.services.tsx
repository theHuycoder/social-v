import { AxiosError, AxiosResponse } from 'axios';

export const getSuccessData = (response:AxiosResponse)=> {
  if (response && response.data){
    return response.data;
  }
  return response;
}

export const getErrorMessage = (error: AxiosError) =>{

  if (error && error.response && error.response.data){
    throw error.response.data
  }

}