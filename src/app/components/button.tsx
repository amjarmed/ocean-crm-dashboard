import { FC } from 'react';
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  isFullSize?: boolean;
  children?: React.ReactNode;
}
const Button: FC<ButtonProps> = ({
  variant = 'primary',
  isFullSize,
  children,
}) => {
  return (
    <button
      className={`btn
    ${variant === 'primary' && 'btn-primary'}
    ${variant === 'secondary' && 'btn-secondary'}
    ${variant === 'outline' && 'btn-outline'}
    ${isFullSize && 'w-full'}
    
    `}
    >
      {children}
    </button>
  );
};
export default Button;
