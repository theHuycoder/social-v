import {LOADING_ON, LOADING_OFF} from '../types/loading.types';

export const turnOnGlobalLoading = ()=> ({type: LOADING_ON});
export const turnOffGlobalLoading = ()=> ({type: LOADING_OFF});