import React from 'react';

interface IPropsContainedButton {
  children: any;
  color?: string;
  onClick?: (...params: any) => void;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  type?: 'submit' | 'button';
  className?: string;
  fullWidth?: boolean;
}

const OutlinedButton: React.FC<IPropsContainedButton> = ({
                                                            children,
                                                            color = 'green',
                                                            onClick,
                                                            size = 'md',
                                                            type = 'button',
                                                            className = '',
                                                            fullWidth = false
                                                          }: IPropsContainedButton) => {

  const padding = React.useMemo(() => {
    switch (size) {
      case 'xs':
        return 'px-2 py-1 text-sm';
      case 'sm':
        return 'px-4 py-2 text-md';
      case 'md':
        return 'px-5 py-2.5 text-lg';
      case 'lg':
        return 'px-6 py-3 text-xl';
      case 'xl':
        return 'px-7 py-3.5 text-2xl';
      case '2xl':
        return 'px-8 py-4 text-3xl';
      default:
        return 'px-4 py-2';
    }
  }, [size]);
  const handleClick = onClick ? onClick : ()=>{}

  return (
    <button type={type}
            className={`outline-none bg-transparent rounded-lg ${padding} 
            text-${color}-500 border border-${color}-500 shadow-sm hover:bg-${color}-50 hover:border-0  hover:shadow-md ${fullWidth && "w-full"} ${className}`}
            onClick={handleClick}>
      {children}
    </button>
  );
};
export default OutlinedButton;