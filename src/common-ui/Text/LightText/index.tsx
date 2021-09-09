import React from 'react';

interface IPropsLightText {
  children?: any;
  className?: string;
}

const LightText: React.FC<IPropsLightText> = ({ children, className }) => {
  return (
    <p className={`font-light text-gray-600 ${className}`}>
      {children}
    </p>
  );
};
export default LightText;