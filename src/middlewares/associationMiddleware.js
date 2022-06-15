import axios from 'axios';

import { CONNEXION_ASSOCIATION_API, saveDataAssociation } from '../actions/association';

const associationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNEXION_ASSOCIATION_API:
      axios.get('http://localhost:8081/api/association', {})

        .then((response) => {
          store.dispatch(saveDataAssociation(response.data));
        })

        .catch((error) => {
          // handle error
          console.log(error);
        });
      break;
    default:
  }

  next(action);
};

export default associationMiddleware;
