export function selectBook(book) {
  // selectBook - це actionCreator, повертає action - обєкт із властивістю type
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}