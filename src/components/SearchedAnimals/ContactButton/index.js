import './styles.scss';
import { displayContact } from 'src/actions/animalSearched';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const ContactButton = ({ showContactValue }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="contact"
    >
      <button
        className="contact__button--display"
        type="button"
        onClick={() => {
          const showContactBool = !showContactValue;
          dispatch(displayContact(showContactBool));
        }}
      >
        Contacter l'association
      </button>
    </div>
  );
};

ContactButton.propTypes = {
  showContactValue: PropTypes.bool.isRequired,
};

export default ContactButton;
