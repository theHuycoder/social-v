import React, { FC, memo, useMemo } from 'react';

type TDivider = {
  position?: 'left' | 'center' | 'right';
  width?: '1/4' | '2/4' | '3/4' | 'full';
  className?: string;
  text?: string;
  textBg?: string;
}

const Divider: FC<TDivider> = ({
                                 position = 'center',
                                 width = 'full',
                                 className,
                                 text,
                                 textBg = 'white',
                               }) => {


  const positionClasses = useMemo(() => {
    switch (position) {
      case 'center':
        return '-translate-x-1/2 left-1/2';
      case 'left':
        return 'left-0';
      case 'right':
        return 'right-0';
      default:
        return '-translate-x-1/2 left-1/2';
    }
  }, [position]);
  return (
    <div className={`relative pt-4 ${className ? className : ''}`}>
      <div className={`pt-px  bg-gray-300 absolute top-1/2 transform -translate-y-1/2  ${positionClasses} w-${width} `}>
        {
          text ?
            (<div className='w-full h-full relative'>
              <p
                className={`py-1 px-4 bg-${textBg} mb-0 
                uppercase absolute top-1/2 left-1/2 transform -translate-y-1/2 
                -translate-x-1/2 text-center text-gray-500 text-sm`}>
                {text}
              </p>
            </div>) :
            null
        }
      </div>
    </div>
  );
};
export default memo(Divider);