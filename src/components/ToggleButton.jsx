import PropTypes from "prop-types";

const TogleButton = ({ toggle, setToggle }) => {
  let onClickAction = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  return (
    <div id="toggle-btn">
      <button onClick={onClickAction} id="btn-2">
        {!toggle ? "Next" : "Prev"}
      </button>
    </div>
  );
};

TogleButton.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
};

export default TogleButton;
