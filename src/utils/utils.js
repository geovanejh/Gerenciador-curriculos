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

export const ESTADOS = [
  { id: "", nome: "" },
  { id: "AC", nome: "Acre" },
  { id: "AL", nome: "Alagoas" },
  { id: "AP", nome: "Amapá" },
  { id: "AM", nome: "Amazonas" },
  { id: "BA", nome: "Bahia" },
  { id: "CE", nome: "Ceará" },
  { id: "DF", nome: "Distrito Federal" },
  { id: "ES", nome: "Espirito Santo" },
  { id: "GO", nome: "Goiás" },
  { id: "MA", nome: "Maranhão" },
  { id: "MS", nome: "Mato Grosso do Sul" },
  { id: "MT", nome: "Mato Grosso" },
  { id: "MG", nome: "Minas Gerais" },
  { id: "PA", nome: "Pará" },
  { id: "PB", nome: "Paraíba" },
  { id: "PR", nome: "Paraná" },
  { id: "PE", nome: "Pernambuco" },
  { id: "PI", nome: "Piauí" },
  { id: "RJ", nome: "Rio de Janeiro" },
  { id: "RN", nome: "Rio Grande do Norte" },
  { id: "RS", nome: "Rio Grande do Sul" },
  { id: "RO", nome: "Rondônia" },
  { id: "RR", nome: "Roraima" },
  { id: "SC", nome: "Santa Catarina" },
  { id: "SP", nome: "São Paulo" },
  { id: "SE", nome: "Sergipe" },
  { id: "TO", nome: "Tocantins  " },
];
