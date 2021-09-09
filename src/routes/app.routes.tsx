import React from 'react';
import AuthenticationPage from '../pages/authentication';

interface IRoutes {
  name: string;
  path: string,
  exact?: boolean,
  strict?: boolean,
  component: ({ ...props }?: any) => React.ReactNode
}

export const withoutValidateRoutes: IRoutes[] = [
  {
    name: 'auth-route',
    path: '/authentication',
    exact: false,
    strict: false,
    component: () => <AuthenticationPage />,
  },
];
export const withValidateRoutes = [];


