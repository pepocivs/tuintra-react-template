export default (data) => {
  if (!data[0]) return [];
  return {
    links: data.filter(link => (link.categoryId !== 5 && link.categoryId !== 6)),
    footerLinks: data.filter(link => (link.categoryId === 5 || link.categoryId === 6)),
  };
}