import './styles.scss';
import PropTypes from 'prop-types';

const AnimalDescription = ({
  age,
  description,
  gender,
  name,
  child_compatibility,
  garden_needed,
  status,
  other_animal_compatibility,

}) => {
  let messageStatus = '';
  switch (status) {
    case 0:
      messageStatus = `${name} est à adopter !`;
      break;

    case 1:
      messageStatus = `${name} est en cours de réservation.`;
      break;

    case 2:
      messageStatus = `${name} est déjà adopté.`;
      break;

    case 3:
      messageStatus = `${name} n'est pas disponible à l'adoption.`;
      break;

    default:
      messageStatus = 'Il n\'y a pas d\'information concernant le status.';
  }

  return (
    <div
      className="animal__profil__description"
    >
      <div
        className="animal__caracteristics"
      >
        <h3
          className="animal__name"
        >
          {name}
        </h3>
        <div className="animal__caracteristics--details">
          <span
            className="animal__details animal__details--gender"
          >
            {gender === 0 ? 'Femelle' : 'Mâle'}
          </span>
          <span
            className="animal__details animal__details--age"
          >
            {age} ans
          </span>
        </div>
      </div>

      <div
        className="animal__description"
      >
        <p
          className="animal__description--descr"
        >
          {description}
        </p>
        <p
          className="animal__specificity"
        >
          Cet animal est-il sociable/ compatible avec des enfants ?
        </p>
        <span className="animal__specificity--answer">
          {child_compatibility ? `${name} s'entend bien avec des enfants` : `${name} ne s'entend pas bien avec des enfants`}
        </span>
        <p
          className="animal__specificity"
        >
          Cet animal est-il sociable/ compatible avec d'autres animaux ?
        </p>
        <span className="animal__specificity--answer">
          {other_animal_compatibility ? `${name} s' entend bien avec d'autres animaux` : `${name} ne s'entend pas bien avec d'autres animaux`}
        </span>
        <p
          className="animal__specificity"
        >
          Cet animal a-t-il besoin d'un espace extérieur ?
        </p>
        <span className="animal__specificity--answer">
          {garden_needed ? `${name} aura besoin d'un espace extérieur` : `${name} n'aura pas besoin d'un espace extérieur`}
        </span>

        <p
          className="animal__specificity"
        >
          {name} est-il disponible ?
        </p>
        <span className="animal__specificity--answer">
          {messageStatus}
        </span>

      </div>

    </div>
  );
};
AnimalDescription.propTypes = {
  age: PropTypes.number,
  description: PropTypes.string.isRequired,
  gender: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  child_compatibility: PropTypes.bool.isRequired,
  garden_needed: PropTypes.bool.isRequired,
  status: PropTypes.number.isRequired,
  other_animal_compatibility: PropTypes.bool.isRequired,
};

AnimalDescription.defaultProps = {
  age: 3,
};

export default AnimalDescription;
