export default (data) => {
  if (!data[0]) return [];
  return data.map(competitions => {
    competitions.historicNational = filterArray(competitions.historic, 'national');
    competitions.historicLocal = filterArray(competitions.historic, 'local');
    competitions.hasBoth = !!(competitions.historicNational.length > 0 && competitions.historicLocal.length > 0)
    return competitions;
  });
}

function filterArray(array, filter) {
  const nationalSlugs = ['ligaNacional', 'diploma'];
  return (filter === 'national')
    ? sortByKey(array.filter(historic => nationalSlugs.includes(historic.ambit)), 'priority')
    : sortByKey(array.filter(historic => !nationalSlugs.includes(historic.ambit)), 'priority');
}

function sortByKey(array, key) {
  return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}