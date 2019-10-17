const sortBy = (array, key, sort = 1) => {
  return array.sort((a, b) => (a[key] > b[key]) ? (1 * sort) : (a[key] < b[key]) ? (-1 * sort) : 0);
}

export default sortBy;