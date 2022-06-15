import './styles.scss';
import PropTypes from 'prop-types';

const AnimalPicture = ({ imageName }) => (
  <img
    className="animal__picture"
    src={`http://localhost:8081/images/animaux/${imageName}`}
    alt="animal's profile"
  />
);

AnimalPicture.propTypes = {
  imageName: PropTypes.string.isRequired,
};

export default AnimalPicture;
