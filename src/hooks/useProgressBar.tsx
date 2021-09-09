import { useEffect, useState } from 'react';
import axios from 'axios';


const useProgressBar = () => {
  const [progress, setProgress] = useState<number>(0);
  const [isCalling, setIsCalling] = useState(true);

  useEffect(() => console.log(progress), [progress]);


  axios.defaults.onDownloadProgress = progressEvent => {
    const percentComplete = Math.round((progressEvent.loaded * 100) / (progressEvent.total));
    setProgress((prevState)=> percentComplete)
  };

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() =>{
        setIsCalling(false)
      },1000)
    }else{
      setIsCalling(true)
    }
  }, [progress]);

  useEffect(() =>{
    if(!isCalling){
      setProgress(0)
    }
  },[isCalling])

  return { progress, isCalling };
};
export default useProgressBar;