import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Carrousel from './Carrousel';
import './presentation.scss';
import './carrousel.scss';
import Loader from '../Loader';
import { connexionCarrousselApi } from '../../actions/carroussel';

const Presentation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(connexionCarrousselApi());
  }, []);

  const displayedProfile = useSelector((state) => state.Carroussel.displayProfile);

  const animalProfile = useSelector((state) => (
    state.Carroussel.apiresults[displayedProfile]
  ));

  const allAnimalProfiles = useSelector((state) => (state.Carroussel.apiresults));

  return (
    <div className="random">
      {allAnimalProfiles.length > 0 ? (
        <>
          <div className="random__identity">
            <h1 className="random__title">Bienvenue sur le site Boule de poils</h1>
            <p className="random__welcome">
              Ici,
              tu trouveras plein d'animaux qui n'attendent qu'un foyer
              aimant pour les accueillir !
            </p>
            <p className="random__welcome">Effectue une recherche et
              tu auras peut-être la chance de tomber sur le profil de :
            </p>
          </div>

          <div className="random__carrousel">
            <Carrousel />
          </div>
          <div className="random__animal">
            <h2 className="random__name">{animalProfile.name}</h2>
            <p className="random__description">{animalProfile.description}</p>
            <p className="random__more">...</p>
          </div>
        </>
      ) : <Loader />}
    </div>
  );
};

export default Presentation;
