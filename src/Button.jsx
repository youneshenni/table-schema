import PropTypes from "prop-types";

function Button({ style, onClick, children }) {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.exact({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    padding: PropTypes.string,
  }),
  onClick: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
};

export default Button;
