import { createBrowserHistory } from 'history';

const BASEURL = process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL : 'http://localhost:300';
export const browserHistory = createBrowserHistory({ basename: '/' });

export const directTo = (url: string) => {
  return browserHistory.push(`${url}`);
};