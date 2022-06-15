import { useSelector, useDispatch } from 'react-redux';
import { displayNextSlide } from 'src/actions/carroussel';
import { useEffect } from 'react';

const Carrousel = () => {
  const dispatch = useDispatch();

  const nextSlide = () => {
    clearInterval();
    dispatch(displayNextSlide());
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  });

  const displayedProfile = useSelector((state) => state.Carroussel.displayProfile);

  const allAnimalProfiles = useSelector((state) => (state.Carroussel.apiresults));

  return (
    <section className="carrousel">
      {allAnimalProfiles.map((slide, index) => (
        <div
          className={index === displayedProfile ? 'slide active' : 'slide'}
          key={slide.id}
        >
          {index === displayedProfile && (
            <img src={`http://localhost:8081/images/animaux/${slide.imageName}`} alt="travel" className="slider__image" />
          )}
        </div>
      ))}
    </section>
  );
};

export default Carrousel;
