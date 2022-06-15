import { useDispatch } from 'react-redux';
import { displayNextProfile, displayPreviousProfile } from 'src/actions/animalSearched';
import Arrow from './Arrow';
import './styles.scss';

const Arrows = () => {
  const dispatch = useDispatch();

  return (
    <div className="nav__arrows">
      <Arrow
        identifier="left"
        clickedArrow={() => (dispatch(displayPreviousProfile()))}
      />
      <Arrow
        identifier="right"
        clickedArrow={() => (dispatch(displayNextProfile()))}
      />
    </div>
  );
};

export default Arrows;
