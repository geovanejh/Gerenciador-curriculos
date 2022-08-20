export const limitFieldLength = (field, size) => {
  if (field.length > size) {
    return `${field.substring(0, size)}...`;
  } else {
    return field;
  }
};
