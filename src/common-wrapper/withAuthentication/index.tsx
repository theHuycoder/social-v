import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import useAuthentication from '../../hooks/useAuthentication';

enum EAuthStatus {
  PENDING = 'PENDING',
  FAILURE = 'FAILURE',
  SUCCESS = 'SUCCESS'
}

const withAuthentication = (WrappedComponent: any) => {
  return function AuthenticationGuard(props: any) {

    const status = useAuthentication();

    return status === EAuthStatus.PENDING ? null :
      status === EAuthStatus.FAILURE ?
        <Redirect to='/authentication/login'/> :
        <WrappedComponent {...props} />;
  };
};

export default withAuthentication;