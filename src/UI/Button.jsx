import "./button.scss";

const Button = ({ children, className, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className={`btns ${className}`}>
      {children}
    </button>
  );
};

export default Button;
