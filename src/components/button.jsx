import PropTypes from "prop-types";

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`px-5 py-3 bg-primary hover:opacity-80 text-md rounded text-white ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Button;
