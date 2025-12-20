const Button = ({ text, type = 'button', onClick, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;