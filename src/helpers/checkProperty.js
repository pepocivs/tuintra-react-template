export default (property, props, statements) => {
  let checker = true;
  // eslint-disable-next-line array-callback-return
  statements.map(statement => {
    if (!props[statement][property]) checker = false;
  })
  return checker;
}