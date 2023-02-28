import "./Button.scss";

interface ButtonProps {
  children?: any;
  type?: any;
  onClick?: () => void;
  buttonStyle?: string;
  buttonSize?: string;
  className?: string;
}

const STYLES = ["btn--primary", "btn--outline", "btn--test"];
const SIZES = ["btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }: ButtonProps) => {
  const checkButtonStyle = STYLES.includes(buttonStyle!) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize!) ? buttonSize : SIZES[0];
  console.log(type);
  console.log(buttonStyle);
  console.log(buttonSize);

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
