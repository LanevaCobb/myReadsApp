export const mergeAndSearch = (shelf, search) => {
  const hashTable = {};
  shelf.forEach(book => hashTable[book.id] = book.shelf)
                
  search.forEach(book => {
 	book.shelf = hashTable[book.id] || 'none'
  })

  return search;
}