import { SAVE_DATA_ASSOCIATION } from 'src/actions/association';

const initialState = {
  apiresults: [],
  name: '',
  description: '',
};

const associationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DATA_ASSOCIATION: {
      return {
        ...state,
        apiresults: action.datas,
      };
    }
    default:
      return state;
  }
};

export default associationReducer;
