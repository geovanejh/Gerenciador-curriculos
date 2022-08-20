import moment from "moment";

export const formatDateToBackend = (date) => {
  return moment(date, "DD/MM/YYYY").format("YYYY-MM-DD");
};

export const formateDateToBrazil = (date) => {
  return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
};
