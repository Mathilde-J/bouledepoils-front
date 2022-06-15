import './styles.scss';
import PropTypes from 'prop-types';

const AssociationContact = ({
  name,
  street,
  zip_code,
  city,
  phone_number,
  email,
}) => (
  <div className="association__infos">
    <p
      className="association__name"
    >
      {name}
    </p>

    <p
      className="association__address"
    >
      {street}
    </p>

    <p
      className="association__address"
    >
      {zip_code} {city}
    </p>

    <p
      className="association__phone"
    >
      {phone_number}
    </p>
    <p
      className="association__mail"
    >
      {email}
    </p>
  </div>
);

AssociationContact.propTypes = {
  name: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  zip_code: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default AssociationContact;
