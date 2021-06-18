// const readReviews = () => JSON.parse(localStorage.getItem('reviews'));
export const readReviews = (item) => JSON.parse(localStorage.getItem(item));
const saveReviews = (reviews) => localStorage.setItem('reviews', JSON.stringify(reviews));

export const createReview = (noteData) => {
  let notes = readReviews('reviews');
  if (notes && notes.length !== 0) {
    const nextId = notes[notes.length - 1].id + 1;
    const newnote = { id: nextId, ...noteData };
    notes = [...notes, newnote];
  } else {
    notes = [{ id: 1, ...noteData }];
  }
  saveReviews(notes);
};

export const readStorage = (item) => JSON.parse(localStorage.getItem(item));
export const saveStorage = (products) =>
  localStorage.setItem('cartStorage', JSON.stringify(products));
