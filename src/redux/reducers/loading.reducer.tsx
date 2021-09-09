import { LOADING_ON, LOADING_OFF } from '../types/loading.types';

interface IActionLoading {
  type: string;
}


const initialState = false;
const loadingReducer = (state = initialState, action: IActionLoading) => {
  const { type } = action;
  switch (type) {
    case (LOADING_ON):
      return true;
    case (LOADING_OFF):
      return false;
    default:
      return state;
  }
};

export default loadingReducer;