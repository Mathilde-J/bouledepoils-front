import { SAVE_DATA, NEXT_SLIDE, PREVIOUS_SLIDE } from 'src/actions/carroussel';

const initialState = {
  displayProfile: 0,
  apiresults: [],
  name: '',
  description: '',
  imageName: '',
};

const carrouselReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATA: {
      return {
        ...state,
        apiresults: action.datas,
      };
    }

    case NEXT_SLIDE: {
      const newState = { ...state };

      const maxIndex = newState.displayProfile + 1 >= newState.apiresults.length
        ? newState.displayProfile = 0 : newState.displayProfile + 1;

      newState.displayProfile = maxIndex;

      return newState;
    }

    case PREVIOUS_SLIDE: {
      const newState = { ...state };

      const minIndex = newState.displayProfile - 1 < 0
        ? newState.displayProfile = newState.apiresults.length - 1
        : newState.displayProfile - 1;

      newState.displayProfile = minIndex;

      return newState;
    }
    default:
      return state;
  }
};

export default carrouselReducer;
