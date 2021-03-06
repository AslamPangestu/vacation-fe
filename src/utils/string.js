// https://stackoverflow.com/a/5717133
export const validURL = (str) => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
};

export const formatNumber = (val) => {
  const formatType = new Intl.NumberFormat("id-ID");
  return formatType.format(val);
};

export const getImageSource = (val) => {
  if (validURL(val)) {
    return val;
  }
  return `${process.env.REACT_APP_HOST}${val}`;
};
