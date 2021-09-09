import React from 'react';

const ErrorInputMessage:React.FC<any> = ({children})=>{
  return <p className='mb-4 text-red-600 text-sm'>*{children}</p>
}
export default ErrorInputMessage;