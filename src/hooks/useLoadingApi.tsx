import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { turnOffGlobalLoading, turnOnGlobalLoading } from '../redux/actions/loading.actions';
import { RootState } from '../redux/reducers/root.reducers';

interface IUseLoadingApi {
  key: string;
  queryFn: (...params: any) => Promise<any>;
  loadingFn?: (...params: any) => any;
  errorFn?: (errorMessage: string | undefined) => any;
  successFn?: (...params: any) => any;
}

const useLoadingApi = ({ key, queryFn, loadingFn, errorFn, successFn }: IUseLoadingApi) => {
  const { isLoading, isError, error, data } = useQuery<any, Error>(key, queryFn,
    { enabled: false,refetchOnWindowFocus: false,retry:false });
  const loadingGlobalStatus = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch();

  if (isLoading) {
    return !loadingFn ? dispatch(turnOnGlobalLoading()) : loadingFn();
  }

  if (loadingGlobalStatus) {
    dispatch(turnOffGlobalLoading());
  }

  if (isError && error) {
    return !errorFn ? error : errorFn(error?.message);
  }

  if (data && successFn) {
      successFn()
  }
  return data;
};

export default useLoadingApi;