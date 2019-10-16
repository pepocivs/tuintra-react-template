export default (data) => {
  if (!data[0]) return [];
  const sortList = [1, 8, 2, 3, 4, 7];
  const links = data.filter(link => (link.categoryId !== 5 && link.categoryId !== 6) && link.links.length > 0);  
  return {
    links: links.sort((a,b) => (sortList.indexOf(a.categoryId) > sortList.indexOf(b.categoryId) ? 1 : -1)),
    footerLinks: data.filter(link => (link.categoryId === 5 || link.categoryId === 6)),
  };
}