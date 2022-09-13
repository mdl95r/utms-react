export const generateUrl = (state) => {
  let str = Object.entries(state.fields)
    .map(([key, val]) => {
      return val ? `${key}=${val}&` : null;
    })
    .join('');

  str = str.slice(0, str.length - 1);

  return state.baseURL.address !== ''
    ? `${Object.values(state.baseURL).join('')}/?${str}`
    : '';
};
