import PropTypes from 'prop-types';
import './styles.scss';
import arrow from 'src/assets/images/bx-chevron-left.svg';

const Arrow = ({ identifier, clickedArrow }) => {
  const handleChange = () => {
    clickedArrow();
  };

  return (
    <button
      type="button"
      className="button__arrow"
      onClick={handleChange}
      id={identifier}
      name={identifier}
    >
      <img
        src={arrow}
        alt="portrait de l'animaux"
      />
    </button>
  );
};

Arrow.propTypes = {
  identifier: PropTypes.string.isRequired,
  clickedArrow: PropTypes.func.isRequired,
};
export default Arrow;
