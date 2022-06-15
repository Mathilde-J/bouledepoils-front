export const CONNEXION_CARROUSSEL_API = 'CONNEXION_CARROUSSEL_API';

export const SAVE_DATA = 'SAVE_DATA';

export const NEXT_SLIDE = 'NEXT_SLIDE';

export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';

// Connexion avec l'api

export const connexionCarrousselApi = () => ({
  type: CONNEXION_CARROUSSEL_API,

});

// sauvegarde des donnés de l'api dans le state

export const saveData = (results) => ({

  type: SAVE_DATA,
  datas: results,

});

export const displayNextSlide = () => ({
  type: NEXT_SLIDE,
});

export const displayPreviousSlide = () => ({
  type: PREVIOUS_SLIDE,
});
