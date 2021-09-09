import { combineReducers } from 'redux';
import loadingReducer from './loading.reducer';

const rootReducers = combineReducers({
  loading: loadingReducer,
});

export default rootReducers;
export type RootState = ReturnType<typeof rootReducers>