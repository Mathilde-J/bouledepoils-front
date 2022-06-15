export const NEXT_PROFILE = 'NEXT_PROFILE';
export const PREVIOUS_PROFILE = 'PREVIOUS_PROFILE';
export const DISPLAY_CONTACT = 'DISPLAY_CONTACT';
export const SAVE_ANIMALS = 'SAVE_ANIMALS';
export const FETCH_ANIMALS = 'FETCH_ANIMALS';
export const FETCH_ALL_ANIMALS = 'FETCH_ALL_ANIMALS';
export const EMPTY_ANIMAL_RESULTS = 'EMPTY_ANIMAL_RESULTS';

export const displayNextProfile = () => ({
  type: NEXT_PROFILE,
});

export const displayPreviousProfile = () => ({
  type: PREVIOUS_PROFILE,
});

export const displayContact = (bool) => ({
  type: DISPLAY_CONTACT,
  displayed: bool,
});

export const fetchAnimals = () => ({
  type: FETCH_ANIMALS,
});

export const fetchAllAnimals = () => ({
  type: FETCH_ALL_ANIMALS,
});

export const saveFetchedAnimals = (dataReceived) => ({
  type: SAVE_ANIMALS,
  datas: dataReceived,
});

export const emptyAnimalResults = () => ({
  type: EMPTY_ANIMAL_RESULTS,
});
