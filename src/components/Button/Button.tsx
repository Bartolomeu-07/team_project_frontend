import './Button.scss';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return (
    <button className="button" {...buttonProps}>
      {children}
    </button>
  );
};
