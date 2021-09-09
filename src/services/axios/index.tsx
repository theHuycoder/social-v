import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL?.toString();

const setupAxios = ()=>{
  axios.defaults.baseURL = BASE_URL;
  // axios.defaults.headers.common['Content-Type'] = 'application/json';
  // axios.defaults.headers.common['Cache-Control'] = 'no-store';
  // axios.defaults.headers.common['Pragma'] = 'no-cache';
  // axios.defaults.onDownloadProgress = progressEvent =>{
  //   console.log(progressEvent.lengthComputable)
  //   const percentComplete = Math.round((progressEvent.loaded * 100)/ (progressEvent.total));
  //   console.log(percentComplete," index")
  // }
}

setupAxios();