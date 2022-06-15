export const CONNEXION_ASSOCIATION_API = 'CONNEXION_ASSOCIATION_API';

export const SAVE_DATA_ASSOCIATION = 'SAVE_DATA_ASSOCIATION';

// Connexion avec l'api

export const connexionAssociationApi = () => ({
  type: CONNEXION_ASSOCIATION_API,

});

// sauvegarde des donnés de l'api dans le state

export const saveDataAssociation = (results) => ({

  type: SAVE_DATA_ASSOCIATION,
  datas: results,

});
