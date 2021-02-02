const groupBy = (array, key) => array
  .reduce(function (r, a) {
    r[a[key]] = r[a[key]] || [];
    r[a[key]].push(a);
    return r;
  }, Object.create(null));

export { groupBy };