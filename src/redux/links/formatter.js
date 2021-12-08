export default (data) => {
  if (!data[0]) return [];
  const footerCategories = [5, 6, 9, 10, 11, 12];
  const sortedLinks = sortByKey(data, 'categorySort');
  const links = sortedLinks.filter(link => (!footerCategories.includes(link.categoryId)) && link.links.length > 0);
  const footerLinks = sortedLinks.filter(link => footerCategories.includes(link.categoryId));
  return { links, footerLinks };
}

function sortByKey(array, key) {
  return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}