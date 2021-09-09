import React, { useEffect, useRef, useState } from 'react';
import useProgressBar from '../../hooks/useProgressBar';

const ProgressBar: React.FC<any> = () => {
  const { progress, isCalling } = useProgressBar();
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() =>{
    if (barRef && barRef.current){
      barRef.current.style.width = `${progress}%`
    }
  },[progress])

  return !isCalling || progress === 0 ? null : (
    <div  className='fixed top-0 left-0 p-1 duration-500  rounded-xl bg-green-700 z-50' ref={barRef}/>
  );
};
export default ProgressBar;