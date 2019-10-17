const sortBy = (array, key, sort = 1) => {
  return array.sort((a, b) => (a[key] > b[key]) ? (1 * sort) : (a[key] < b[key]) ? (-1 * sort) : 0);
}

const sortByArray = (array, key, arraySort) => {
  return array.sort((a,b) => 
    (arraySort.indexOf(a[key]) > arraySort.indexOf(b[key]) 
      ? 1 
      : (arraySort.indexOf(a[key]) < arraySort.indexOf(b[key]) 
        ? -1 
        : 0
      )
    )
  );
}

export { sortBy, sortByArray };