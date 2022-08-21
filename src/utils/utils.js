export const limitFieldLength = (field, size) => {
  if (field.length > size) {
    return `${field.substring(0, size)}...`;
  } else {
    return field;
  }
};

export const formataNumeroFrontEnd = (cpf) => {
  return `(${cpf.slice(0, 2)})${cpf.slice(2, 7)}-${cpf.slice(7, 11)}`;
};
