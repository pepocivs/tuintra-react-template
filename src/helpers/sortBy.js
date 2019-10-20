const sortBy = (array, key, sort = 1) => {
  return array.sort((a, b) => (a[key] > b[key]) ? (1 * sort) : (a[key] < b[key]) ? (-1 * sort) : 0);
}

const arrayIndexContains = (array, value) => {
  let findedIndex = -1;
  // eslint-disable-next-line array-callback-return
  array.map((element, index) => {
    if (value.includes(element)) findedIndex = index;
  })  
  return findedIndex;
}

const sortByArray = (array, key, arraySort) => {
  return array.sort((a,b) => 
    (arrayIndexContains(arraySort, a[key]) > arrayIndexContains(arraySort, b[key]))
      ? 1 
      : (arrayIndexContains(arraySort, a[key]) < arrayIndexContains(arraySort, b[key]))
        ? -1 
        : 0
  );
};



export { sortBy, sortByArray };