import "./Button.css";

const Button = ({
  color = "#ffffff",
  bgColor = "#000000",
  btnName = "Click me",
  handleBtnClick,
}) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      onClick={handleBtnClick}
    >
      {btnName}
    </button>
  );
};

export default Button;
