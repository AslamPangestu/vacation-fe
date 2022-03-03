export const isNumber = (val) => {
  const pattern = new RegExp("[0-9]*");
  return pattern.test(val);
};
