import React from 'react';

const MainHeading:React.FC<any> = ({children})=>{
  return (
    <h1 className='text-4xl mb-3'>{children}</h1>
  )
}
export default MainHeading;