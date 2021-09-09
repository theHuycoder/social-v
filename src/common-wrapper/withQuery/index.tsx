import { QueryClient, QueryClientProvider,QueryCache } from 'react-query';
import React from 'react';

const withQuery = (WrappedComponent: React.ComponentType<any>) => {
  const queryClient = new QueryClient({queryCache: new QueryCache()});
  const QueryWrapper: React.FC<any> = (props: any) => {
    return (
      <QueryClientProvider client={queryClient}>
        <WrappedComponent {...props} />
      </QueryClientProvider>
    );
  };
  return QueryWrapper;
};
export default withQuery;