import PropTypes from "prop-types";

export function Button(props) {
  return (
    <button
      className="m-auto w-11/12 border-solid border-2 border-violet-500 p-4 mb-2 rounded"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
